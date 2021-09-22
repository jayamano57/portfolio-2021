import React from "react";
import styles from "./link.module.scss";

export default function LinkButton({ href, label }) {
  return (
    <a className={styles.link} target="_blank" href={href}>
      {label}
    </a>
  );
}
