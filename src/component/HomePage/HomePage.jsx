import React from "react";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    
    <section className={styles.homePage}>
     <div className={styles.nameSection}>
       <h2 className={styles.firstname}>James</h2>       
       <p>.</p>       
       <h2 className={styles.surname}>Thomas</h2>
     </div>    

     <div className={styles.developerSection}>
       <h2 className={styles.software}>Software</h2>
       <p>.</p>
       <h2 className={styles.developer}>Developer</h2>
     </div>
    </section>
    
  );
};

export default HomePage;
