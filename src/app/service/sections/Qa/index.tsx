import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import { FaPlus } from 'react-icons/fa6';

import {qaItems} from './data'

export default function index() {
  return (
    <section className={styles.ga}>
      <div className={styles.head}>
        <h2 className={styles.heading2}>よくある質問</h2>
      </div>
      <div className={clsx(styles.list, 'innerS')}>
        {qaItems.map((item, index) => (
          <details key={index} className={styles.row} open={index === 1}>
            <summary className={styles.q}>
              <span className={styles.qTitle}>{item.question}</span>
              <FaPlus className={styles.plus} />
            </summary>
            <p className={styles.a}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

