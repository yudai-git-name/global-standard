import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Image from 'next/image';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

import FormDownload from '@/app/components/elements/Form/Download';

export default function page() {
  const breadcrumbItems = [
    { text: 'ホーム', href: '/' },
    { text: '資料ダウンロード' },
  ];
  return (
    <main>
      <FvSub
        titleEn="DOWNLOAD"
        titleJa="資料ダウンロード"
        imagePc="/img/index/fv/fv_download-pc.png"
        imageSp="/img/index/fv/fv_download-sp.png"
        alt="downloadImage"
      />
      <Breadcrumb items={breadcrumbItems} />
      <section className={styles.download}>
        <div className={clsx(styles.inner, 'innerXl')}>
          <div className={styles.content}>
            <div className={styles.body}>
              <h2 className={styles.heading2}>
                世界で活躍できるグローバルな人材を育てる３つの研修プログラムをご用意しております。
              </h2>
              <div className={styles.textWrap}>
                <p className={styles.text}>
                  急速にグローバルに活躍できる企業が生き残る時代と移り変わりました。
                  <br />
                  ビジネス英語や経営学を効率よく学びながら、世界各国から集まるビジネスパーソンと交流し、世界レベルでの人脈を構築する研修をご用意しております。
                </p>
                <p className={styles.text}>
                  英語に苦手意識のある方でもご安心ください。
                  <br />
                  ビジネスで必要なコミュニケーションが取れるようになるまで実績豊富な講師陣がサポートいたします。
                  <br />
                  まずはこちらの資料をごらんください。
                </p>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  src={'/img/index/download/download_pamphlet.png'}
                  className={styles.image}
                  width={275}
                  height={389}
                  alt="資料画像"
                />
              </div>
            </div>
            <div className={styles.formBox}>
              <FormDownload />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
