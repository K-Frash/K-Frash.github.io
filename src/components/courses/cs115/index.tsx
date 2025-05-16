import { Link } from "wouter";
import style from "../Courses.module.css";
import Note, { NotesProps } from "../NotesPage";

import note1 from "./notes/lesson1.md?raw";

const renderNotes: NotesProps[] = [{ note: note1 }];

export default function CS115() {
  return (
    <div class={`${style.page} cs115`}>
      <div class={style.tableOfContents}>
        <h1>CS115</h1>
        <h1>Introduction to Computer Science 1</h1>
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
