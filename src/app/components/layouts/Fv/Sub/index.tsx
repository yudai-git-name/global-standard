import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import clsx from 'clsx';

export default function index() {
  return (
    <div className={styles.fvSub}>
      <div className={styles.inner}>
        <div className={clsx(styles.content, 'innerL')}>
          <hgroup className={styles.heading2}>
            <h2 className={styles.titleEn}>ABOUT US</h2>
            <p className={styles.titleJa}>当社について</p>
          </hgroup>
        </div>
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src={'/img/index/fv/fv_about.png'}
            width={1280}
            height={250}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
