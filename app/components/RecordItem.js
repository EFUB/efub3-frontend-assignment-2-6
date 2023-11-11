import Image from "next/image";
import Link from "next/link";
import styles from "./RecordItem.module.css";

export default function RecordItem({ id, image, text }) {
  return (
    <Link href={{ pathname: `/detail/${id}` }}>
      <div className={styles.container}>
        <p className={styles.text}>{text}</p>
        <div className={styles.imgContainer}>
          <Image
            src={image}
            alt="pic"
            sizes="500px"
            fill
            className={styles.img}
          />
        </div>
      </div>
    </Link>
  );
}
