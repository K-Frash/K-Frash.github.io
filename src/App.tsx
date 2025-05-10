import { render } from "preact";
import "./styles/theme.css";
import style from "./styles/App.module.css";
import { useEffect } from "preact/hooks";

import { Route, Switch } from "wouter";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Teaching from "./components/Teaching";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.remove("disable-transitions");
  }, []);  
  return (
    <>
      <div id="root" class={style.root}>
        <Navbar />
        <div id="body" class={style.body}>
          <Switch>
            <Route path="/" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/teaching" component={Teaching} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

render(<App />, document.querySelector("div#app") as HTMLElement);
