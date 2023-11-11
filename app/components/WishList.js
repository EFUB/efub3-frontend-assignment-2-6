'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';
import Image from 'next/image';
import WishItem from './WishItem';
import addButton from '../../public/add_button.png';

export default function WishList() {
  const [items, setItem] = useState([
    {
      id: 0,
      title: 'hellodddddddddddddddddddddd',
      content:
        '어쩌고 dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
      category: '문구류',
      price: 1230000,
      url: 'https://www.montblanc.com/en-us/fountain-pens_cod43769801098290633.html',
    },
  ]);
  const router = useRouter();

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
              <WishItem key={item.key} {...item} />
            </div>
          );
        })}
      </div>
      <div onClick={() => router.push('/create')}>
        <Image className={styles.addbutton} src={addButton} />
      </div>
    </div>
  );
}
