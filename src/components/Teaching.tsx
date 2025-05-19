import style from "../styles/Teaching.module.css";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CourseLinkMeta } from "../data/courses";

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

export default function Teaching({ courses }: { courses: CourseLinkMeta[] }) {
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
          <Link href={`/teaching/${c.courseId}`} class={style.link} key={c.courseId}>
            <motion.div
              initial="initial"
              layoutId={`course-${c.courseId}`}
              class={`${style.card} ${c.courseId}`}
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
