import React from 'react';
import styles from '@/app/news/sections/News/index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import SideBarNewArticle from '@/app/components/layouts/Sidebar/NewArticle';
import SideBarCategoryList from '@/app/components/layouts/Sidebar/CategoryList';

import { getNewsList } from '@/app/_libs/microcms';
import { format } from 'date-fns';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  // ✅ 選択されたカテゴリーIDを取得
  const categoryId = params.id;

  // ✅ MicroCMS API から該当カテゴリの記事を取得
  const data = await getNewsList({ filters: `category[equals]${categoryId}` });

  const breadcrumbItems = [
    { text: 'ホーム', href: '/' },
    { text: 'ニュース', href: '/news' },
    { text: `カテゴリ: ${categoryId}` },
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
              <h2 className={styles.heading2}>カテゴリ別ニュース</h2>
              <div className={styles.boxes}>
                {data.contents.length > 0 ? (
                  data.contents.map((item) => (
                    <article key={item.id} className={styles.box}>
                      <Link
                        className={styles.boxInner}
                        href={`/news/${item.id}`}
                      >
                        <div className={styles.body}>
                          <h3 className={styles.heading3}>{item.title}</h3>
                          <div className={styles.head}>
                            <div className={styles.categoryWrap}>
                              <p className={styles.category}>{item.category}</p>
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
