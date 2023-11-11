'use client';

import styles from '../page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import deleteButton from '../../public/delete_button.png';

export default function WishDetail() {
  const router = useRouter();
  return (
    <div className={styles.box}>
      <div style={{ marginLeft: 'auto' }} onClick={() => router.push('/')}>
        <Image src={deleteButton} className={styles.deletebutton} />
      </div>
      <div className={styles.label} style={{ marginTop: '0px' }}>
        Name
      </div>
      <div className={styles.inputbox}></div>
      <div className={styles.label}>Category</div>
      <div className={styles.inputbox}></div>
      <div className={styles.label}>Price</div>
      <div className={styles.inputbox}></div>
      <div className={styles.label}>URL</div>
      <div className={styles.inputbox}></div>
      <div className={styles.label}>Reason</div>
      <div className={styles.inputbox} style={{ height: '120px' }}></div>
      <button className={styles.bluebutton} style={{ width: '200px' }}>
        Delete
      </button>
    </div>
  );
}
