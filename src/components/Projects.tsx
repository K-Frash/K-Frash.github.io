import style from "../styles/Projects.module.css";
import { useState } from "preact/hooks";
import { JSX } from "preact";

import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

import {
  GitHubIcon,
  PDFIcon,
  WorldIcon,
  DevpostIcon,
} from "../components/icons";

import persona from "../assets/projects/persona_teaser.png";
import mnist from "../assets/projects/mnist-math.png";
import quickCode from "../assets/projects/quick-code.png";
import arcade from "../assets/projects/arcade-cabinet.png";
import spAtt from "../assets/projects/data_poison.jpg";
import spAttPaper from "../assets/projects/Subpopulation_Attacks_in_NLP.pdf";
import cdRL from "../assets/projects/cdl.jpeg";
import cdRLPaper from "../assets/projects/SurveyOnCuriosityDrivenRL.pdf";
import curiousTanks from "../assets/projects/cdl-tanks.png";
import mab from "../assets/projects/MAB_interface.png";
import mabPaper from "../assets/projects/mAtrIx_MABs.pdf";
import mdpGame from "../assets/projects/mdp-robot.png";

const breakpointColumnsObj = {
  default: 3,
  1000: 2,
  600: 1,
};

const allProjects: ProjectCardProps[] = [
  {
    title:
      "PERSONA: A Tool for Generating Algorithmic Personas for Reflective Annotations",
    blurb:
      "Designed to address human-annotator bias in machine learning data pipelines, PERSONA is a novel dataset annotation tool that uses large language models (LLMs) to generate diverse, value-driven 'personas'—simulated annotator profiles—to guide users through subjective labelling tasks. Through a two-part user study, PERSONA was shown to increase annotator self-awareness, promote cognitive diversity, and improve dataset inclusivity.",
    image: persona,
    url: "https://dspacemainprd01.lib.uwaterloo.ca/server/api/core/bitstreams/774fc17e-babd-4785-a5d9-0ef66b3f2844/content",
    tags: [
      "Python",
      "Flask",
      "LangChain",
      "Web Development",
      "AI/ML",
      "Large Language Models",
      "Human-Computer Interaction",
      "Research Publication",
    ],
    links: [
      {
        icon: <GitHubIcon class={style.icon} />,
        url: "https://github.com/K-Frash/",
      },
      {
        icon: <PDFIcon class={style.icon} />,
        url: "https://dspacemainprd01.lib.uwaterloo.ca/server/api/core/bitstreams/774fc17e-babd-4785-a5d9-0ef66b3f2844/content",
      },
    ],
  },
  {
    title: "mAtrIx: A Social Media Bandit Simulation",
    blurb:
      "mAtrIx is an interactive web application designed to simulate and visualize multi-armed bandit algorithms (MABs) within the context of personalized social media recommendations. The application provides real-time visualizations using D3.js to demonstrate how different bandit strategies adapt to user interactions. mAtrIx serves as an educational tool that demonstrates how adaptive recommendation systems work.",
    image: mab,
    url: "https://github.com/ryanyen2/mAtrIx",
    tags: [
      "React.js",
      "Flask",
      "Python",
      "NumPy",
      "Pandas",
      "Docker",
      "D3.js",
      "Web Development",
      "Human-Computer Interaction",
      "AI/ML",
      "Reinforcement Learning",
      "Research Publication",
    ],
    links: [
      {
        icon: <GitHubIcon class={style.icon} />,
        url: "https://github.com/ryanyen2/mAtrIx",
      },
      { icon: <PDFIcon class={style.icon} />, url: mabPaper },
    ],
  },
  {
    title:
      "NLP Sub-Domain Data Poisoning: Evaluating Model Robustness Across Subpopulations",
    blurb:
      "This project investigates the susceptibility of NLP models to data poisoning attacks targeting specific subpopulations within datasets. By injecting malicious samples into targetted data subsets, the study evaluates how models like BERT, XLNet, and ELECTRA respond to such targeted attacks. Utilizing the IMDB dataset, the experiments demonstrate that even minimal poisoning can significantly degrade model performance on affected subpopulations while leaving overall accuracy largely unaffected.",
    image: spAtt,
    url: "https://github.com/K-Frash/NLP-Sub-Domain-Data-Poisoning",
    tags: [
      "Python",
      "Jupyter",
      "NumPy",
      "Pandas",
      "Data Poisoning",
      "AI/ML",
      "Natural Language Processing",
      "Research Publication",
    ],
    links: [
      {
        icon: <GitHubIcon class={style.icon} />,
        url: "https://github.com/K-Frash/NLP-Sub-Domain-Data-Poisoning",
      },
      { icon: <PDFIcon class={style.icon} />, url: spAttPaper },
    ],
  },
  {
    title: "MNIST Math",
    blurb:
      "An educational web application that enables users to solve arithmetic problems by drawing digits on a virtual canvas. The application utilizes a convolutional neural network (CNN) trained on the MNIST dataset via TensorFlow and Keras. Post-training, the model was converted to TensorFlow.js using the tfjs-converter, allowing for real-time, client-side digit recognition directly within the browser.",
    image: mnist,
    url: "https://github.com/K-Frash/MNIST-Math/",
    tags: [
      "Python",
      "Tensorflow",
      "Keras",
      "NumPy",
      "Pandas",
      "Web Development",
      "AI/ML",
      "Human-Computer Interaction",
      "Game",
    ],
    links: [
      {
        icon: <GitHubIcon class={style.icon} />,
        url: "https://github.com/K-Frash/MNIST-Math/?tab=readme-ov-file",
      },
      {
        icon: <WorldIcon class={style.icon} />,
        url: "https://k-frash.github.io/MNIST-Math/",
      },
    ],
  },
  {
    title: "Curiosity Driven RL Survey",
    blurb:
      "This paper provides a comprehensive survey of Curiosity-Driven Learning (CDL) in reinforcement learning, an approach where agents leverage intrinsic motivation to learn in environments lacking clear external rewards. The survey categorizes modern CDL methods into two primary frameworks: novelty-based and uncertainty-based curiosity. It explores key algorithms like Pseudo-Counts, Intrinsic Curiosity Module (ICM), and Model-Based eXploration (MAX), highlighting their performance in high-dimensional and partially observable settings.",
    image: cdRL,
    url: cdRLPaper,
    tags: ["AI/ML", "Reinforcement Learning", "Research Publication"],
    links: [{ icon: <PDFIcon class={style.icon} />, url: cdRLPaper }],
  },
  {
    title:
      "Curiosity-Driven RL Tank Game: Exploring Sparse Reward Environments",
    blurb:
      "Inspired by the Asynchronous Advantage Actor-Critic (A3C) architecture, tank agents in this environment are trained to navigate and interact in a sparse reward setting, emphasizing intrinsic motivation over extrinsic feedback. This setup allows for experimentation with intrinsic reward mechanisms, such as prediction error-based curiosity, to encourage exploration and learning in environments where external rewards are infrequent or absent.",
    image: curiousTanks,
    url: "https://github.com/K-Frash/Curiosity-Driven-RL-TankGame",
    tags: ["Python", "Keras", "AI/ML", "Reinforcement Learning", "Game"],
    links: [
      {
        icon: <GitHubIcon class={style.icon} />,
        url: "https://github.com/K-Frash/Curiosity-Driven-RL-TankGame",
      },
    ],
  },
  {
    title: "The Point Runner: Customizable Rogue-like with AI Pathfinding",
    blurb:
      "An interactive rogue-like game where users design custom dungeons by placing agents, goals, and obstacles, each with associated reward signals. An AI agent then computes the optimal policy to navigate the environment using Markov Decision Process (MDP) principles. Developed in Unity, this project serves as an educational tool to demonstrate how AI agents can learn and adapt to varying environmental conditions and reward structures.",
    image: mdpGame,
    url: "https://github.com/K-Frash/ThePointRunner-MDP",
    tags: ["C#", "Unity", "AI/ML", "Reinforcement Learning", "Game"],
    links: [
      {
        icon: <GitHubIcon class={style.icon} />,
        url: "https://github.com/K-Frash/ThePointRunner-MDP",
      },
    ],
  },
  {
    title: "Quick-Code",
    blurb:
      "Quick-Code is a web-based Integrated Development Environment (IDE) that translates and converts spoken pseudocode into executable JavaScript code. Built during the nwHacks 2019 hackathon, the application leverages Azure Cognitive Services for speech recognition and natural language processing, enabling users to code hands-free. The project was recognized with multiple awards, including Best Hack Using Voice Biometrics and Conversational Design, Best Domain Name, and the Wolfram Award.",
    image: quickCode,
    url: "https://github.com/K-Frash/Quick-Code",
    tags: [
      "Python",
      "Node.js",
      "React.js",
      "RunKit",
      "AI/ML",
      "Natural Language Processing",
    ],
    links: [
      {
        icon: <GitHubIcon class={style.icon} />,
        url: "https://github.com/K-Frash/Quick-Code",
      },
      {
        icon: <DevpostIcon class={style.icon} />,
        url: "https://devpost.com/software/quickcode",
      },
    ],
  },
  {
    title: "The Arcade Cabinet",
    blurb:
      "The Arcade Cabinet is a collection of classic and original games developed using object-oriented principles in C++ and Java. This project showcases a range of game genres, each implemented with a focus on modularity and clean code architecture.",
    image: arcade,
    url: "https://github.com/K-Frash/Arcade-Cabinet",
    tags: ["C++", "OpenGL", "Java", "Game"],
    links: [
      {
        icon: <GitHubIcon class={style.icon} />,
        url: "https://github.com/K-Frash/Arcade-Cabinet",
      },
    ],
  },
];

