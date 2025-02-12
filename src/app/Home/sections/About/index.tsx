import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Image from 'next/image';

import TopSectionTitle from '@/app/components/elements/Title/TopSection';
import TopSectionButton from '@/app/components/elements/Button/TopSection';

export default function index() {
  return (
    <section className={styles.about}>
      <div className={clsx(styles.inner, 'innerXl')}>
        <div className={styles.head}>
          <TopSectionTitle titleEn="ABOUT US" titleJa="当社について" />
          <div className={styles.buttonWrap}>
            <TopSectionButton href="/about" variant='primary' />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.body}>
            <p className={styles.text}>
              急速に広がったグローバル社会に対応できる人材を育成することで、文化・言語の垣根を越えたコミュニケーションを活発にし、一人でも多くの人が豊かに暮らせる世界を実現することを使命とする。
            </p>
            <p className={styles.text}>
              コミュニケーションスキル習得をサポートすることで一人でも多くのビジネスパーソンの視野を広げ、世界を舞台に新しい相乗効果を生む未来を創造する。
            </p>
            <p className={styles.text}>
              文化の垣根を越えた人と人とのつながりが新しい価値を生むことを信念とする。
            </p>
          </div>
          <div className={styles.imageWrap}>
            <Image
              src={'/img/index/about/about_top.png'}
              width={681}
              height={426}
              alt="aboutImage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
