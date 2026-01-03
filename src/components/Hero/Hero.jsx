
import { useEffect, useState } from "react";
import styles from './Hero.module.css';
import heroImg from '../../assets/hero.jpg';
import Navbar from '../Navbar/Navbar';

// Typing يقبل الآن prop اسمها start (افتراضي true)
// عند start=false لا يبدأ التوقيت وبالتالي لا تظهر الحروف
function Typing({ parts = [], speed = 60, onComplete, start = true }) {
  const [index, setIndex] = useState(0);
  const flat = parts.flatMap(part =>
    Array.from(part.text).map(ch => ({ ch, className: part.className }))
  );

  useEffect(() => {
    if (!start) return; // لا نفعل شيء قبل البدء
    if (index >= flat.length) {
      if (onComplete) onComplete();
      return;
    }
    const id = setTimeout(() => setIndex(i => i + 1), speed);
    return () => clearTimeout(id);
  }, [index, flat.length, speed, onComplete, start]);
  // reset index/completed if start toggles from false -> true (so Typing can replay)
  useEffect(() => {
    if (start) return;
    // when start becomes false we keep state; caller can remount or toggle to restart
  }, [start]);

  return (
    <span className={styles.typingLine} aria-live="polite">
      {flat.map((c, i) => (
        <span
          key={i}
          className={`${styles.char} ${i < index ? styles.visible : ""} ${c.className || ""}`}
        >
          {c.ch}
        </span>
      ))}
      <span className={styles.caret} aria-hidden="true" />
    </span>
  );
}

export default function Hero() {
 const startH1 = true;  // H1 يبدأ تلقائياً
  const [startH3, setStartH3] = useState(false);  // يبدأ بعد H1
  const [startP, setStartP] = useState(false);    // يبدأ بعد H3
  const [typingDone, setTypingDone] = useState(false);
  

  return (
    <section className={styles.hero}>
      <div className={styles.navWrapper}>
        <Navbar />
      </div>

      <div className={styles.text}>
        <h1 className={styles.title}>
          <Typing
            parts={[
              { text: "   Hello I'm " },
              { text: "Soufi Sara", className: styles.name }
            ]}
            speed={45}
            start={startH1}
            onComplete={() => setStartH3(true)}
          />
        </h1>

        <h3 className={styles.subtitle}>
          <Typing
            parts={[{ text: "    Junior Full-Stack Web Developer" }]}
            speed={35}
            start={startH3}
            onComplete={() => setStartP(true)}
          />
        </h3>

        <p className={styles.description}>
          <Typing
            parts={[{ text: "I design and develop front-end and back-end websites and applications.                                     I focus on creating modern, responsive, and user-friendly digital experiences." }]}
            speed={10}
            start={startP}
            onComplete={() => setTypingDone(true)}
          />
        </p><br/><br/>
 <div
          className={`${styles.buttons} ${typingDone ? styles.showButtons : ""}`}
          aria-hidden={!typingDone}
        >
          <button className={styles.primary}>View My Work</button>
          <button className={`${styles.primary} ${styles.outline}`}>Contact Me</button>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img src={heroImg} alt="Soufi Sara" />
      </div>

      <div className={styles.arrow} />
    </section>
  );
}
// ...existing code...