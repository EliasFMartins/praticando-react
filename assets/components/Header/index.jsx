import styles from "./styles.module.css";
import {CgYinyang} from 'react-icons/cg'
export function Header() {
  return (
    <header>
      <h1 className={styles.header}><CgYinyang/>Texte De Blog<CgYinyang/></h1>
    </header>
  );
}
