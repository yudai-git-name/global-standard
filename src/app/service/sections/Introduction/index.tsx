import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

import { IntroductionItems } from './data';

export default function index() {
  return (
    <section className={styles.introduction}>
      <div className={styles.inner}>
        <div className={styles.heading2}>
          <h2 className={styles.heading2Title}>導入の流れ</h2>
        </div>
        <div className={clsx(styles.content, 'innerXl')}>
          <div className={styles.boxes}>
            {IntroductionItems.map((item, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.boxHead}>
                  <p className={styles.boxHeadText}>
                    <span className={styles.boxHeadTextEn}>STEP</span>
                    <span className={styles.boxHeadTextNumber}>
                      {item.number}
                    </span>
                  </p>
                </div>
                <div className={styles.body}>
                  <div className={styles.bodyInner}>
                    <h3 className={styles.heading3}>{item.title}</h3>
                    <p className={styles.text}>{item.text}</p>
                    <p className={styles.textNote}>{item.textNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
