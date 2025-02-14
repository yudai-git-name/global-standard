import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { NewArticleItems } from './data';

export default function index() {
  return (
    <aside className={styles.sideBar}>
      <div className={styles.newArticle}>
        <h2 className={styles.heading2}>新着記事</h2>
        <div className={styles.boxes}>
          {NewArticleItems.map((item, index) => (
            <article key={index} className={styles.box}>
              <Link className={styles.boxInner} href={'/'}>
                <div className={styles.body}>
                  <h3 className={styles.heading3}>{item.title}</h3>
                  <div className={styles.head}>
                    <p className={styles.category}>{item.category}</p>
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
    </aside>
  );
}
