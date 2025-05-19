import style from "./Courses.module.css";
// import style from "../styles/CourseLoader.module.css";
import { useEffect, useState } from "preact/hooks";
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

  useEffect(() => {
    setError(false);
    setNotes(null);

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
      <div class={style.tableOfContents}>
        <div class={style.courseHeader}>
          <h1>{courseId.toUpperCase()}</h1>
          <h1>{title}</h1>
        </div>

        <TOCParser markdown={allMarkdown} />

        <footer class={style.footer}>
          <Link href="/teaching">← Back to all courses</Link>
        </footer>
      </div>

      <div class={style.content}>
        <div class={style.contentInner}>
          {notes.map((md, idx) => (
            <Note key={idx} markdown={md} />
          ))}
        </div>
      </div>
    </div>
  );
}