export type ProjectCardProps = {
  title: string;
  blurb: string;
  image: string;
  url: string;
  tags: string[];
  links: { icon: JSX.Element; url: string }[];
};

function ProjectCard({
  title,
  blurb,
  image,
  url,
  tags,
  links,
}: ProjectCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" class={style.card}>
      <img src={image} alt={title} class={style.image} />
      <div class={style.cardBody}>
        <h3 class={style.title}>{title}</h3>
        <p class={style.blurb}>{blurb}</p>
        <div class={style.tags}>
          {tags.map((tag, i) => (
            <span class={style.tag} key={i}>
              {tag}
            </span>
          ))}
        </div>
        <div class={style.links}>
          {links.map((link, idx) => (
            <a
              href={link.url}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tagMap = new Map<string, true>();
  allProjects.forEach((p) => {
    p.tags.forEach((tag) => {
      if (!tagMap.has(tag)) tagMap.set(tag, true);
    });
  });
  const allTags = Array.from(tagMap.keys()).sort();

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered =
    selectedTags.length === 0
      ? allProjects
      : allProjects.filter((p) =>
          selectedTags.every((tag) => p.tags.includes(tag))
        );

  const cardFader = {
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: (i + 1) * 0.05, // 50ms stagger
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div class={style.body}>
      <h1 class={style.sectionTitle}>PROJECTS</h1>
      <p class={style.titleText}>
        Projects are how I explore technical ideas. Below are works I've built
        around HCI, AI, and systems design.
      </p>
      <h1 class={style.filterTitle}>Filters</h1>
      <div class={style.filters}>
        {allTags.map((tag) => (
          <button
            class={`${style.chip} ${
              selectedTags.includes(tag) ? style.activeChip : ""
            }`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={style.masonryGrid}
        columnClassName={style.masonryColumn}
      >
        {filtered.map((project, index) => (
          <motion.div
            key={`${project.title}-${selectedTags.length}`}
            custom={index}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate="visible"
            variants={cardFader}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}
