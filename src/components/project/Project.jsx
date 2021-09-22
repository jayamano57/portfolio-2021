import React from "react";
import styles from "./project.module.scss";
import Tilty from "react-tilty";
import LinkButton from "../linkButton/LinkButton";

export default function Project({
  logo,
  name,
  title,
  description,
  links,
  mockup,
  bgColor,
  mobile,
  technologies,
}) {
  return (
    <Tilty
      perspective={20000}
      max={15}
      className={styles.project}
      style={{ transformStyle: "preserve-3d", background: bgColor }}
    >
      <div className={styles.projectInfo}>
        <img className={styles.projectLogo} src={logo} alt={`${title} logo`} />
        <div className={styles.projectDescription}>{description}</div>
        <div className={styles.projectTechnologies}>
          {technologies.map((tech, i) => (
            <span key={i + 1} className={styles.technology}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          {links.github && <LinkButton href={links.github} label="Github" />}
          {links.website && <LinkButton href={links.website} label="Website" />}
          {links.demo && <LinkButton href={links.demo} label="Demo" />}
        </div>
      </div>
      <div
        className={`${styles.mockupContainer} ${
          mobile ? styles.mobile : styles.mockup
        }`}
      >
        <img
          className={`${
            mobile ? styles.projectMockupMobile : styles.projectMockupDesktop
          }`}
          src={mockup}
        ></img>
      </div>
    </Tilty>
  );
}
