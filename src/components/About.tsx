import style from "../styles/About.module.css";
import { useEffect, useRef } from "preact/hooks";

import profileImg from "../assets/profile.jpg";

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = imageRef.current!;
    const rotationStr = 10;
    // if (!container) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = (-y / rotationStr).toFixed(2);
      const rotateY = (x / rotationStr).toFixed(2);
      const tilt = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      container.style.transform = tilt;

      const angleRad = Math.atan2(y, x); 
      const angleDeg = (angleRad * 180) / Math.PI;
      container.style.setProperty('--angle', `${angleDeg + 90}deg`);
    }

    function reset() {
      container.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
      container.style.setProperty('--angle', '135deg');
    }

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", reset);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div class={style.body}>
      <div class={style.left}>
        <div class={style.name}>Kris Frasheri</div>
        <div class={style.titles}>
          HCI Researcher | AI Engineer | Graphics Engineer | Educator
        </div>
        <div class={style.description}>
          <h1>Hello there! 👋</h1>
          <p>
            I'm Kris Frasheri, an AI and HCI researcher who recently completed
            my Master of Mathematics in Computer Science at the University of
            Waterloo under the supervision of Dr. Edith Law. My research sits at
            the intersection of artificial intelligence, human-computer
            interaction, and education, with a particular focus on how LLMs can
            support collaborative reflection and value alignment in subjective
            tasks.
          </p>
          <p>
            Outside of research, I have taught a wide range of undergraduate
            computer science courses at the University of Waterloo as a
            lecturer—including introductory Python programming, discrete math,
            logic & computation, object-oriented design, and user interface
            design. I have also worked professionally as an AI engineer,
            graphics developer, and software engineer, gaining experience across
            both startups and large-scale tech environments.
          </p>
          <p>
            If you're interested in my research, teaching, or just want to chat
            about intelligent systems feel free to reach out. I'm always happy
            to connect!
          </p>
        </div>
      </div>

      <div class={style.right}>
        <div class={style.imageContainer} ref={imageRef}>
          <img
            src={profileImg}
            alt="Kris Frasheri"
            class={style.profileImage}
          />
        </div>

        <div class={style.infoBox}>
          <div class={style.degrees}>
            <p>Computer Science, M.Math.</p>
            <p>Computer Science, B.Cs.</p>
          </div>
          <div class={style.jobTitle}>
            <p>Computer Science Lecturer @</p>
            <p>The University of Waterloo</p>
          </div>
          <div class={style.links}>
            <a
              href="https://github.com/K-Frash"
              target="_blank"
              rel="noopener noreferrer"
              class={style.linkItem}
            >
              <svg
                class={style.icon}
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>

              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/krisfrasheri/"
              target="_blank"
              rel="noopener noreferrer"
              class={style.linkItem}
            >
              <svg
                class={style.icon}
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>

              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:krisfrasheri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class={style.linkItem}
            >
              <svg
                class={style.icon}
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>

              <span>krisfrasheri@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
