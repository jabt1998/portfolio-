import React from "react";
import styles from "./Background.module.scss";
import image from './portfolio-background.svg';

const Background = () => {
  return (
    <>
      
      <img className={styles.redBackground} src={image} alt="red"/>
    </>
  );
};

export default Background;
