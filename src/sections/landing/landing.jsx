import React, { useEffect, useState, useRef } from "react";
import styles from "./landing.module.scss";
import mePic from "../../assets/jay-profile-color.jpg";
import { Player } from "@lottiefiles/react-lottie-player";
import linkedinLottie from "../../assets/lottie/linkedin.json";
import githubLottie from "../../assets/lottie/github.json";

export default function Landing() {
  const [showResponsive, setShowResponsive] = useState(true);
  const [showAccessible, setShowAccessible] = useState(false);
  const [showIntuitive, setShowIntuitive] = useState(false);
  const [showBeautiful, setShowBeautiful] = useState(false);

  useEffect(() => {
    const descriptorInterval = setInterval(() => {
      if (showResponsive) {
        setShowResponsive((prev) => !prev);
        setShowAccessible((prev) => !prev);
      } else if (showAccessible) {
        setShowAccessible((prev) => !prev);
        setShowIntuitive((prev) => !prev);
      } else if (showIntuitive) {
        setShowIntuitive((prev) => !prev);
        setShowBeautiful((prev) => !prev);
      } else {
        setShowBeautiful((prev) => !prev);
        setShowResponsive((prev) => !prev);
      }
    }, 5000);
    return () => clearInterval(descriptorInterval);
  }, [showResponsive, showAccessible, showIntuitive, showBeautiful]);

  return (
    <section className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1>
            <span className={`${styles.introText} ${styles.subtext}`}>
              Hello there, I'm
            </span>
            <span className={styles.nameText}>Jay Amano.</span>
          </h1>
          <h2 className={styles.aboutMeBlurb}>
            <p className={styles.subtext}>
              I'm a front end developer based in Woodland Hills, CA.
            </p>
            <div className={styles.subtext}>
              I build
              <div className={styles.descriptorBox}>
                <span
                  className={`${styles.descriptor} ${
                    showResponsive ? styles.show : styles.hide
                  }`}
                >
                  responsive
                </span>
                <span
                  className={`${styles.descriptor} ${
                    showAccessible ? styles.show : styles.hide
                  }`}
                >
                  accessible
                </span>
                <span
                  className={`${styles.descriptor} ${
                    showIntuitive ? styles.show : styles.hide
                  }`}
                >
                  intuitive
                </span>
                <span
                  className={`${styles.descriptor} ${
                    showBeautiful ? styles.show : styles.hide
                  }`}
                >
                  beautiful
                </span>
              </div>{" "}
              web applications.
            </div>
          </h2>
          <div className={styles.linksContainer}>
            <p>Here're some links</p>
            <span className={styles.line} />
            <div className={styles.links}>
              <a
                href="https://www.linkedin.com/in/jay-amano-143475b2/"
                target="_blank"
              >
                <Player
                  autoplay={false}
                  loop={true}
                  hover={true}
                  src={linkedinLottie}
                  style={{ width: "52px", height: "52px" }}
                  speed={1.5}
                ></Player>
              </a>
              <a href="https://github.com/jayamano57" target="_blank">
                <Player
                  autoplay={false}
                  loop={true}
                  hover={true}
                  src={githubLottie}
                  style={{ width: "52px", height: "52px" }}
                  speed={1.5}
                ></Player>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imagesGroup}>
            <div className={styles.mePicShadow} />
            <img src={mePic} alt="Picture of Jay" />
          </div>
        </div>
      </div>
      <div className={styles.wavyDivider}>
        <svg
          className={styles.wavyDividerDesktop}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            className={styles.shapeFill}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
        <svg
          className={styles.wavyDividerTablet}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            className={styles.shapeFill}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
        <svg
          className={styles.wavyDividerMobile}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            className={styles.shapeFill}
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
