"use client";

import Image from "next/image";
import styles from "./ItemBox.module.css";

function ItemBox({ item, onClickItem }) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={item.imageUrl}
        alt={item.title}
        width="200"
        height="200"
        className={styles.image}
        onClick={() => {
          onClickItem(item);
        }}
      />
      <div className={styles.text}>{item.title}</div>
    </div>
  );
}

export default ItemBox;
