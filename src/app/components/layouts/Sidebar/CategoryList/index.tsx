import React from 'react';
import styles from '@/app/news/category/[id]/index.module.css';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';
import { getCategoryList } from '@/app/_libs/microcms'; // ✅ MicroCMS からカテゴリーデータを取得

export default async function SideBarCategoryList() {
  // ✅ MicroCMS からカテゴリーデータを取得
  const data = await getCategoryList();

  return (
    <div className={styles.categoryList}>
      <div className={styles.inner}>
        <h2 className={styles.heading2}>カテゴリ</h2>
        <ul className={styles.items}>
          {data.contents.length > 0 ? (
            data.contents.map((item) => (
              <li key={item.id} className={styles.item}>
                <Link href={`/news/category/${item.id}`} className={styles.link}>
                  <h3 className={styles.heading3}>
                    {item.category} {/* ✅ カテゴリー名を表示 */}
                    <IoIosArrowForward className={styles.icon} />
                  </h3>
                </Link>
              </li>
            ))
          ) : (
            <p>カテゴリーがありません。</p>
          )}
        </ul>
      </div>
    </div>
  );
}
