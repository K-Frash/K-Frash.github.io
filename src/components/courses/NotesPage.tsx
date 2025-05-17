import { useEffect, useState } from "preact/hooks";
import { Marked, Renderer } from "@ts-stack/markdown";
import { useMemo } from "preact/hooks";
import slugify from "slugify";
import style from "./Courses.module.css";
import 'highlight.js/styles/github-dark.css';
import hljs from "highlight.js";

class HeaderRenderer extends Renderer {
  override heading(text: string, level: number, raw: string) {
    const id = slugify(text, { lower: true, strict: true });
    return `<h${level} id="${id}">${text}</h${level}>`; // TODO: track stable IDs for ToC
  }
}

Marked.setOptions({
  langPrefix: 'hljs language-',
  highlight: (code, lang) =>
    hljs.highlight(code, { language: lang || "plaintext" }).value,
  renderer: new HeaderRenderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

export type NotesProps = {
  note: string;
};

export default function Note({ note }: NotesProps) {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    setHtml(Marked.parse(note));
  }, [note]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

interface TOCEntry {
  text: string;
  id: string;
  level: number;
}

export function TOCParser({ markdown }: { markdown: string }) {
  const entries = useMemo<TOCEntry[]>(() => {
    const regex = /^(#{1,6})\s+(.+)$/gm;
    const result: TOCEntry[] = [];
    let match: RegExpExecArray | null;
    while ((match = regex.exec(markdown))) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = slugify(text, { lower: true, strict: true });
      result.push({ text, id, level });
    }
    return result;
  }, [markdown]);

  return (
    <nav>
      <ul class={style.tocList}>
        {entries.map(({ text, id, level }) => (
          <li class={style[`level${level}`]} key={id}>
            <a href={`#${id}`}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}