import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';

import { CategoryListItems } from './data';

export default function index() {
  return (
    <div className={styles.categoryList}>
      <div className={styles.inner}>
        <h2 className={styles.heading2}>カテゴリ</h2>
        <ul className={styles.items}>
          {CategoryListItems.map((item, index) => (
            <li key={index} className={styles.item}>
              <Link href={'/'} className={styles.link}>
                <h3 className={styles.heading3}>
                  {item.category}
                  <IoIosArrowForward className={styles.icon} />
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
