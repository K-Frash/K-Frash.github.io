import { Link } from "wouter";
import style from "../Courses.module.css";
import Note, { NotesProps } from "../NotesPage";

import note1 from "./notes/lesson1.md?raw";

const renderNotes: NotesProps[] = [{ note: note1 }];

export default function CS241() {
  return (
    <div class={`${style.page} cs241`}>
      <div class={style.tableOfContents}>
        <h1>CS241</h1>
        <h1>Foundations of Sequential Programs</h1>
        <footer class={style.footer}>
          <Link href="/teaching">← Back to all courses</Link>
        </footer>
      </div>
      <div class={style.content}>
        {renderNotes.map((note) => (
          <Note {...note} />
        ))}
      </div>
    </div>
  );
}
