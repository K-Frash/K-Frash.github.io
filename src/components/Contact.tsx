import { useRef, useState } from "preact/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Helmet from "preact-helmet";
import style from "../styles/Contact.module.css";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"SUCCESS" | "ERROR" | null>(null);

  async function handleSubmit(e: Event) {
    e.preventDefault();
    const form = formRef.current!;
    const data = new FormData(form);

    try {
      //AJAX request to Formspree should be okay? TODO: check CORS
      const res = await fetch("https://formspree.io/f/xzzrqpqg", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus(null), 3000); // Popup dismissal hard coded for now
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }

    //// Disabled for now as I investiage specific mailto errors on certain browsers
    // const form = new FormData(formRef.current!);
    // const subject = `Contact from ${form.get("name")}`;
    // const body = [
    //   `Hey Kris,\n`,
    //   `${form.get("message")}\n`,
    //   `${form.get("name")}`,
    //   `${form.get("email")}`,
    // ].join("\n");
    // window.location.href =
    //   `mailto:krisfrasheri@gmail.com?subject=${encodeURIComponent(subject)}` +
    //   `&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "en" }}
        title="Contact | Kris Frasheri"
        titleTemplate="%s"
        meta={[
          {name: "description",content:"Get in touch with Kris Frasheri ✉️! Feel free to reach out and ask any questions related to my research, work or shared interests.",},
          {name: "keywords", content:"Kris Frasheri, kfrasher, contact, AI researcher, HCI, University of Waterloo, UW, UW CS, human-computer interaction, value-sensitive design, LLM, educator, computer science, collaborative AI"},
          {name: "author", content: "Kris Frasheri" },
          {property: "og:title", content: "Contact | Kris Frasheri" },
          {property: "og:description", content: "Get in touch with Kris Frasheri ✉️! Feel free to reach out and ask any questions related to my research, work or shared interests."},
          {property: "og:type", content: "website" },
          {property: "og:url", content: "https://krisfrasheri.com/contact/" },
          {property: "og:image", content: "https://krisfrasheri.com/assets/about/profile.jpg"},
          {property: "og:locale", content: "en_US" },
          {property: "og:locale:alternate", content: "en_CA" },
          {name: "twitter:card", content: "summary_large_image" }, // TODO: This needs more testing, odd formating issues on X
          {name: "twitter:title", content: "Contact | Kris Frasheri" },
          {name: "twitter:description", content:"Contact Kris Frasheri - AI & HCI researcher at the University of Waterloo."},
          {name: "twitter:image",content: "https://krisfrasheri.com/assets/about/profile.jpg"},
        ]}
        link={[{ rel: "canonical", href: "https://krisfrasheri.com/contact/" }]}
      />
      <div class={style.body}>
        <AnimatePresence>
          {status === "SUCCESS" && (
            <motion.div
              class={style.toast}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              Thank you for reaching out! 🙌
            </motion.div>
          )}
          {status === "ERROR" && (
            <motion.div
              class={style.toastError}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              Oops—something went wrong. ⛓️‍💥
            </motion.div>
          )}
        </AnimatePresence>
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
    </>
  );
}
