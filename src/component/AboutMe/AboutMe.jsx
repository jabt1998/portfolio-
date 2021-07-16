import React from "react";
import styles from "./AboutMe.module.scss";
import image from './myself-pic.jpeg'

const AboutMe = () => {
  return (
    <>
     <section className={styles.aboutMeSection}>
      <div className={styles.aboutMe}>
        <h2>About Me</h2>
      </div>

      <div className={styles.myimg}>
        <img src={image} alt="James Thomas"/>
      </div>

      <div className={styles.description}>
        <p>
          I am a software developer based in London and I am currently on the look for new exciting roles.
        </p>
        <p>
          I have just completed a 12 week software development course with nology,
           learning and enjoying skills such as React, JavaScript, Html, css...
            I hope to not only implement these skills in my next role but continue to develop and learn and develop new skills.
        </p>
        <p>Outside of work I have a keen interest in football along with a passiong for creating videos for my youtube channel.</p>
      </div>
     </section>
    </>
  );
};

export default AboutMe;
