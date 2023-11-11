import Link from "next/link";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div className={styles.mainDiv}>
        <div className={styles.subDiv}>
          <div className={styles.title}>베스킨라빈스 최애 맛 월드컵</div>
          <div>월드컵은 4강부터 시작합니다.</div>
          <div>당신의 최애 맛에 투표하세요!</div>
          <Link href="/world-cup">
            <button className={styles.linkBtn}>월드컵 하러가기 &gt;</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
