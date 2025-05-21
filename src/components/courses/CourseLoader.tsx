import style from "./Courses.module.css";
// import style from "../styles/CourseLoader.module.css";
import { useEffect, useState } from "preact/hooks";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Note, { TOCParser } from "./NotesPage";
import { Link } from "wouter";

export interface CourseLoaderProps {
  courseId: string;
  title: string;
  term: string;
}

// TODO: May need to be more selective in the future
const modules = import.meta.glob("./cs*/notes/lesson*.md", {
  query: "?raw",
  import: "default",
});

export default function CourseLoader({ courseId, title }: CourseLoaderProps) {
  const [notes, setNotes] = useState<string[] | null>(null);
  const [error, setError] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);

  // Could use a bit more of an elegant solution for desktop vs. mobile layouts
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = width < 1000;
  const isTiny = width < 600;

  useEffect(() => {
    if (!isMobile) setTocOpen(true);
  }, [isMobile]);

  useEffect(() => {
    setError(false);
    setNotes(null);
    setTocOpen(true);

    const entries = Object.entries(modules)
      .filter(([path]) => path.includes(`/${courseId}/notes/`))
      .sort(([a], [b]) => a.localeCompare(b));

    if (entries.length === 0) {
      setError(true);
      return;
    }

    Promise.all(entries.map(([, importer]) => importer()))
      .then((allMarkdown) => {
        setNotes(allMarkdown as string[]);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [courseId]);

  if (error) {
    return (
      <div class={style.errorPage}>
        <h2>Sorry, no course found at “{courseId}”</h2>
        <Link href="/teaching">← Back to all courses</Link>
      </div>
    );
  }

  if (notes === null) {
    return <div>Loading course . . .</div>;
  }

  const allMarkdown = notes.join("\n\n");

  return (
    <div class={`${style.page} ${courseId}`}>
      {isMobile && (
        <button class={style.toggleTOC} onClick={() => setTocOpen((o) => !o)}>
          Toggle Menu
        </button>
      )}
      <LayoutGroup>
        <AnimatePresence initial={false}>
          {tocOpen && (
            <motion.div
              key="toc"
              class={style.tableOfContents}
              layout
              initial={{ width: 0, opacity: 0, padding: "0rem" }}
              animate={{
                width: isTiny ? "100%" : "21rem",
                opacity: 1,
                padding: isTiny ? "1rem" : "2rem",
              }}
              exit={{ width: 0, opacity: 0, padding: "0rem" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div class={style.courseHeader}>
                <h1>{courseId.toUpperCase()}</h1>
                <h1>{title}</h1>
              </div>

              <TOCParser markdown={allMarkdown} />

              <footer class={style.footer}>
                <Link href="/teaching">← Back to all courses</Link>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          class={`${style.content} 
                  ${isTiny && tocOpen ? style.toggleContent : ""}`}
        >
          <div class={style.contentInner}>
            {notes.map((md, idx) => (
              <Note key={idx} markdown={md} />
            ))}
          </div>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
