import React from "react";
import styles from "./PortfolioPage.module.scss";
import morseCode from "./morse-code.jpg";
import ticketTracker from './ticket-tracker.jpg';
import collegeThrifts from './college-thrifts.png';
import Planet from './Planet.jpg';
import brewDog from './brewdog.jpg';

const PortfolioPage = () => {
  return (
    <>
      <div className={styles.portfolioPage}>
        <div className={styles.portfolioHeader}>
          <h2>Projects</h2>
        </div>
        <div className={styles.projects}>
          <ul>
              <li>
                <a href="https://github.com/jabt1998/planet-frontend">
                <img className={styles.planet}src={Planet} alt="ticketTracker"/>
                </a>
              </li>
              <li>
                <a href="https://college-thrifts.web.app/">
                <img className={styles.collegeThrifts} src={collegeThrifts} alt="collegeThrifts"/>                
                </a>
              </li>              
              <li> <a href="https://github.com/jabt1998/Morse-Code-Translator">
                <img className={styles.morseCodeImg} src={morseCode} alt="morseCode"/>
                </a>
              </li>
              <li>
                <a href="https://github.com/jabt1998/brewdog-ipa">
                <img className={styles.brewDog} src={brewDog} alt="brewDog" />
                </a>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
