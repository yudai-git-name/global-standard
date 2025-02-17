import React from 'react';
import styles from '../../index.module.css';

import { CategoryButtonItems } from './data';

export default function index() {
  return (
    <>
      <div className={styles.categoryButton}>
        {CategoryButtonItems.map((item, index) => (
          <div key={index} className={styles.categoryButtonItem}>
            <button type="button" className={styles.button}>
              {item.categoryNameJa}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
