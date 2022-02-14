import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";
import cls from "classnames";

interface Props {
  name: string;
  imageUrl: string;
  route: string;
  className: string;
}

export const Card = ({ name, imageUrl, route }: Props) => {
  return (
    <Link href={route}>
      <a className={styles.cardLink}>
        <div className={cls("glass", styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h1 className={styles.cardHeader}>{name}</h1>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={imageUrl}
              width={260}
              height={160}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};
