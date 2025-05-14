import { Link } from "wouter";
import style from "./cs246.module.css";
import Note from "./NotesPage";

export default function CS246() {
  return (
    <div class={style.page}>
      <div class={style.tableOfContents}>
        <h1>CS246</h1>
        <h1>Object-Oriented Programming</h1>
        <footer class={style.footer}>
          <Link href="/teaching">← Back to all courses</Link>
        </footer>
      </div>
      <div class={style.content}>
        <Note />
      </div>
    </div>
  );
}
