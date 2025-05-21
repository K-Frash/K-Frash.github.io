import style from "../styles/Resume.module.css";
import { motion } from "framer-motion";
import { PDFIcon, OutLinkIcon } from "../components/icons";

import uwCS from "../assets/resume/uwCS.png";
import uwLogo from "../assets/resume/uwLogo.png";
import aiLogo from "../assets/resume/aiLab.jpg";
import cra from "../assets/resume/CRA.png";
import reebee from "../assets/resume/reebeeFlippLogo.png";
import imagine from "../assets/resume/imagineLogo.jpeg";
import dematic from "../assets/resume/dematic.jpg";
import meta from "../assets/resume/metaAi.png";
import applogic from "../assets/resume/applogicnetworks_logo.jpg";
import chi from "../assets/resume/chi_logo.png";
import dis from "../assets/resume/dis_logo.png";
import uist from "../assets/resume/uist_logo.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type ResumeCardProps = {
  title: string;
  org: string;
  dates: string[];
  logo: string;
  link?: string;
  bullets: (string | string[])[];
};

function ResumeCard({
  title,
  org,
  dates,
  logo,
  link,
  bullets,
}: ResumeCardProps) {
  return (
    <motion.div class={style.card} variants={cardVariants}>
      {" "}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class={style.titleLink}
        >
          <h3 class={style.title}>
            {title} <OutLinkIcon class={style.titleLinkIcon} />
          </h3>
        </a>
      ) : (
        <h3 class={style.title}>{title}</h3>
      )}
      <div class={style.subheading}>
        <span class={style.org}>{org}</span>
        <div class={style.dates}>
          {dates.map((date, i) => (
            <div key={i}>{date}</div>
          ))}
        </div>
      </div>
      <div class={style.details}>
        {logo !== "" ? (
          <div class={style.logoContainer}>
            <img src={logo} alt={`${org} logo`} class={style.logo} />
          </div>
        ) : null}
        <ul class={style.bullets}>
          <ul class={style.bullets}>
            {bullets.map((item, index) =>
              typeof item === "string" ? (
                <li key={index}>{item}</li>
              ) : (
                item.map((sub, subIndex) => (
                  <li key={`${index}-${subIndex}`} class={style.subBullet}>
                    &nbsp;&nbsp;• {sub}
                  </li>
                ))
              )
            )}
          </ul>
        </ul>
      </div>
    </motion.div>
  );
}

