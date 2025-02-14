import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

import SideBarNewArticle from '@/app/components/layouts/Sidebar/NewArticle';
import SideBarCategoryList from '@/app/components/layouts/Sidebar/CategoryList';

const Page = () => {
  const breadcrumbItems = [
    { text: 'ホーム', href: '/' },
    { text: 'ニュース', href: '/news' },
    { text: 'ニュース詳細' },
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
              <h1 className={styles.heading1}>
                常にハイパフォーマンスを目指すグローバルビジネスの現場を肌で感じることで、自走・自立できる思考力・適応力を醸成する起爆剤研修。
              </h1>
              <div className={styles.categoryWrap}>
                <p className={styles.category}>カテゴリ</p>
                <time dateTime="2021.01.01" className={styles.date}>
                  2021.01.01
                </time>
              </div>
            </div>
            <div className={styles.imageWrap}>
              <Image
                className={styles.image}
                src={'/img/index/news/news_detail-image.png'}
                width={760}
                height={475}
                alt=""
              />
            </div>
            <div className={styles.body}>
              <div className={styles.heading2Area}>
                <h2 className={styles.heading2AreaTitle}>
                  H2見出しH2見出しH2見出し
                </h2>
                <div className={styles.textWrap}>
                  <p className={styles.text}>
                    ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。今後の目標はプロジェクトマネジメントに特化したマネージャーになることです。ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。今後の目標はプロジェクトマネジメントに特化したマネージャーになることです。
                  </p>
                </div>
              </div>
              <div className={styles.heading3Area}>
                <h2 className={styles.heading3AreaTitle}>
                  H3見出しH3見出しH3見出し
                </h2>
                <div className={styles.textWrap}>
                  <p className={styles.text}>
                    ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。今後の目標はプロジェクトマネジメントに特化したマネージャーになることです。ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。今後の目標はプロジェクトマネジメントに特化したマネージャーになることです。
                  </p>
                </div>
              </div>
              <div className={styles.heading4Area}>
                <h2 className={styles.heading4AreaTitle}>
                  H4見出しH4見出しH4見出し
                </h2>
                <div className={styles.textWrap}>
                  <p className={styles.text}>
                    ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。今後の目標はプロジェクトマネジメントに特化したマネージャーになることです。ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。今後の目標はプロジェクトマネジメントに特化したマネージャーになることです。
                  </p>
                </div>
              </div>
              <ul className={styles.list}>
                <li className={styles.listItem}>・リスト</li>
                <li className={styles.listItem}>・リスト</li>
                <li className={styles.listItem}>・リスト</li>
              </ul>
              <blockquote className={styles.blockquote}>
                引用した文章が入ります。ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。今後の目標はプロジェクトマネジメントに特化したマネージャーになることです。ビジネスパーソンとの交流の中で、より具体的に現地で働く人々の仕事に対する熱意や誇り、それぞれが持つリーダーシップなどを学ぶことができ非常に良い経験となりました。
              </blockquote>
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttonWrap}>
                <Link href={'/'} className={styles.button}>
                  ＜前の記事へ
                </Link>
              </div>
              <div className={styles.buttonWrap}>
                <Link href={'/'} className={styles.button}>
                  次の記事へ＞
                </Link>
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
};

export default Page;
