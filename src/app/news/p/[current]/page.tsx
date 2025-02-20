import React from 'react';
import styles from '@/app/news/index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

import SideBarNewArticle from '@/app/components/layouts/Sidebar/NewArticle';
import SideBarCategoryList from '@/app/components/layouts/Sidebar/CategoryList';
import Pagenation from '@/app/components/layouts/Pagenation';

import { getNewsList } from '@/app/_libs/microcms';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { NEWS_LIST_LIMIT } from '@/app/_contents';

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10); // ✅ 10進数で整数変換

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

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
              <h2 className={styles.heading2}>ニュース一覧</h2>
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
            <Pagenation totalCount={totalCount} current={current} />

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
