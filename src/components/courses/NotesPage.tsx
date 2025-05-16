import { useEffect, useState } from "preact/hooks";
import { Marked } from "@ts-stack/markdown";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";
Marked.setOptions({
  highlight: (code, lang) =>
    hljs.highlight(code, { language: lang || "plaintext" }).value,
});

export type NotesProps = {
  note: string;
};

export default function Note({ note }: NotesProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    setHtml(Marked.parse(note));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
