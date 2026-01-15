import styles from './Skills.module.css'

import HtmlLogo from '../../assets/html.svg'
import CssLogo from '../../assets/css.svg'
import JsLogo from '../../assets/js.svg'
import ReactLogo from '../../assets/react.svg'
import PhpLogo from '../../assets/php.svg'
import LaravelLogo from '../../assets/laravel.svg'
import FlutterLogo from '../../assets/flutter.svg'
import ViteLogo from '../../assets/vite.svg'
import GitLogo from '../../assets/git.svg'
import JestLogo from '../../assets/jest.svg'
import GithubLogo from '../../assets/github.svg'
import VsCodeLogo from '../../assets/vscode.svg'

function TechItem({ IconSrc, title, subtitle, alt }) {
  return (
    <div className={styles.techItem}>
      <img src={IconSrc} className={styles.techIcon} alt={alt || title} />
      <div>
        <h4>{title}</h4>
        <p className={styles.small}>{subtitle}</p>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    
    <section id="skills" className={styles.skills}>
      <h2>Skills & Technologies</h2>
      <h5 className={styles.lead}>
        Overview of my technical stack: web languages, frameworks and tools.
      </h5>

      <div className={`${styles.card} ${styles.cardWeb}`}>
        <h3>Front-end Web</h3>
        <div className={styles.techList}>
          <TechItem IconSrc={HtmlLogo} title="HTML" subtitle="Language" />
          <TechItem IconSrc={CssLogo} title="CSS" subtitle="Language" />
          <TechItem IconSrc={JsLogo} title="JavaScript" subtitle="Language" />
          <TechItem IconSrc={ReactLogo} title="React" subtitle="Framework" />
        </div>
      </div>

      <div className={`${styles.card} ${styles.cardBackend}`}>
        <h3>Back-end Web</h3>
        <div className={styles.techList}>
          <TechItem IconSrc={PhpLogo} title="PHP" subtitle="Language" />
          <TechItem IconSrc={LaravelLogo} title="Laravel" subtitle="MVC framework" />
        </div>
      </div>

      <div className={`${styles.card} ${styles.cardApp}`}>
        <h3>Front-end App</h3>
        <div className={styles.techList}>
          <TechItem IconSrc={FlutterLogo} title="Flutter" subtitle="Framework" />
        </div>
      </div>

      <div className={`${styles.card} ${styles.cardTools}`}>
        <h3>Tools</h3>
        <div className={styles.techList}>
          <TechItem IconSrc={ViteLogo} title="Vite" subtitle="Build tool" />
          <TechItem IconSrc={GitLogo} title="Git" subtitle="Version control" />
          <TechItem IconSrc={JestLogo} title="Jest" subtitle="Testing" />
          <TechItem IconSrc={GithubLogo} title="GitHub" subtitle="Repository" />
          <TechItem IconSrc={VsCodeLogo} title="VS Code" subtitle="Editor" />
        </div>
      </div>
    </section>
  )
}