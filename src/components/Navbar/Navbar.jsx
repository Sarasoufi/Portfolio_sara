import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
     
      <ul>
         <li tabIndex="0">Home</li>
        <li tabIndex="0">Expertise</li>
        <li tabIndex="0">Work</li>
        <li tabIndex="0">Contact</li>
      </ul>
    </nav>
  )
}
