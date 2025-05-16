import { useState, useEffect } from "preact/hooks";
import style from "../styles/ThemeToggle.module.css";
import { DarkIcon, LightIcon } from "./icons";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // On mount: restore theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const themePref = window.matchMedia("(prefers-color-scheme: dark)");
    const loadMode = savedTheme ?? (themePref ? "dark" : "light");
    applyTheme(loadMode === "dark");
  }, []);

  function applyTheme(isDark: boolean) {
    setDarkMode(isDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");

    document.dispatchEvent(new CustomEvent("theme-change", { detail: isDark }));
  }

  function handleClick(e: MouseEvent) {
    const x = e.clientX,
      y = e.clientY;

    if ((document as any).startViewTransition) {
      document.documentElement.style.setProperty("--cx", `${x}px`);
      document.documentElement.style.setProperty("--cy", `${y}px`);
      (document as any).startViewTransition(() => {
        applyTheme(!darkMode);
      });
      return;
    }

    applyTheme(!darkMode);
  }

  return (
    <button
      class={style.toggle}
      onClick={(e) => handleClick(e as any)}
      aria-label="dark-mode toggle"
    >
      {darkMode ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}
