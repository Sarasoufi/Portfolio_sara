import { useEffect, useRef } from "react";
import styles from "./Work.module.css";

const labs = [
  {
    title: "Lab 7- Kanban Board",
    description:
      "A Trello-like task management application built with React.Features task creation, status-based columns, dynamic task movement, and modern component architecture..",
    tech: ["React", "Vite", "CSS Modules" ,"JavaScript","Jest"],
    github: "https://github.com/Sarasoufi/caw-labs/tree/lab7-setup/Lab7/kanban-board",
    
  },
  {
    title: "Lab 5-React Components & State Management",
    description:
      "A React lab that demonstrates core concepts including functional components, hooks, events, lists, props, and forms to build interactive and dynamic user interfaces.",
    tech: ["React" , "JavaScript" , "Vite" , "CSS"],
    github: "https://github.com/Sarasoufi/caw-labs/tree/lab5-react/lab5-react",
  },
  {
    title: "Lab4 – Unit Testing in JavaScript (Jest)",
    description:
      "A JavaScript project that demonstrates unit testing using Jest. It includes tests for array manipulation functions such as retrieving the first or last elements, concatenating strings, and splitting arrays into chunks, ensuring code reliability and correctness.",
    tech: ["JavaScript" ,"Jest" , "Node.js" , "NPM"],
    github: "https://github.com/Sarasoufi/caw-labs/tree/lab5-react/Lab4_Jest",
  },
  {
    title: "Lab3 – Node.js & NPM",
    description:
      "A Node.js project focused on server-side JavaScript development and package management using NPM. It includes exercises such as creating reusable modules, performing file operations, calculating averages, and experimenting with third-party packages. This lab highlights practical use of Node’s core modules, custom module imports, and NPM package integration to build efficient server-side scripts.",
    tech: ["Node.js" , "JavaScript" , "NPM" , "File System (fs)"],
    github: "https://github.com/Sarasoufi/caw-labs/tree/lab3",
  },
  {
    title: "Lab2 – Git & GitHub/GitLab",
    description:
      "A version control project that introduces Git and GitHub/GitLab for managing and tracking code changes. The lab covers initializing repositories, creating commits, organizing project folders, branching, and pushing local changes to remote repositories. This lab emphasizes practical skills in version control, collaboration, and proper workflow management for software development..",
    tech: ["Git" , "GitHub/GitLab" , "Command Line" , "Version Control"],
    github: "https://github.com/Sarasoufi/caw-labs/tree/lab5-react/Lab2",
   
  },
];

export default function Work() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.work}>
      <h2>Project Showcase</h2>
      <p className={styles.subtitle}>
        Labs & projects completed during this semester
      </p>

      <div className={styles.grid}>
        {labs.map((lab, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.card}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <h3>{lab.title}</h3>

            <p className={styles.description}>{lab.description}</p>

            <ul className={styles.tech}>
              {lab.tech.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className={styles.links}>
              <a href={lab.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              {lab.demo && (
                <a
                  href={lab.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.demo}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
