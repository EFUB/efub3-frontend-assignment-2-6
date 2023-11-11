'use client';

import styles from '../page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import deleteButton from '../../public/delete_button.png';

export default function WishCreate() {
  const router = useRouter();
  return (
    <div className={styles.box}>
      <div style={{ marginLeft: 'auto' }} onClick={() => router.push('/')}>
        <Image src={deleteButton} className={styles.deletebutton} />
      </div>
      <div className={styles.label} style={{ marginTop: '0px' }}>
        Name
      </div>
      <input className={styles.inputbox}></input>
      <div className={styles.label}>Category</div>
      <input className={styles.inputbox}></input>
      <div className={styles.label}>Price</div>
      <input className={styles.inputbox}></input>
      <div className={styles.label}>URL</div>
      <input className={styles.inputbox}></input>
      <div className={styles.label}>Reason</div>
      <input className={styles.inputbox} style={{ height: '120px' }}></input>
      <button className={styles.bluebutton}>Add</button>
    </div>
  );
}
