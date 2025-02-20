import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Cta from '@/app/components/layouts/Cta';

export default function page() {
  const breadcrumbItems = [
    { text: 'ホーム', href: '/' },
    { text: '資料ダウンロード' },
  ];
  return (
    <main>
      <FvSub
        titleEn="DOWNLOAD"
        titleJa="資料ダウンロード"
        imagePc="/img/index/fv/fv_download-pc.png"
        imageSp="/img/index/fv/fv_download-sp.png"
        alt="downloadImage"
      />
      <Breadcrumb items={breadcrumbItems} />
      <section className={styles.download}>
        <div className={clsx(styles.inner, 'innerXl')}>
          <div className={styles.content}>
            <div className={styles.body}>
              <h2 className={styles.heading2}>
                世界で活躍できるグローバルな人材を育てる３つの研修プログラムをご用意しております。
              </h2>
              <div className={styles.textWrap}>
                <p className={styles.text}>
                  急速にグローバルに活躍できる企業が生き残る時代と移り変わりました。
                  <br />
                  ビジネス英語や経営学を効率よく学びながら、世界各国から集まるビジネスパーソンと交流し、世界レベルでの人脈を構築する研修をご用意しております。
                </p>
                <p className={styles.text}>
                  英語に苦手意識のある方でもご安心ください。
                  <br />
                  ビジネスで必要なコミュニケーションが取れるようになるまで実績豊富な講師陣がサポートいたします。
                  <br />
                  まずはこちらの資料をごらんください。
                </p>
              </div>
              <div className={styles.imageWrap}>
                <Image
                  src={'/img/index/download/download_pamphlet.png'}
                  className={styles.image}
                  width={275}
                  height={389}
                  alt="資料画像"
                />
              </div>
            </div>
            <div className={styles.formBox}>
              <div className={styles.form}>
                <h3 className={styles.heading3}>資料ダウンロード</h3>
                <div className={styles.formItems}>
                  <form action="">
                    <div className={styles.field}>
                      <div className={styles.formField}>
                        <div className={styles.formFieldHead}>
                          <label
                            id={styles.yourCompany}
                            className={styles.label}
                          >
                            会社名
                          </label>
                        </div>
                        <div className={styles.formFieldItem}>
                          <input
                            type="text"
                            id={styles.yourCompany}
                            className={styles.formText}
                            placeholder="例）○○株式会社"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <div className={styles.formField}>
                        <div className={styles.formFieldHead}>
                          <label
                            id={styles.yourDepartment}
                            className={styles.label}
                          >
                            部署
                          </label>
                        </div>
                        <div className={styles.formFieldItem}>
                          <input
                            type="text"
                            id={styles.yourDepartment}
                            className={styles.formText}
                            placeholder="例）人事部"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <div className={styles.formField}>
                        <div className={styles.formFieldHead}>
                          <label id={styles.yourName} className={styles.label}>
                            お名前
                          </label>
                          <span className={styles.tag}>必須</span>
                        </div>
                        <div className={styles.formFieldItem}>
                          <input
                            type="text"
                            id={styles.yourName}
                            className={styles.formText}
                            placeholder="例）鈴木　一郎"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <div className={styles.formField}>
                        <div className={styles.formFieldHead}>
                          <label
                            id={styles.yourFurigana}
                            className={styles.label}
                          >
                            お名前（フリガナ）
                          </label>
                          <span className={styles.tag}>必須</span>
                        </div>
                        <div className={styles.formFieldItem}>
                          <input
                            type="text"
                            id={styles.yourFurigana}
                            className={styles.formText}
                            placeholder="例）スズキ　イチロウ"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.field}>
                      <div className={styles.formField}>
                        <div className={styles.formFieldHead}>
                          <label id={styles.yourEmail} className={styles.label}>
                            メールアドレス
                          </label>
                          <span className={styles.tag}>必須</span>
                        </div>
                        <div className={styles.formFieldItem}>
                          <input
                            type="email"
                            id={styles.yourEmail}
                            className={styles.formText}
                            placeholder="例）info@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.privacy}>
                      <label
                        className={styles.formCheckbox}
                        htmlFor="privacyCheck"
                      >
                        <input
                          type="checkbox"
                          className={styles.formCheckboxInput}
                          id="privacyCheck"
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
                      <input
                        type="submit"
                        value="資料をダウンロードする"
                        className={styles.button}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
}
