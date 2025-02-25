'use client';

import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Link from 'next/link';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

// import FormContact from '@/app/components/elements/Form/Contact';

import { createContactData } from '@/app/_actions/contact';
import { useFormState } from 'react-dom';

const initialState = {
  status: '',
  message: '',
};

export default function Page() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);
  if (state.status === 'success') {
    return (
      <main>
        <FvSub
          titleEn="CONTACT"
          titleJa="お問い合わせ"
          imagePc="/img/index/fv/fv_contact-pc.png"
          imageSp="/img/index/fv/fv_contact-sp.png"
          alt="downloadImage"
        />
        <div className={styles.success}>
          <p className={styles.successText}>
            お問い合わせありがとうございます。
            <br />
            2以内に担当者からメールにてご連絡いたしますので、しばらくお待ちいただけると幸いです。
          </p>
          <Link href={'/'} className={styles.successLink}>
            トップへ戻る
          </Link>
        </div>
        <Cta />
      </main>
    );
  }
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
            <div className={styles.form}>
              <form action={formAction}>
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.label} htmlFor="yourCompany">
                        会社名
                      </label>
                    </div>
                    <div className={styles.formFieldItem}>
                      <input
                        type="text"
                        className={styles.formText}
                        id="yourCompany"
                        name="yourCompany"
                        placeholder="例）○○株式会社"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.label} htmlFor="yourName">
                        お名前
                      </label>
                      <span className={styles.tag}>必須</span>
                    </div>
                    <div className={styles.formFieldItem}>
                      <input
                        className={styles.formText}
                        type="text"
                        id="yourName"
                        name="yourName"
                        placeholder="例）鈴木　一郎"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.label} htmlFor="yourFurigana">
                        お名前（フリガナ）
                      </label>
                      <span className={styles.tag}>必須</span>
                    </div>
                    <div className={styles.formFieldItem}>
                      <input
                        className={styles.formText}
                        type="text"
                        id="yourFurigana"
                        name="yourFurigana"
                        placeholder="例）スズキ　イチロウ"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.label} htmlFor="yourTel">
                        電話番号
                      </label>
                      <span className={styles.tag}>必須</span>
                    </div>
                    <div className={styles.formFieldItem}>
                      <input
                        type="text"
                        className={styles.formText}
                        id="yourTel"
                        name="yourTel"
                        placeholder="例）0312345678"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.label} htmlFor="yourEmail">
                        メールアドレス
                      </label>
                      <span className={styles.tag}>必須</span>
                    </div>
                    <div className={styles.formFieldItem}>
                      <input
                        type="email"
                        className={styles.formText}
                        id="yourEmail"
                        name="yourEmail"
                        placeholder="例）info@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.label} htmlFor="yourRequest">
                        ご用件
                      </label>
                      <span className={styles.tag}>必須</span>
                    </div>
                    <div
                      className={clsx(
                        styles.formFieldItem,
                        styles.formFieldItemSelect
                      )}
                    >
                      <select
                        className={styles.formSelect}
                        id="yourRequest"
                        name="yourRequest"
                      >
                        <option value="">ご選択ください</option>
                        <option value="10代">10代</option>
                        <option value="20代">20代</option>
                        <option value="30代">30代</option>
                        <option value="40代">40代</option>
                        <option value="50代">50代</option>
                        <option value="60代">60代</option>
                        <option value="70代">70代</option>
                        <option value="80代">80代</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className={styles.field}>
                  <div className={styles.formField}>
                    <div className={styles.formFieldHead}>
                      <label className={styles.label} htmlFor="yourMessage">
                        ご用件の詳細
                      </label>
                      <span className={styles.tag}>必須</span>
                    </div>
                    <div className={styles.formFieldItem}>
                      <textarea
                        className={styles.formTextArea}
                        id="yourMessage"
                        name="yourMessage"
                        placeholder="ご自由にご記入ください。"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className={styles.privacy}>
                  <label
                    className={styles.formCheckbox}
                    htmlFor="yourPrivacyCheck"
                  >
                    <input
                      className={styles.formCheckboxInput}
                      type="checkbox"
                      id="yourPrivacyCheck"
                      name="yourPrivacyCheck"
                    />
                    <span className={styles.formCheckboxText}>
                      <Link href={'/'} className={styles.link}>
                        個人情報保護方針
                      </Link>
                      に同意します。
                    </span>
                  </label>
                </div>
                <div className={styles.buttonWrap}>
                  {state.status === 'error' && (
                    <p className={styles.error}>{state.message}</p>
                  )}
                  <input
                    type="submit"
                    value="送　信"
                    className={styles.button}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
