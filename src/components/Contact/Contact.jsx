import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2>Contact Me</h2>

      {/* Contact Info */}
      <div className={styles.info}>
        <p>
          - Email:
          <a href="mailto:sarasoufi047@gmail.com">sarasoufi047@gmail.com</a>
        </p>

        <p>
          - LinkedIn:
          <a
            href="https://www.linkedin.com/in/sara-soufi"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/sara-soufi
          </a>
        </p>

        <p>
          - GitHub:
          <a
            href="https://github.com/sarasoufi"
            target="_blank"
            rel="noreferrer"
          >
            github.com/sarasoufi
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <form
        className={styles.form}
        action="https://formspree.io/f/xlgrzvvj"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
