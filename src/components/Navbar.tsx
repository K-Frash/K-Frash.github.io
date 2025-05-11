import style from "../styles/Navbar.module.css";
import { useState, useEffect } from "preact/hooks";
import { Link, useLocation } from "wouter";

import logoLight from "../assets/navbar/Logo_Rd_Light.png";
import logoDark from "../assets/navbar/Logo_Rd_Dark.png";

import { DarkIcon, LightIcon } from "./icons";

const tabs = [
  { label: "ABOUT", path: "/" },
  { label: "RÉSUMÉ", path: "/resume" },
  { label: "TEACHING", path: "/teaching" },
  { label: "PROJECTS", path: "/projects" },
  { label: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [location] = useLocation();

  function toggleDarkMode(): void {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
    localStorage.setItem("theme", newMode ? "dark" : "light");
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const themePref = window.matchMedia("(prefers-color-scheme: dark)");
    const loadMode = savedTheme ?? (themePref ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", loadMode);
    setDarkMode(loadMode === "dark");
    document.documentElement.classList.remove("disable-transitions");
  }, []);
  return (
    <nav class={style.nav}>
      <div class={style.left}>
        <div class={style.logoContainer}>
          <img
            src={logoLight}
            class={`${style.logo} ${!darkMode ? style.visible : style.hidden}`}
            alt="Light Logo"
          />
          <img
            src={logoDark}
            class={`${style.logo} ${darkMode ? style.visible : style.hidden}`}
            alt="Dark Logo"
          />
        </div>

        <div class={style.name}>
          <span>Kris</span>
          <span>Frasheri</span>
        </div>
      </div>

      <div class={style.right}>
        <div class={style.links}>
          {tabs.map((tab, index) => (
            <>
              <Link href={tab.path}>
                <span
                  key={tab.label}
                  class={`${style.link} ${
                    location === tab.path ? style.active : ""
                  }`}
                >
                  {tab.label}
                </span>
              </Link>
              {index < tabs.length - 1 && <span class={style.dot}>•</span>}
            </>
          ))}
        </div>

        {!darkMode ? (
          <DarkIcon class={style.toggle} onClick={toggleDarkMode} />
        ) : (
          <LightIcon class={style.toggle} onClick={toggleDarkMode} />
        )}
      </div>
    </nav>
  );
}
