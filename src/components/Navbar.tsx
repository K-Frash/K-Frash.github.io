import style from "../styles/Navbar.module.css";
import { useState, useEffect } from "preact/hooks";
import logoLight from "../assets/Logo_Rd_Light.png";
import logoDark from "../assets/Logo_Rd_Dark.png";
import darkIcon from "../assets/sun.svg";
import lightIcon from "../assets/moon.svg";
import { activeTab } from "../state";

type Tab = {
  name: string;
  component: any;
};

type NavbarProps = {
  tabs: Tab[];
};

export default function Navbar({ tabs }: NavbarProps) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode(): void {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);
  return (
    <nav class={style.nav}>
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
            class={`${style.logo} ${
              darkMode ? style.visible : style.hidden
            }`}
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
              <span
                key={tab.name}
                class={`${style.link} ${
                  activeTab.value === tab.name ? style.active : ""
                }`}
                onClick={() => (activeTab.value = tab.name)}
              >
                {tab.component.displayName}
              </span>
              {index < tabs.length - 1 && <span class={style.dot}>•</span>}
            </>
          ))}
        </div>

        <img
          src={darkMode ? darkIcon : lightIcon}
          class={style.toggle}
          onClick={toggleDarkMode}
          alt="Toggle theme"
        />
      </div>
    </nav>
  );
}
