import React from "react";
import styles from "./projects.module.scss";
import Project from "../../components/project/Project";
import projectData from "../../projectData";

export default function Projects() {
  return (
    <section className={styles.projects}>
      {projectData.map(
        ({
          id,
          logo,
          name,
          title,
          description,
          links,
          mockup,
          bgColor,
          mobile,
          technologies,
        }) => {
          return (
            <Project
              key={id}
              mobile={mobile}
              logo={logo}
              name={name}
              title={title}
              description={description}
              technologies={technologies}
              links={links}
              mockup={mockup}
              bgColor={bgColor}
            />
          );
        }
      )}
    </section>
  );
}
