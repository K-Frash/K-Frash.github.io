import style from "../styles/CourseLoader.module.css";
import { useEffect, useState } from "preact/hooks";
import { Link } from "wouter";

export interface CourseLoaderProps {
  courseId: string;
}

export default function CourseLoader({ courseId }: CourseLoaderProps) {
  const [CourseComp, setCourseComp] = useState<null | any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setCourseComp(null);
    setError(false);

    import(`./courses/${courseId}/index.tsx`)
      .then((mod) => setCourseComp(() => mod.default))
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [courseId]);

  if (error) {
    return (
      <div class={style.errorPage}>
        <h2>Sorry, no course found at “{courseId}”</h2>
        <Link href="/teaching">← Back to all courses</Link>
      </div>
    );
  }

  if (!CourseComp) {
    return <div>Loading course . . .</div>;
  }

  return <CourseComp />;
}