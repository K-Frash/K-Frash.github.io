import { useEffect, useState } from "preact/hooks";
import { Marked } from "@ts-stack/markdown";
import 'highlight.js/styles/github.css';
import hljs from "highlight.js";
Marked.setOptions({
  highlight: (code, lang) =>
    hljs.highlight(code, { language: lang || "plaintext" }).value,
});

import md from "./notes/lesson1.md?raw";
import style from "./Notes.module.css";

export default function Note() {
  const [html, setHtml] = useState<string>('');

  useEffect(() => {
    setHtml(Marked.parse(md));
  }, []);

  return (
    <div class={style.content} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
