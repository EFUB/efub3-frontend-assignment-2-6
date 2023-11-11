"use client";
import NavBar from "@/components/NavBar";
import styles from "./page.module.css";
import Image from "next/image";
import p1 from "/public/p1.jpeg";
import p2 from "/public/p2.jpeg";
import p3 from "/public/p3.jpeg";
import p4 from "/public/p4.jpeg";
import p5 from "/public/p5.jpeg";
import p6 from "/public/p6.jpeg";
import Quiz from "@/components/Quiz";

function Detail() {
  return (
    <div>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.title}> 새끼 팽귄은 총 몇 마리일까요? 🤔</div>
        <div className={styles.wrapper}>
          <Image src={p1} className={styles.img}></Image>
          <Image src={p2} className={styles.img}></Image>
          <Image src={p3} className={styles.img}></Image>
          <Image src={p4} className={styles.img}></Image>
          <Image src={p5} className={styles.img}></Image>
          <Image src={p6} className={styles.img}></Image>
        </div>
        <Quiz />
      </div>
    </div>
  );
}

export default Detail;
