import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

import FormContact from '@/app/components/elements/Form/Contact';

export default function page() {
  const breadcrumbItems = [
    { text: 'ホーム', href: '/' },
    { text: 'お問い合わせ' },
  ];
  return (
    <main>
      <FvSub
        titleEn="CONTACT"
        titleJa="お問い合わせ"
        imagePc="/img/index/fv/fv_contact-pc.png"
        imageSp="/img/index/fv/fv_contact-sp.png"
        alt="downloadImage"
      />
      <Breadcrumb items={breadcrumbItems} />
      <section className={styles.contact}>
        <div className={clsx(styles.inner, 'innerS')}>
          <div className={styles.head}>
            <h2 className={styles.heading2}>お問い合わせ</h2>
            <p className={styles.text}>
              研修のお申し込み、その他お問い合わせは、下記のフォームからお問い合わせ内容をご記入ください。
              <br />
              2日以内に担当者からメールにてご連絡いたします。
            </p>
          </div>
          <div className={styles.formBox}>
            <FormContact />
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
