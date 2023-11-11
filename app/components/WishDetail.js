'use client';

import styles from '../page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import deleteButton from '../../public/delete_button.png';

export default function WishDetail({ itemId }) {
  const router = useRouter();
  const [itemList, setItemList] = useState(
    JSON.parse(localStorage.getItem('wishlist'))
  );
  const [item, setItem] = useState({});
  useEffect(() => {
    console.log(itemList);
    console.log(itemId.id);
    const record = itemList.find((item) => item.id == itemId.id);
    console.log(record);
    if (record) {
      setItem(record);
    }
  }, [item]);

  const handleDelete = () => {
    const newItemList = itemList.filter((item) => item.id != itemId.id);
    localStorage.setItem('wishlist', JSON.stringify(newItemList));
    router.push('/');
  };

  return (
    <div className={styles.box}>
      <div style={{ marginLeft: 'auto' }} onClick={() => router.push('/')}>
        <Image
          src={deleteButton}
          alt="delete"
          className={styles.deletebutton}
        />
      </div>
      <div className={styles.label} style={{ marginTop: '0px' }}>
        Name
      </div>
      <div className={styles.info}>{item.name}</div>
      <div className={styles.label}>Category</div>
      <div className={styles.info}>{item.category}</div>
      <div className={styles.label}>Price</div>
      <div className={styles.info}>{item.price}</div>
      <div className={styles.label}>URL</div>
      <div className={styles.info}>{item.url}</div>
      <div className={styles.label}>Reason</div>
      <div className={styles.info} style={{ height: '120px' }}>
        {item.content}
      </div>
      <button
        className={styles.bluebutton}
        style={{ width: '200px' }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
