'use client';

import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Top() {
  return (
    <div className={styles.fvTop}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <hgroup className={styles.head}>
            <h2 className={styles.heading2}>
              <span className={styles.top}>YOU CAN CHANGE</span>
              <span className={styles.bottom}>THE WORLD</span>
              <span className={styles.topSp}>YOU CAN</span>
              <span className={styles.MiddleSp}>CHANGE</span>
              <span className={styles.bottomSp}>THE WORLD</span>
            </h2>
            <p className={styles.text}>
              世界で活躍できるグローバルな人材を育てる
            </p>
          </hgroup>
        </div>
        <div className={styles.slider}>
          <Splide
            options={{
              perMove: 1, // 1度で何枚のスライドを移動するか指定
              type: 'loop', // デフォルトはスライド（slide）
              // autoplay: true, // 自動再生
              interval: 3000, // 自動再生の間隔
              speed: 1000, // スライダーの移動時間
              rewind: true, // スライダーの終わりまで行ったら先頭に巻き戻す（デフォルトはfalse）
              pauseOnHover: false, // カーソルが乗ってもスクロールを停止させない
              pauseOnFocus: false, // 矢印をクリックしてもスクロールを停止させない
              focus: 'center', // 中央のスライドを表示
              arrows: false, //ページネーションを削除
            }}
          >
            <SplideSlide>
              <picture>
                <source
                  media="(max-width: 599px)"
                  srcSet="/img/index/fv/fv_top-sp01.png"
                />
                <Image
                  className={styles.image}
                  src={'/img/index/fv/fv_top01.png'}
                  width={1190}
                  height={700}
                  alt=""
                />
              </picture>
            </SplideSlide>
            <SplideSlide>
              <picture>
                <source
                  media="(max-width: 599px)"
                  srcSet="/img/index/fv/fv_top-sp02.png"
                />
                <Image
                  className={styles.image}
                  src={'/img/index/fv/fv_top02.png'}
                  width={1190}
                  height={700}
                  alt=""
                />
              </picture>
            </SplideSlide>
            <SplideSlide>
              <picture>
                <source
                  media="(max-width: 599px)"
                  srcSet="/img/index/fv/fv_top-sp03.png"
                />
                <Image
                  className={styles.image}
                  src={'/img/index/fv/fv_top03.png'}
                  width={1190}
                  height={700}
                  alt=""
                />
              </picture>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}
