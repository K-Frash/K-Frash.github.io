import { Link } from "wouter";
import style from "./cs246.module.css";

export default function CS246() {
  return (
    <div class={style.page}>
      <div class={style.contentTable}>
        <h1>CS246: Object-Oriented Programming</h1>
        <p>Winter 2023</p>
      </div>
      <div class={style.content}>
        <h1> Currently Under Construction! </h1>
        <footer class={style.footer}>
          <Link href="/teaching">← Back to all courses</Link>
        </footer>
      </div>
    </div>
  );
}
