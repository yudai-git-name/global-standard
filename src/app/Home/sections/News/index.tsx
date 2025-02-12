import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import clsx from 'clsx';

import TopSectionTitle from '@/app/components/elements/Title/TopSection';
import TopSectionButton from '@/app/components/elements/Button/TopSection';

import { NewsItems } from './data';

export default function index() {
  return (
    <section className={styles.news}>
      <div className={clsx(styles.inner, 'innerXl')}>
        <div className={styles.head}>
          <TopSectionTitle
            titleEn="NEWS"
            titleJa="新着情報"
            variant="primary"
          />
          <div className={styles.buttonWrap}>
            <TopSectionButton href="/news" variant="secondary" />
          </div>
        </div>
        <div className={clsx(styles.content, 'innerL')}>
          <div className={styles.items}>
            {NewsItems.map((item, index) => (
              <Link key={index} href={item.href} className={styles.item}>
                <h3 className={styles.heading3}>{item.title}</h3>
                <div className={styles.newsHead}>
                  <p className={styles.category}>{item.category}</p>
                  <time dateTime={item.date} className={styles.date}>
                    {item.date}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
