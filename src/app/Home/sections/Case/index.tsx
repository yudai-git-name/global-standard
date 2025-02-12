import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import clsx from 'clsx';

import TopSectionTitle from '@/app/components/elements/Title/TopSection';
import TopSectionButton from '@/app/components/elements/Button/TopSection';
import { IoIosArrowDropright } from 'react-icons/io';

import { CaseItems } from './data';

export default function index() {
  return (
    <section className={styles.case}>
      <div className={clsx(styles.inner, 'innerXl')}>
        <div className={styles.head}>
          <TopSectionTitle
            titleEn="CASE STUDY"
            titleJa="導入事例"
            variant="secondary"
          />
          <div className={styles.buttonWrap}>
            <TopSectionButton href="/case" variant="primary" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.boxes}>
            {CaseItems.map((item, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.body}>
                  <h3 className={styles.heading3}>{item.companyName}　様</h3>
                  <div className={styles.category}>
                    <p className={styles.categoryName}>{item.category}</p>
                    <IoIosArrowDropright className={styles.icon} />
                  </div>
                </div>
                <div className={styles.imageWrap}>
                  <Image
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
