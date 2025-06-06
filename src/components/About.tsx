import style from "../styles/About.module.css";
import { useState, useEffect, useRef } from "preact/hooks";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";
import Helmet from "preact-helmet";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";
import profileImg from "../assets/about/profile.jpg";

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const rotationIntensity = 8;

  // Quick way to set up style transformation on mouse events
  const flipOffset = useRef(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const z = useMotionValue(0);
  const angleNum = useMotionValue(135);
  const imgScale = useMotionValue(1);

  const springConfig = { stiffness: 200, damping: 25 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);
  // const smoothAngle = useSpring(angleNum, springConfig); // unused for now, need to fix snapping gradient issue
  const smoothScale = useSpring(imgScale, springConfig);

  const rotateX = useTransform(smoothY, (py) => -py / rotationIntensity);
  const rotateY = useTransform(smoothX, (px) => px / rotationIntensity);
  const rotateZ = useTransform(z, (z) => z);
  const updateScale = useTransform(smoothScale, (sval) => sval);
  const gradient = useTransform(
    angleNum,
    (deg) => `linear-gradient(${deg}deg, var(--pop2-color), var(--pop1-color))`
  );

  useEffect(() => {
    const query = window.matchMedia("(max-width: 600px)");
    const update = () => setIsMobile(query.matches);
    query.addEventListener("change", update);
    update();
    return () => query.removeEventListener("change", update);
  }, []);

  function handleMouseEnter(e: PointerEvent) {
    if (isMobile || !imageRef.current || isFlipping) return;
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const px = e.clientX - left - width / 2;
    const py = e.clientY - top - height / 2;
    x.set(px + flipOffset.current);
    y.set(py);
    imgScale.set(1.1);
    angleNum.set(Math.atan2(py, px) * (180 / Math.PI) + 90);
  }

  function handleMouseExit() {
    if (isFlipping) return;
    x.set(flipOffset.current);
    y.set(0);
    angleNum.set(135);
    imgScale.set(1);
  }

  function flipCard() {
    if (isFlipping) return;
    setIsFlipping(true);
    const x_temp = x.get();
    const delta =
      Math.random() > 0.5 ? 360 * rotationIntensity : 180 * rotationIntensity;
    const flipDuration = 0.5;
    animate(z, [0, 360], {
      duration: flipDuration,
      ease: "easeInOut",
    });
    animate(x, [x_temp, x_temp + delta], {
      duration: flipDuration,
      ease: "easeInOut",
      onComplete: () => {
        flipOffset.current += delta;
        setIsFlipping(false);
      },
    });
    animate(imgScale, [1, 1.55], {
      duration: flipDuration / 2,
      ease: "easeInOut",
      onComplete: () => imgScale.set(1),
    });
  }

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="About | Kris Frasheri"
        titleTemplate="%s"
        meta={[
          { name: 'title', content: 'About | Kris Frasheri' },
          { name: 'description', content: 'Nice to meet you 👋! My name is Kris Frasheri and I am an AI & HCI researcher and educator at the University of Waterloo, specializing in human-AI collaboration, value-sensitive design, and LLM-driven reflection tools.' },
          { name: 'keywords', content: 'Kris Frasheri, kfrasher, AI researcher, HCI, University of Waterloo, UW, UW CS, human-computer interaction, value-sensitive design, LLM, educator, computer science, collaborative AI' },
          { name: 'author', content: 'Kris Frasheri' },
          { property: 'og:title', content: 'About | Kris Frasheri' },
          { property: 'og:description', content: 'Nice to meet you 👋! My name is Kris Frasheri and I am an AI & HCI researcher and educator at the University of Waterloo, specializing in human-AI collaboration, value-sensitive design, and LLM-driven reflection tools.' },
          { property: 'og:type', content: 'profile' },
          { property: 'og:type:first_name', content: 'Kris' },
          { property: 'og:type:last_name ', content: 'Frasheri' },
          { property: 'og:url', content: 'https://krisfrasheri.com/' },
          { property: 'og:image', content: 'https://krisfrasheri.com/assets/about/profile.jpg' },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:locale:alternate', content: 'en_CA' },
          { name: 'twitter:card', content: 'summary_large_image' }, // TODO: This needs more testing, odd formating issues on X
          { name: 'twitter:title', content: 'About | Kris Frasheri' },
          { name: 'twitter:description', content: 'Kris Frasheri - AI & HCI researcher at the University of Waterloo.' },
          { name: 'twitter:image', content: 'https://krisfrasheri.com/assets/about/profile.jpg' },
        ]}
        link={[
          { rel: 'canonical', href: 'https://krisfrasheri.com/' },
        ]}
      />
      <div class={style.body}>
        <div class={style.profileSummary}>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <motion.div
              ref={imageRef}
              class={style.imageContainer}
              onClick={() => {
                if (!isFlipping) flipCard();
              }}
              onPointerMove={
                isMobile || isFlipping ? () => {} : handleMouseEnter
              }
              onPointerLeave={
                isMobile || isFlipping ? () => {} : handleMouseExit
              }
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                rotateZ: rotateZ,
                scale: updateScale,
                background: gradient,
                pointerEvents: isFlipping ? "none" : "auto",
              }}
            >
              <motion.img
                src={profileImg}
                alt="Kris Frasheri"
                class={style.profileImage}
                initial={{ scale: 0.75 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          <div class={style.infoBox}>
            <div class={style.degrees}>
              <p>Computer Science, M.Math.</p>
              <p>Computer Science, B.CS.</p>
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
            <h1>
              Hello there!
              <motion.span
                class={style.wave}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.2,
                  scale: {
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.75,
                    delay: 1,
                  },
                }}
              >
                👋
              </motion.span>
            </h1>
            <p>
              I'm Kris Frasheri, an Artificial Intelligence (AI) &
              Human-Computer Interaction (HCI) researcher with a Master of
              Mathematics in Computer Science at the University of Waterloo.
              Under the supervision of Dr. Edith Law, my research lies in the
              intersection of AI, HCI, and education, with a focus on exploring
              how LLMs can support collaborative reflection and shape value
              alignment throughout subjective decision-making tasks.
            </p>
            <p>
              Outside of research, I have taught a wide range of undergraduate
              computer science courses at the University of Waterloo as a
              lecturer. These courses include introductory Python programming,
              discrete math, logic & computation, object-oriented design, and
              user interface design. I have also worked professionally as an AI
              engineer, graphics developer, and software engineer, gaining
              experience across both startups and large-scale tech environments.
            </p>
            <p>
              If you're interested in my research, teaching, or want to chat
              about intelligent systems, feel free to reach out. I'm always
              happy to connect!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
