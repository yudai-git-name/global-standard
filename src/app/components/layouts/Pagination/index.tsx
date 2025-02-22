import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import { NEWS_LIST_LIMIT } from '@/app/_contents';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string; // ✅ `basePath` をオプションに変更
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = '/news',
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        {pages.map((p) => (
          <li key={p} className={styles.item}>
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} className={styles.link}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
