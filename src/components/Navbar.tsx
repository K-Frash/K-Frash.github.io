import style from "../styles/Navbar.module.css";
import { useState, useEffect } from "preact/hooks";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

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
  const [menuOpen, setMenuOpen] = useState(false);
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
      <Link href="/">
        <div class={style.left}>
          <div class={style.logoContainer}>
            <img
              src={logoLight}
              class={`${style.logo} ${
                !darkMode ? style.visible : style.hidden
              }`}
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
      </Link>

      <div class={style.right}>
        <div class={style.links}>
          {tabs.map((tab, index) => (
            <>
              <Link href={tab.path} onClick={() => setMenuOpen(false)}>
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
        <button
          class={style.hamburger}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <motion.div
            class={style.bar}
            animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
          />
          <motion.div
            class={style.bar}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            class={style.bar}
            animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            class={style.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "fit-content", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div class={style.mobileLinks}>
              {tabs.map((tab) => (
                <Link href={tab.path} onClick={() => setMenuOpen(false)}>
                  <span
                    key={tab.label}
                    class={`${style.link} ${
                      location === tab.path ? style.active : ""
                    }`}
                  >
                    {tab.label}
                  </span>
                </Link>
              ))}
              <div class={style.mobileToggle} onClick={toggleDarkMode}>
                {!darkMode ? <DarkIcon /> : <LightIcon />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
