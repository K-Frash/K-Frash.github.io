// src/components/Contact.tsx
import { useState, useEffect, useRef } from "preact/hooks";
import { motion } from "framer-motion";
import style from "../styles/Contact.module.css";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: Event) {
    e.preventDefault();
    const form = new FormData(formRef.current!);
    const subject = `Contact from ${form.get("name")}`;
    const body = [
      `Hey Kris,\n`,
      `${form.get("message")}\n`,
      `${form.get("name")}`,
      `${form.get("email")}`,
    ].join("\n");
    window.location.href =
      `mailto:krisfrasheri@gmail.com?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  }

  return (
    <div class={style.body}>
      <motion.div
        class={style.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 class={style.heading}>Let's Connect</h1>
        <p class={style.subheading}>
          I'd love to hear from you — whether you have a question, project
          collaboration, or just want to say hello! 👋
        </p>

        <form ref={formRef} class={style.form} onSubmit={handleSubmit}>
          <motion.input
            class={style.input}
            type="text"
            name="name"
            placeholder="Your Name"
            required
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          />
          <motion.input
            class={style.input}
            type="email"
            name="email"
            placeholder="Your Email"
            required
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          />
          <motion.textarea
            class={style.textarea}
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          />

          <motion.button
            type="submit"
            class={style.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Send Message
          </motion.button>
        </form>

        <motion.div
          class={style.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:krisfrasheri@gmail.com" class={style.iconLink}>
            <EmailIcon class={style.icon} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/K-Frash"
            target="_blank"
            rel="noopener noreferrer"
            class={style.iconLink}
          >
            <GitHubIcon class={style.icon} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/krisfrasheri/"
            target="_blank"
            rel="noopener noreferrer"
            class={style.iconLink}
          >
            <LinkedInIcon class={style.icon} />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
