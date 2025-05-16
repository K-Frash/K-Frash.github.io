import style from "../styles/Teaching.module.css";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface CourseMeta {
  id: string;
  title: string;
  term: string;
}

const courses: CourseMeta[] = [
  {
    id: "cs116",
    title: "Introduction to Computer Science 2 (Python)",
    term: "Winter 2025",
  },
  {
    id: "cs241",
    title: "Foundations of Sequential Programs",
    term: "Winter 2024",
  },
  {
    id: "cs115",
    title: "Introduction to Computer Science 1 (Scheme)",
    term: "Winter 2024",
  },
  {
    id: "cs349",
    title: "User Interfaces",
    term: "Spring 2024",
  },
  {
    id: "cs245",
    title: "Logic and Computation",
    term: "Spring 2023",
  },
  {
    id: "cs246",
    title: "Object-Oriented Programming",
    term: "Winter 2023",
  },
];

const cardVariants = {
  initial: {
    scale: 1,
    boxShadow: "0 0px 0px rgba(0,0,0,0.15)",
    border: "solid 0px var(--course-color1)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    border: "solid 10px var(--course-color1)",
    transition: {
      scale: { ease: "easeInOut", duration: 0.2 },
      boxShadow: { ease: "easeInOut", duration: 0.2 },
      border: { ease: "easeInOut", duration: 0.2 },
    },
  },
};

export default function Teaching() {
  return (
    <div class={style.body}>
      <div class={style.quote}>
        <p>
          “It is the supreme art of the teacher to awaken joy in creative
          expression and knowledge.”
        </p>
        <p>— Albert Einstein</p>
      </div>

      <p class={style.titleText}>
        Teaching is one of my deepest passions, below are the courses I've
        taught at the University of Waterloo. Click any tile to dive into that
        semester's content. (Content under construction, but stay tuned!)
      </p>

      <div class={style.container}>
        {courses.map((c) => (
          <Link href={`/teaching/${c.id}`} class={style.link} key={c.id}>
            <motion.div
              initial="initial"
              layoutId={`course-${c.id}`}
              class={`${style.card} ${c.id}`}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* <div class={style[c.id]}> */}
              <div class={style.title}>{c.title}</div>
              <div class={style.term}>{c.term}</div>
              {/* </div> */}
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
