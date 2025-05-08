import { render } from "preact";
import { useMemo } from "preact/hooks";
import { activeTab } from "./state";
import "./styles/theme.css";
import style from "./styles/App.module.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./components/About";
import Contact from "./components/Contact";
import Teaching from "./components/Teaching";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

export default function App() {
  const tabs = useMemo(() => [
      { name: "About", component: About },
      { name: "Resume", component: Resume },
      { name: "Teaching", component: Teaching },
      { name: "Projects", component: Projects },
      { name: "Contact", component: Contact },
    ],[]
  );

  const CurrentPage =
    tabs.find((tab) => tab.name === activeTab.value)?.component || About;

  return (
    <>
      <div id="root" class={style.root}>
        <Navbar tabs={tabs} />
        <div id="body" class={style.body}>
          <CurrentPage />
        </div>
        <Footer />
      </div>
    </>
  );
}

render(<App />, document.querySelector("div#app") as HTMLElement);
