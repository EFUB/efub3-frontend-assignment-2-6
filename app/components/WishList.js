'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';
import Image from 'next/image';
import WishItem from './WishItem';
import addButton from '../../public/add_button.png';

export default function WishList() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const localData = localStorage.getItem('wishlist');
    if (localData) {
      setItems(JSON.parse(localData));
    } else {
      localStorage.setItem('wishlist', JSON.stringify(items));
    }
  }, []);

  return (
    <div>
      <div className={styles.wishlist}>
        {items.map((item) => {
          return (
            <div
              onClick={() => {
                router.push(`/detail/${item.id}`);
              }}
            >
              <WishItem key={item.id} {...item} />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          router.push(`/create`);
        }}
      >
        <Image className={styles.addbutton} src={addButton} />
      </button>
    </div>
  );
}
