import React from 'react'
import styles from './index.module.css'
import clsx from 'clsx';

type Props = {
  titleEn: string;
  titleJa: string;
  variant?: 'primary' | 'secondary';
};

export default function TopSectionTitle({ titleEn, titleJa, variant = 'primary' }: Props) {
  return (
    <div className={styles.head}>
      <hgroup className={clsx(styles.heading2, styles[variant])}>
        <h2 className={styles.titleEn}>{titleEn}</h2>
        <p className={styles.titleJa}>{titleJa}</p>
      </hgroup>
    </div>
  );
}
