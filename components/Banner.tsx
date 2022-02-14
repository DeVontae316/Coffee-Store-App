import React from "react";
import styles from "./Banner.module.css";
import { Button } from "./Button";

interface Props {
  title1: string;
  title2: string;
  subTitle: string;
  btnText: string;
}

export const Banner = ({ title1, title2, subTitle, btnText }: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.title1}>{title1}</span>
          <span className={styles.title2}>{title2}</span>
        </h1>
      </div>
      <div className={styles.subTitleContainer}>
        <p className={styles.subTitle}> {subTitle}</p>
      </div>
      <div className={styles.btnContainer}>
        <Button btnTitle={btnText} />
      </div>
    </section>
  );
};
