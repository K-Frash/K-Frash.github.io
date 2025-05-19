export interface CourseLinkMeta {
  courseId: string;
  title: string;
  term: string;
}

export const courses: CourseLinkMeta[] = [
  {
    courseId: "cs116",
    title: "Introduction to Computer Science 2 (Python)",
    term: "Winter 2025",
  },
  {
    courseId: "cs241",
    title: "Foundations of Sequential Programs",
    term: "Winter 2024",
  },
  {
    courseId: "cs115",
    title: "Introduction to Computer Science 1 (Scheme)",
    term: "Winter 2024",
  },
  {
    courseId: "cs349",
    title: "User Interfaces",
    term: "Spring 2024",
  },
  {
    courseId: "cs245",
    title: "Logic and Computation",
    term: "Spring 2023",
  },
  {
    courseId: "cs246",
    title: "Object-Oriented Programming",
    term: "Winter 2023",
  },
];
