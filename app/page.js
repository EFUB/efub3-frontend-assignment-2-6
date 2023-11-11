"use client";

import RecordList from "./components/RecordList";
import RecordWrite from "./components/RecordWrite";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function MainPage() {
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    const storedItemList = JSON.parse(localStorage.getItem("itemList")) || "";
    setItemList(storedItemList);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Record</p>
      <p className={styles.subtitle}>사진과 일상을 기록해 보세요</p>
      <RecordWrite itemList={itemList} setItemList={setItemList} />
      <RecordList itemList={itemList} setItemList={setItemList} />
    </div>
  );
}
