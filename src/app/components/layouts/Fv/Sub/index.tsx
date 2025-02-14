import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  titleEn: string;
  titleJa: string;
  imagePc: string;
	imageSp: string
  alt: string;
};

export default function FvSub({ titleEn, titleJa, imagePc, imageSp,  alt }: Props) {
  return (
    <div className={styles.fvSub}>
      <div className={styles.inner}>
        <div className={clsx(styles.content, 'innerL')}>
          <hgroup className={styles.heading2}>
            <h2 className={styles.titleEn}>{titleEn}</h2>
            <p className={styles.titleJa}>{titleJa}</p>
          </hgroup>
        </div>
        <div className={styles.imageWrap}>
          <picture>
            <source srcSet={imageSp} />
            <Image
              className={styles.image}
              src={imagePc}
              width={1280}
              height={250}
              alt={alt}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
