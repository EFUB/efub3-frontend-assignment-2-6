"use client";

import { useState, useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./RecordDetail.module.css";

export default function RecordDetail({ id }) {
  const router = useRouter();
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  useLayoutEffect(() => {
    const storedItemList = JSON.parse(localStorage.getItem("itemList")) || "";
    setItemList(storedItemList);

    const record = storedItemList.find((item) => item.id == id);
    if (record) {
      setSelectedItem(record);
    }
    console.log(id);
  }, [id]);

  const handleDeleteClick = () => {
    const newItemList = itemList.filter((item) => item.id != id);
    localStorage.setItem("itemList", JSON.stringify(newItemList));
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => router.push("/")}>홈으로</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
      <p className={styles.text}>{selectedItem.text}</p>
      <div className={styles.imgContainer}>
        {selectedItem.image && (
          <Image
            src={selectedItem.image}
            alt="pic"
            sizes="500px"
            fill
            className={styles.img}
          />
        )}
      </div>
    </div>
  );
}
