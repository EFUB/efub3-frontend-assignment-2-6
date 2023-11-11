'use client';

import styles from '../page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import deleteButton from '../../public/delete_button.png';

export default function WishCreate() {
  const router = useRouter();

  const [input, setInput] = useState({
    id: Date.now().toString(),
    name: '',
    category: '',
    price: 0,
    url: '',
    content: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const onSubmit = () => {
    let localData = JSON.parse(localStorage.getItem('wishlist'));
    localData.push(input);
    localStorage.setItem('wishlist', JSON.stringify(localData));
    router.push(`/`);
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
      <input
        name="name"
        className={styles.inputbox}
        onChange={handleChange}
      ></input>
      <div className={styles.label}>Category</div>
      <input
        name="category"
        className={styles.inputbox}
        onChange={handleChange}
      ></input>
      <div className={styles.label}>Price</div>
      <input
        name="price"
        className={styles.inputbox}
        onChange={handleChange}
      ></input>
      <div className={styles.label}>URL</div>
      <input
        name="url"
        className={styles.inputbox}
        onChange={handleChange}
      ></input>
      <div className={styles.label}>Reason</div>
      <input
        name="content"
        className={styles.inputbox}
        style={{ height: '120px' }}
        onChange={handleChange}
      ></input>
      <button className={styles.bluebutton} onClick={onSubmit}>
        Add
      </button>
    </div>
  );
}
