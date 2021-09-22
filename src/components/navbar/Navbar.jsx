import React from "react";
import styles from "./navbar.module.scss";
import LinkButton from "../linkButton/LinkButton";
import resume from "../../assets/Jay-Resume-2021.pdf";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>JA.</div>
      <div className={styles.usefulLinks}>
        <LinkButton href="tel:8182648194" label="818.264.8194" />
        <LinkButton
          href="mailto:jayamano57@gmail.com"
          label="jayamano57@gmail.com"
        />
        <a className={styles.resumeBtn} href={resume} target="_blank">
          Resume
        </a>
      </div>
    </nav>
  );
}
