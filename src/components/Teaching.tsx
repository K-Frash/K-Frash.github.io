import style from "../styles/Teaching.module.css";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { CourseLinkMeta } from "../data/courses";
import Helmet from "preact-helmet";

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
    <>
      <Helmet
      htmlAttributes={{ lang: "en" }}
      title="Teaching | Kris Frasheri"
      titleTemplate="%s"
      meta={[
        {name: "description", content: "Explore all courses taught by Kris Frasheri at the University of Waterloo. Access course materials, syllabi, and more."},
        {name: "keywords", content: "Kris Frasheri, teaching, courses, University of Waterloo, computer science, AI, HCI, education, instructor, course materials"},
        { name: "author", content: "Kris Frasheri" },
        { property: "og:title", content: "Teaching | Kris Frasheri" },
        { property: "og:description", content: "Browse all courses taught by Kris Frasheri at the University of Waterloo. Explore course materials, syllabi, and resources created for students by Kris."},
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://krisfrasheri.com/teaching/" },
        {property: "og:image", content: "https://krisfrasheri.com/assets/about/profile.jpg"},
        { property: "og:locale", content: "en_US" },
        { property: "og:locale:alternate", content: "en_CA" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Teaching | Kris Frasheri" },
        {name: "twitter:description", content: "Explore all courses taught by Kris Frasheri - AI & HCI researcher at the University of Waterloo."},
        {name: "twitter:image", content: "https://krisfrasheri.com/assets/about/profile.jpg"},
      ]}
      link={[
        { rel: "canonical", href: "https://krisfrasheri.com/teaching/" },
      ]}
      />

      <div class={style.body}>
      <div class={style.quote}>
        <p>
        “It is the supreme art of the teacher to awaken joy in creative
        expression and knowledge.”
        </p>
        <p>— Albert Einstein</p>
      </div>

      <p class={style.titleText}>
        Welcome! Here you can explore all the courses I've taught at the University of Waterloo. Click any course tile to view details, materials, and resources for that semester. (Some content is still being added—check back soon!)
      </p>

      <motion.div
        class={style.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {courses.map((c) => (
        <Link
          href={`/teaching/${c.courseId}/`}
          class={style.link}
          key={c.courseId}
        >
          <motion.div
          class={`${style.card} ${c.courseId}`}
          variants={cardVariants}
          >
          <div class={style.badge}>{c.term}</div>
          <div class={style.title}>{c.title}</div>
          <div class={style.term}>{c.courseId}</div>
          </motion.div>
        </Link>
        ))}
      </motion.div>
      </div>
    </>
  );
}
