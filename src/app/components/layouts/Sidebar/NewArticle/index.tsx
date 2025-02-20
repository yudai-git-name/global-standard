import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { getNewsList } from '@/app/_libs/microcms';
import { format } from 'date-fns';

export default async function index() {
  const data = await getNewsList({ limit: 5 });
  return (
    <aside className={styles.sideBar}>
      <div className={styles.newArticle}>
        <h2 className={styles.heading2}>新着記事</h2>
        <div className={styles.boxes}>
          {data.contents.length > 0 ? (
            data.contents.map((item) => (
              <article key={item.id} className={styles.box}>
                <Link className={styles.boxInner} href={`/news/${item.id}`}>
                  <div className={styles.body}>
                    <h3 className={styles.heading3}>{item.title}</h3>
                    <div className={styles.head}>
                      <p className={styles.category}>
                        {item.category?.name || '未分類'}
                      </p>
                      <time
                        dateTime={item.publishedAt || ''}
                        className={styles.date}
                      >
                        {item.publishedAt
                          ? format(new Date(item.publishedAt), 'yyyy.MM.dd')
                          : '日付なし'}
                      </time>
                    </div>
                  </div>
                  <div className={styles.imageWrap}>
                    <Image
                      className={styles.image}
                      src={item.image?.url || '/img/index/news/news_dummy.png'}
                      width={100}
                      height={100}
                      alt={item.title}
                    />
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <p>新着記事はありません。</p>
          )}
        </div>
      </div>
    </aside>
  );
}
