import style from "../styles/About.module.css";
import { useEffect, useRef } from "preact/hooks";

import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";
import profileImg from "../assets/about/profile.jpg";

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
      container.style.setProperty("--angle", `${angleDeg + 90}deg`);
    }

    function reset() {
      container.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
      container.style.setProperty("--angle", "135deg");
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
      <div class={style.profileSummary}>
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
              <GitHubIcon class={style.icon} />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/krisfrasheri/"
              target="_blank"
              rel="noopener noreferrer"
              class={style.linkItem}
            >
              <LinkedInIcon class={style.icon} />

              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:krisfrasheri@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              class={style.linkItem}
            >
              <EmailIcon class={style.icon} />

              <span>krisfrasheri@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div class={style.introBody}>
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
    </div>
  );
}
