"use client";

import { useParams } from "next/navigation";
import RecordDetail from "../../components/RecordDetail";
import styles from "./page.module.css";

export default function Detail() {
  const { id } = useParams();
  return (
    <div className={styles.div}>
      <p className={styles.title}>{id}</p>
      <RecordDetail id={id} />
    </div>
  );
}
