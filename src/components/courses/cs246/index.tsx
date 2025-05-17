import { Link } from "wouter";
import style from "../Courses.module.css";
import Note, { NotesProps, TOCParser } from "../NotesPage";

import note1 from "./notes/example.md?raw";

const renderNotes: NotesProps[] = [{ note: note1 }];

export default function CS246() {
  return (
    <div class={`${style.page} cs246`}>
      <div class={style.tableOfContents}>
        <div class={style.courseHeader}>
          <h1>CS246</h1>
          <h1>Object-Oriented Programming</h1>
        </div>

        <TOCParser markdown={note1} />
        <footer class={style.footer}>
          <Link href="/teaching">← Back to all courses</Link>
        </footer>
      </div>
      <div class={style.content}>
        <div class={style.contentInner}>
          {renderNotes.map((note) => (
            <Note {...note} />
          ))}
        </div>
      </div>
    </div>
  );
}
