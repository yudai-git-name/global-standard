import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import clsx from 'clsx';

import TopSectionTitle from '@/app/components/elements/Title/TopSection';
import TopSectionButton from '@/app/components/elements/Button/TopSection';

import { ServiceItems } from './data';

export default function index() {
  return (
    <section className={styles.service}>
      <div className={clsx(styles.inner, 'innerXl')}>
        <div className={styles.head}>
          <TopSectionTitle titleEn="SERVICE" titleJa="サービス" />
          <div className={styles.buttonWrap}>
            <TopSectionButton href="/service" variant="secondary" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.boxes}>
            {ServiceItems.map((item, index) => (
              <div key={index} className={styles.box}>
                <p className={styles.number}>{item.number}</p>
                <div className={styles.body}>
                  <h3 className={styles.heading3}>
                    <span className={styles.top}>{item.titleTop}</span>
                    <span className={styles.bottom}>{item.titleBottom}</span>
                  </h3>
                  <div className={styles.textWrap}>
                    <p className={styles.text}>
                      {item.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
                <div className={styles.imageWrap}>
                  <Image
                    className={styles.image}
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
