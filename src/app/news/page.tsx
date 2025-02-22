import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

import SideBarNewArticle from '@/app/components/layouts/Sidebar/NewArticle';
import SideBarCategoryList from '@/app/components/layouts/Sidebar/CategoryList';
import Pagination from '@/app/components/layouts/Pagination';

import { getNewsList } from '@/app/_libs/microcms';
import { format } from 'date-fns';
import { NEWS_LIST_LIMIT } from '@/app/_contents';

export default async function Page() {
  // ✅ `totalCount` を取得
  const { contents: news, totalCount = 0 } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  const breadcrumbItems = [{ text: 'ホーム', href: '/' }, { text: 'ニュース' }];

  return (
    <main>
      <FvSub
        titleEn="NEWS"
        titleJa="ニュース"
        imagePc="/img/index/fv/fv_news.png"
        imageSp="/img/index/fv/fv_news-sp.png"
        alt="serviceImage"
      />
      <Breadcrumb items={breadcrumbItems} />
      <div className={clsx(styles.wrapper, 'innerXl')}>
        <section className={styles.news}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h2 className={styles.heading2}>カテゴリ</h2>
              <div className={styles.boxes}>
                {news.length > 0 ? (
                  news.map((item) => (
                    <article key={item.id} className={styles.box}>
                      <Link
                        href={`/news/${item.id}`}
                        className={styles.boxInner}
                      >
                        <div className={styles.body}>
                          <h3 className={styles.heading3}>{item.title}</h3>
                          <div className={styles.head}>
                            <div className={styles.categoryWrap}>
                              <p className={styles.category}>
                                {item.category?.name || '未分類'}
                              </p>
                            </div>
                            <time
                              dateTime={item.publishedAt || ''}
                              className={styles.date}
                            >
                              {item.publishedAt
                                ? format(
                                    new Date(item.publishedAt),
                                    'yyyy.MM.dd'
                                  )
                                : '日付なし'}
                            </time>
                          </div>
                        </div>
                        <div className={styles.imageWrap}>
                          <Image
                            className={styles.image}
                            src={
                              item.image?.url ||
                              '/img/index/news/news_dummy.png'
                            }
                            width={250}
                            height={156}
                            alt={item.title}
                          />
                        </div>
                      </Link>
                    </article>
                  ))
                ) : (
                  <p>ニュース記事がありません。</p>
                )}
              </div>
            </div>
            <Pagination totalCount={totalCount} />
          </div>
        </section>
        <div className={styles.sideBArWrap}>
          <SideBarNewArticle />
          <SideBarCategoryList />
        </div>
      </div>
      <Cta />
    </main>
  );
}
