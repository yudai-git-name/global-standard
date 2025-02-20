import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import { format } from 'date-fns';

import { getNewsDetail } from '@/app/_libs/microcms'; // ✅ MicroCMS のデータ取得関数をインポート
import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

import SideBarNewArticle from '@/app/components/layouts/Sidebar/NewArticle';
import SideBarCategoryList from '@/app/components/layouts/Sidebar/CategoryList';

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params }: PageProps) {
  const data = await getNewsDetail(params.slug);

  const breadcrumbItems = [
    { text: 'ホーム', href: '/' },
    { text: 'ニュース', href: '/news' },
    { text: data.title },
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
      <div className={clsx(styles.newsDetail, 'innerXl')}>
        <article className={styles.newsDetailItem}>
          <div className={styles.inner}>
            <div className={styles.head}>
              <h1 className={styles.heading1}>{data.title}</h1>
              <div className={styles.categoryWrap}>
                <p className={styles.category}>
                  {data.category?.name || '未分類'}
                </p>
                <time dateTime={data.publishedAt || ''} className={styles.date}>
                  {data.publishedAt
                    ? format(new Date(data.publishedAt), 'yyyy.MM.dd')
                    : '日付なし'}
                </time>
              </div>
            </div>
            <div className={styles.imageWrap}>
              {data.image && (
                <Image
                  className={styles.image}
                  src={data.image?.url || '/img/index/news/news_dummy.png'}
                  width={760}
                  height={475}
                  alt={data.title}
                />
              )}
            </div>
            <div className={styles.body}>
              <div className={styles.heading2Area}>
                <h2 className={styles.heading2AreaTitle}>{data.heading2}</h2>
                <div className={styles.textWrap}>
                  <p className={styles.text}>{data.heading2Text}</p>
                </div>
              </div>
              <div className={styles.heading3Area}>
                <h2 className={styles.heading3AreaTitle}>{data.heading3}</h2>
                <div className={styles.textWrap}>
                  <p className={styles.text}>{data.heading3Text}</p>
                </div>
              </div>
              <div className={styles.heading4Area}>
                <h2 className={styles.heading4AreaTitle}>{data.heading4}</h2>
                <div className={styles.textWrap}>
                  <p className={styles.text}>{data.heading4Text}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className={styles.sideBar}>
          <SideBarNewArticle />
          <SideBarCategoryList />
        </div>
      </div>
      <Cta />
    </main>
  );
}
