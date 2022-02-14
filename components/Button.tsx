import React from "react";
import styles from "./Banner.module.css";

interface Button {
  btnTitle: string;
}
export const Button = ({ btnTitle }: Button) => {
  const handleClick = () => {
    console.log("I've been clicked...");
  };
  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        {btnTitle}
      </button>
    </div>
  );
};