export default function Resume() {
  return (
    <motion.div
      class={style.body}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div class={style.downloadContainer}>
        <div class={style.promptText}>Want a quick summary? →</div>
        <a
          href="https://drive.google.com/file/d/1DS8uzsLvtL8sBARv1bSneq6zd4eWI91O/view?usp=sharing"
          download
          target="_blank"
          class={style.downloadButton}
        >
          <PDFIcon class={style.downloadIcon} />
          Download Resume
        </a>
      </div>
      <section class={style.section}>
        <h2 class={style.sectionTitle}>EXPERIENCE</h2>
        <ResumeCard
          title="Sessional Lecturer"
          org="University of Waterloo"
          dates={["Janurary 2023 - Present"]}
          logo={uwCS}
          link="https://uwaterloo.ca/computer-science/contacts/kris-frasheri"
          bullets={[
            "Coordinated the delivery of:",
            [
              "Object-Oriented Programming (Bash, C++)",
              "User Interfaces (TypeScript | HTML | CSS | React)",
              "Logic and Computation (Coq)",
              "Introduction to Programming Fundamentals (Python)",
            ],
            "Conducted bi-weekly lectures, presenting topics to classes of up to 220 students.",
            "Developed assignments and exams to evaluate students' understanding of core course concepts.",
          ]}
        />
        <ResumeCard
          title="Augmented Intelligence Lab Researcher"
          org="University of Waterloo"
          dates={["September 2022 - January 2025"]}
          logo={aiLogo}
          link="https://edithlaw.ca/index.html"
          bullets={[
            "Engaged in interdisciplinary research related to:",
            [
              "Human-AI collaboration",
              "LLM-persona generation",
              "Subjective data crowdsourcing",
              "Content personalization algorithms",
              "Conversational agent design",
              "Value sensitive design for AI-systems",
            ],
            "Designed and implemented human-LLM collaboration frameworks to empirically assess how conversational agents shape users' value reflection processes.",
            "Conducted empirical studies on crowdsourced data annotation to uncover and characterize user labelling biases throughout subjective labelling tasks.",
            "Collaborated on LLM-persona generation initiatives, developing methodologies to drive more personalized and context-aware conversational agents.",
            "Served as a peer reviewer for various HCI and AI conferences, evaluating and providing feedback on submissions in the human-AI collaboration community.",
          ]}
        />
        <ResumeCard
          title="Graduate Mentor, UR2PhD & EREP Programs"
          org="Computing Research Association"
          dates={[
            "September 2024 - December 2024",
            "September 2023 - December 2024",
          ]}
          logo={cra}
          link="https://cra.org/ur2phd/"
          bullets={[
            "Guided multiple cohorts of 3-4 undergraduate students through research projects in HCI and AI development.",
            "Focused on designing tools to observe how LLM-personas can assist users with value-sensitive decision-making tasks, with a focus on value-sensitive design (VSD).",
            "Completed formal mentor training provided by the Computing Research Association (CRA), emphasizing culturally responsive mentorship practices.",
          ]}
        />

        <ResumeCard
          title="Instructional Apprentice"
          org="University of Waterloo"
          dates={[
            "September 2022 - December 2022",
            "September 2023 - December 2023",
            "January 2024 - April 2024",
          ]}
          logo={uwCS}
          link="https://uwaterloo.ca/computer-science-instructional-support-group/teaching-assistant-instructional-apprentice-support/teaching-assistant-and-instructional-apprentice-duty"
          bullets={[
            "Supported student success in second-year CS and SE courses through hands-on instruction, technical guidance, and real-time help during office hours.",
            "Delivered tutorials and exam review sessions that reinforced lecture content and emphasized practical understanding of course material.",
            "Collaborated with instructors to design and develop assignments, midterms, and final exams aligned with course objectives.",
          ]}
        />
        <ResumeCard
          title="AI Engineer"
          org="Flipp (formerly ReeBee)"
          dates={["September 2021 - January 2023"]}
          logo={reebee}
          link="https://flipp.com/"
          bullets={[
            "Utilized Thompson Sampling with contextual bandits to personalize flyer recommendations to millions of users, increasing click-through rate by 8.8% yielding over $176,000 in annual revenue.",
            "Constructed ML pipelines by containerizing our models with Docker, state tracking with DVC + Hydra and model deployment with AWS Lambda.",
            "Leveraged Snowflake and Sisense for live model performance monitoring and visualizations.",
            "Coordinated big data analysis and feature engineering with respect to our stakeholders and clients' expectations.",
          ]}
        />
        <ResumeCard
          title="Graphics Engineer"
          org="Imagine Communications"
          dates={["Janurary 2022 - January 2023"]}
          logo={imagine}
          link="https://imaginecommunications.com/"
          bullets={[
            "Constructed upon a complex real-time graphics environment in OpenGL and C++.",
            "Implemented frame-accurate, data-source-agnostic synchronization in the in-house graphics emulator, enabling dynamic rendering from live content feeds across both local and remote media.",
            "Engaged in the development and transfer of existing graphics systems to support various Linux environments.",
            "Leveraged TypeScript and React in designing UI elements on the client side application.",
          ]}
        />
        <ResumeCard
          title="Software Engineer - Facilities Emulation (Co-Op)"
          org="Dematic"
          dates={["May 2020 - September 2020", "January 2021 - April 2021"]}
          logo={dematic}
          link="https://www.dematic.com/en-ca/"
          bullets={[
            "Leveraged Unity's Data Oriented Technology Stack (DOTS) in enhancing the performance of large scale client scenes that utilized over 500,000 dynamic entities by 135%.",
            "Implemented control flow algorithms for monorail and conveyor layouts in C# within Unity to optimize package transportation at runtime, enhancing customer supply chain efficiency by 37%.",
            "Introduced state exportation and restoration to allow clients to generate warehouse snapshots dynamically and eliminating the overhead costs of generating simulated track anomalies.",
            "Designed automated regression testing for new and existing scenes on the CI pipeline, reducing manual labour by 66%.",
            "Interacted directly with clients to emulate distribution facilities leveraging Unity.",
          ]}
        />
        <ResumeCard
          title="Undergraduate Research Assistant"
          org="University of Waterloo + Meta AI"
          dates={["December 2019 - June 2020"]}
          logo={meta}
          link="https://ai.meta.com/research/"
          bullets={[
            "Conducted research with Charles Clarke in the field of neural indexing for conversational modeling in collaboration with Meta AI Research (formerly Facebook AI).",
            "Reduced weakly supervised training time in the Standalone Neural Ranking Model by 15% leveraging the TensorFlow library.",
            "Enhanced the mean average precision of retrieval from 28.1% to 30.2% in the dataset processing of over 2 million queries.",
            "Extended the Apache Lucene Core to support the combination of keyword and neural indexing.",
          ]}
        />
        <ResumeCard
          title="Build Engineer, Platform Infrastructure (Co-Op)"
          org="AppLogic Networks"
          dates={["September 2019 - December 2019"]}
          logo={applogic}
          link="https://www.applogicnetworks.com/"
          bullets={[
            "Automated build and deployment using Jenkins and Python to eliminate 80% of overhead labour costs, accelerating the production process.",
            "Optimized shell deployment scripts, reducing release times from 5+ hours to less than 30 minutes.",
            "Leveraged GitLab's Git hook architecture in bolstering internal server security while enhancing the team's software development life cycle.",
            "Implemented and maintained features in the CI Platform and testing automation framework.",
          ]}
        />
        <ResumeCard
          title="Instructional Support Assistant (Co-Op & Full-Time)"
          org="University of Waterloo"
          dates={["April 2018 - May 2022"]}
          logo={uwCS}
          link="https://uwaterloo.ca/computer-science-instructional-support-group/"
          bullets={[
            "Assisted in the coordination of CS246: Object-Oriented Software Development (Bash | C++).",
            "Delivered tutorials and addressed inquiries on Object-Oriented principles and the Unix environment, developing 200 to 1800 line programs in C++.",
            "Increased course efficiency through the automation and optimization of back-end processes with Python and Bash scripting, reducing testing times from 1+ days to less than 1 hour.",
            "Developed strong problem-solving skills by concurrently debugging code for 30 to 45 students on the spot effectively during office hours 4 times a week.",
            "Generated a web application to document back-end procedures and course coordination for future employees using HTML, CSS and JavaScript.",
          ]}
        />
      </section>
      <section class={style.section}>
        <h2 class={style.sectionTitle}>EDUCATION</h2>
        <ResumeCard
          title="Master of Mathematics in Computer Science, Thesis"
          org="University of Waterloo"
          dates={["September 2022 - December 2024"]}
          logo={uwLogo}
          link="https://uwaterloo.ca/future-graduate-students/programs/by-faculty/math/computer-science-master-math-mmath"
          bullets={[
            "Conducted research in the domain of self-reflection technology for understanding bias in machine teaching under the supervision of Dr. Edith Law.",
            "Thesis focus was on developing Human-in-the-loop LLM annotation tools aimed at recognizing and mitigating labelling biases during subjective dataset labelling tasks.",
            "Recipient of the Mathematics Domestic Graduate Student Award, granting CAD $3,000 per year towards tuition costs.",
          ]}
        />
        <ResumeCard
          title="Bachelor of Computer Science, Minor in Economics"
          org="University of Waterloo"
          dates={["September 2016 - August 2021"]}
          logo={uwLogo}
          link="https://uwaterloo.ca/future-students/programs/computer-science"
          bullets={[
            "Honours Computer Science - Co-operative Program, graduated with distinction.",
            "Recipient of the Merit Entrance Scholarship, granting a one-time payment of CAD $1,000 towards tuition costs.",
          ]}
        />
      </section>
      <section class={style.section}>
        <h2 class={style.sectionTitle}>ACADEMIC SERVICE</h2>
        <ResumeCard
          title="DIS 2025 Reviewer"
          org="ACM Conference on Designing Interactive Systems"
          dates={["March 2025"]}
          logo={dis}
          link="https://dis.acm.org/2025/"
          bullets={[
            "Reviewed and provided feedback for a full-paper submission.",
          ]}
        />
        <ResumeCard
          title="CHI 2025 Reviewer"
          org="ACM CHI Conference on Human Factors in Computing Systems"
          dates={["February 2025"]}
          logo={chi}
          link="https://chi2025.acm.org/"
          bullets={[
            "Reviewed and provided feedback for multiple rounds of a full-paper submission.",
          ]}
        />
        <ResumeCard
          title="UIST 2024 Reviewer"
          org="ACM Symposium on User Interface Software and Technology"
          dates={["May 2024"]}
          logo={uist}
          link="https://uist.acm.org/2024/"
          bullets={[
            "Reviewed and provided feedback for a full-paper submission.",
          ]}
        />
      </section>
      <section class={style.section}>
        <h2 class={style.sectionTitle}>HONOURS</h2>
        <ResumeCard
          title="OUSA Teaching Award Nomination"
          org="Ontario Undergraduate Student Alliance (OUSA)"
          dates={["March 2025"]}
          logo=""
          link="https://wusa.ca/about/awards/teaching-award/"
          bullets={[
            "Acknowledged for inspiring teaching practices and meaningful student engagement, as recognized by student nominations across Ontario universities.",
          ]}
        />
        <ResumeCard
          title="University of Waterloo Teaching Assistant Award"
          org="Cheriton School of Computer Science "
          dates={["September 2024"]}
          logo=""
          link="https://uwaterloo.ca/student-awards-financial-aid/awards/sandford-fleming-foundation-sff-award-teaching-assistantship#:~:text=The%20Sandford%20Fleming%20Foundation%20(SFF,department%20and%20in%20first%20year."
          bullets={[
            "Recognized for exceptional contributions and dedication to student learning across multiple academic terms.",
            "Included CAD $500 towards research funding.",
          ]}
        />
      </section>
    </motion.div>
  );
}
