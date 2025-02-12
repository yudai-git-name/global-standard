import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

import { FaArrowRightLong } from 'react-icons/fa6';

import { CtaItems } from './data';

export default function index() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.boxes}>
            {CtaItems.map((item, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.head}>
                  <hgroup className={styles.heading2}>
                    <h2 className={styles.titleEn}>{item.titleEn}</h2>
                    <p className={styles.titleJa}>{item.titleJa}</p>
                  </hgroup>
                </div>
                <div className={styles.buttonWrap}>
                  <Link href={item.href} className={styles.link}>
                    View more
                    <FaArrowRightLong className={styles.icon} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
