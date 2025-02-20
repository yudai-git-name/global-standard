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

import { getNewsList } from '@/app/_libs/microcms';
import { format } from 'date-fns';

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  // ✅ `params.id` でカテゴリのIDを取得
  const categoryId = decodeURIComponent(params.id); // 日本語カテゴリ名の場合はデコード

  // ✅ MicroCMS API から該当カテゴリの記事を取得
  const { contents: news } = await getNewsList({
    filters: `category[equals]${categoryId}`,
  });

  // ✅ カテゴリ名を取得 (ニュースの最初の要素から取得)
  const categoryName =
    news.length > 0 ? news[0].category.name : '不明なカテゴリ';

  const breadcrumbItems = [
    { text: 'ホーム', href: '/' },
    { text: 'ニュース', href: '/news' },
    { text: `${categoryName} のニュース` },
  ];

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
              <h2 className={styles.heading2}>{categoryName}の一覧</h2>
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
                                {item.category.name}
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
                            src={
                              item.image?.url ||
                              '/img/index/news/news_dummy.png'
                            }
                            className={styles.image}
                            width={250}
                            height={156}
                            alt={item.title}
                          />
                        </div>
                      </Link>
                    </article>
                  ))
                ) : (
                  <p>このカテゴリにはニュース記事がありません。</p>
                )}
              </div>
            </div>
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
