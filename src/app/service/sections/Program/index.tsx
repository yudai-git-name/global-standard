import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

import { ProgramItems } from './data';


export default function index() {
  return (
    <section className={styles.program}>
      <div className={clsx(styles.inner, 'innerXl')}>
        <div className={styles.heading2}>
          <h2 className={styles.heading2Title}>
            <span className={styles.heading2titleTop}>世界で活躍できる</span>
            <span className={styles.heading2titleMiddle}>
              グローバルな人材を育てる
            </span>
            <span className={styles.heading2titleBottom}>
              ３つの研修プログラム
            </span>
          </h2>
        </div>
        <div className={styles.content}>
          <div className={styles.boxes}>
            {ProgramItems.map((item, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.body}>
                  <p className={styles.number}>{item.number}</p>
                  <div className={styles.head}>
                    <hgroup className={styles.heading3}>
                      <h3 className={styles.titleJa}>{item.titleJa}</h3>
                      <p className={styles.titleEn}>{item.titleEn}</p>
                    </hgroup>
                  </div>
                  <div className={styles.textWrap}>
                    <p className={styles.text}>{item.text01}</p>
                    <p className={styles.text}>{item.text02}</p>
                  </div>
                  <dl className={styles.list}>
                    <div className={styles.row}>
                      <dt className={styles.dt}>対象</dt>
                      <dd className={styles.dd}>{item.subject}</dd>
                    </div>
                    <div className={styles.row}>
                      <dt className={styles.dt}>費用</dt>
                      <dd className={styles.dd}>時間内容要相談</dd>
                    </div>
                  </dl>
                  <div className={styles.buttonWrap}>
                    <Link className={styles.button} href={'/'}>
                      お申し込みはこちら
                      <FaArrowRightLong className={styles.icon} />
                    </Link>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
