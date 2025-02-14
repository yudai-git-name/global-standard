import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import SideBarNewArticle from '@/app/components/layouts/Sidebar/NewArticle';
import SideBarCategoryList from '@/app/components/layouts/Sidebar/CategoryList';

import {newsItems} from './data'

export default function index() {
  return (
    <div className={clsx(styles.wrapper, 'innerXl')}>
      <section className={styles.news}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h2 className={styles.heading2}>カテゴリ</h2>
            <div className={styles.boxes}>
              {newsItems.map((item, index) => (
                <article key={index} className={styles.box}>
                  <Link className={styles.boxInner} href={'/'}>
                    <div className={styles.body}>
                      <h3 className={styles.heading3}>{item.title}</h3>
                      <div className={styles.head}>
                        <div className={styles.categoryWrap}>
                          <p className={styles.category}>{item.category}</p>
                          <p className={styles.new}>{item.new}</p>
                        </div>
                        <time dateTime={item.date} className={styles.date}>
                          {item.date}
                        </time>
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
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className={styles.sideBArWrap}>
        <SideBarNewArticle />
        <SideBarCategoryList />
      </div>
    </div>
  );
}
