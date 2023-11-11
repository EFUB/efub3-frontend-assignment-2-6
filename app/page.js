import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import popcornImg from "../public/popcorn.png";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Image src={popcornImg} className={styles.popcorn} alt="popcorn-image" />
      <Link href={"/list"}>
        <button className={styles.button}>영화 보러가기</button>
      </Link>
    </div>
  );
}
