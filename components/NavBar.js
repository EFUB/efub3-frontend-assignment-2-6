import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";
import logo from "../public/logo_baskinrobbins.png";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default NavBar;