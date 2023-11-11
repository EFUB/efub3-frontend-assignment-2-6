import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";
import icon from "/public/icon.png";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <Link href="/home">
        <Image src={icon} alt="logo" width={60} height={65} />
      </Link>
      {/* <div className={styles.detail}>pengQuiz</div> */}
    </div>
  );
}

export default NavBar;
