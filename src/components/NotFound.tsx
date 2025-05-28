import style from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div class={style.body}>
      <h1 class={style.errMsg}>404: Page Not Found</h1>
      <p class={style.msg}>The page you were looking for does not exist.</p>
      <a class={style.returnHome} href="/">← Go back home</a>
    </div>
  );
}