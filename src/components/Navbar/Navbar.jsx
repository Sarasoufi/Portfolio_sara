import styles from './Navbar.module.css'

export default function Navbar() {
  function handleAnchorClick(e) {
    const el = e.currentTarget;
    // add visual click animation
    el.classList.add(styles.clicked);
    setTimeout(() => el.classList.remove(styles.clicked), 250);
    // smooth scroll to target (html scroll-behavior already enabled)
    const href = el.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li tabIndex="0"><a href="#home" onClick={handleAnchorClick}>Home</a></li>
        <li tabIndex="0"><a href="#skills" onClick={handleAnchorClick}>Skills</a></li>
        <li tabIndex="0"><a href="#work" onClick={handleAnchorClick}>Work</a></li>
        <li tabIndex="0"><a href="#contact" onClick={handleAnchorClick}>Contact</a></li>
      </ul>
    </nav>
  )
}
