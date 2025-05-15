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
  // {
  //   id: "cs246e",
  //   title: "(Enriched) Object-Oriented Programming",
  //   term: "Fall 2022",
  // },
];

const cardVariants = {
  hover: {
    scale: 1.05,
    transition: {
      ease: "easeInOut",
    },
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
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
              layoutId={`course-${c.id}`}
              class={`${style.card} ${style[c.id]}`}
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
