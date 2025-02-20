import React from 'react';
import styles from '@/app/news/category/[id]/index.module.css';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';
import { getNewsList } from '@/app/_libs/microcms';

export default async function SideBarCategoryList() {
  const data = await getNewsList();

  // ✅ カテゴリーを一意にする
  const uniqueCategories = Array.from(
    new Map(
      data.contents
        .filter((item) => item.category) // カテゴリが存在する記事のみ対象
        .map((item) => [item.category.id, item.category]) // [id, category] のペアを作成
    ).values() // 一意なカテゴリのみ取得
  );

  return (
    <div className={styles.categoryList}>
      <div className={styles.inner}>
        <h2 className={styles.heading2}>カテゴリ</h2>
        <ul className={styles.items}>
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map((category) => (
              <li key={category.id} className={styles.item}>
                <Link
                  href={`/news/category/${category.id}`}
                  className={styles.link}
                >
                  <h3 className={styles.heading3}>
                    {category.name || '未分類'}
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
