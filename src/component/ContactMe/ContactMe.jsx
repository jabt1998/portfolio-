import React from "react";
import styles from "./ContactMe.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactMe = () => {

  return (
    <>
    <div className={styles.contactMeSection}>
      <div className={styles.ContactMeHeader}> 
      <h2>Contact Me</h2>
      </div>
      <div className={styles.linkedin}>
        <a href="https://www.linkedin.com/in/james-thomas-57b087130/">
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className={styles.github}>
        <a href="https://github.com/jabt1998">
        <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className={styles.email}>
        <a href="mailto:jabt1998@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
    </>
  );
};

export default ContactMe;
