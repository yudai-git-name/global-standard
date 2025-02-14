import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Image from 'next/image';

import { MessageItems } from './data';

export default function index() {
  return (
    <section className={styles.message}>
      <div className={clsx(styles.inner, 'innerXl')}>
        <div className={styles.content}>
          <div className={styles.boxes}>
            {MessageItems.map((item, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.head}>
                  <hgroup className={styles.heading2}>
                    <h2 className={styles.titleEn}>{item.titleEn}</h2>
                    <p className={styles.titleJa}>{item.titleJa}</p>
                  </hgroup>
                </div>
                <div className={clsx(styles.body, 'innerS')}>
                  <h3 className={styles.heading3}>{item.heading3}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
                <div className={styles.imageWrap}>
                  <picture>
                    <source srcSet={item.image.srcSp} />
                    <Image
                      className={styles.image}
                      src={item.image.srcPc}
                      width={item.image.width}
                      height={item.image.height}
                      alt={item.image.alt}
                    />
                  </picture>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
