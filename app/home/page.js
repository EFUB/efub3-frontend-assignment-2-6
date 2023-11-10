"use client";

import NavBar from "@/components/NavBar";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import main from "/public/main.jpg";

function Home() {
  return (
    <div className={styles.box}>
      <NavBar />
      <div className={styles.wrapper}>
        <Link href="/quiz">
          <div className={styles.quiz}>🐧퀴즈 풀러 가기🐧</div>
          <Image src={main} className={styles.img} height="600"></Image>
        </Link>
      </div>
    </div>
  );
}

export default Home;
