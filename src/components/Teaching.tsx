import style from "../styles/Teaching.module.css";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CourseLinkMeta } from "../data/courses";

const cardVariants = {
  hidden: { opacity: 0, y: "10vh" },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    border: "solid 10px var(--course-color1)",
    transition: { duration: 1 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
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

      <motion.div
        class={style.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {courses.map((c) => (
          <Link
            href={`/teaching/${c.courseId}`}
            class={style.link}
            key={c.courseId}
          >
            <motion.div
              // layoutId={`course-${c.courseId}`}
              class={`${style.card} ${c.courseId}`}
              variants={cardVariants}
              // whileHover="hover"
            >
              <div class={style.badge}>{c.term}</div>
              <div class={style.title}>{c.title}</div>
              <div class={style.term}>{c.courseId}</div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
