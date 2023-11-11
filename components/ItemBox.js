"use client";

import Image from "next/image";
import styles from "./ItemBox.module.css";

function ItemBox({ item, winners, setWinners }) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={item.imageUrl}
        alt={item.title}
        width="200"
        height="200"
        className={styles.image}
        onClick={onClickItem}
      />
      <div className={styles.text}>{item.title}</div>
    </div>
  );
}

export default ItemBox;
