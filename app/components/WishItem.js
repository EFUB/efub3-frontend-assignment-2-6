'use client';
import styles from '../page.module.css';

export default function WithItem(props) {
  return (
    <div className={styles.wishitem}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.content}>{props.content}</div>
      <div className={styles.innerbox}> </div>
      <div className={styles.category}>{props.category}</div>
      <div className={styles.price}>{props.price}원</div>
    </div>
  );
}
