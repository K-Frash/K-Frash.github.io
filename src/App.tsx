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
import CourseLoader from "./components/courses/CourseLoader";
import Resume from "./components/Resume";
import Projects from "./components/Projects";

import { courses } from "./data/courses";

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
            <Route path="/teaching">
              {() => <Teaching courses={courses} />}
            </Route>
            <Route path="/teaching/:courseId">
              {({ courseId }) =>
                courseId ? (
                  <CourseLoader
                    courseId={courseId}
                    title={courses.find((c) => c.courseId === courseId)?.title || ""}
                    term={courses.find((c) => c.courseId === courseId)?.term || ""}
                  />
                ) : null
              }
            </Route>
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
