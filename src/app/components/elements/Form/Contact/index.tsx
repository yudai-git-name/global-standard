import React from 'react'
import styles from './index.module.css';
import Link from 'next/link';

export default function index() {
	return (
    <div className={styles.form}>
      <form action="">
        <div className={styles.field}>
          <div className={styles.formField}>
            <div className={styles.formFieldHead}>
              <label id={styles.yourCompany} className={styles.label}>
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
              <label id={styles.yourFurigana} className={styles.label}>
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
              <label id={styles.yourTel} className={styles.label}>
                電話番号
              </label>
              <span className={styles.tag}>必須</span>
            </div>
            <div className={styles.formFieldItem}>
              <input
                type="text"
                id={styles.yourTel}
                className={styles.formText}
                placeholder="例）0312345678"
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
        <div className={styles.field}>
          <div className={styles.formField}>
            <div className={styles.formFieldHead}>
              <label id={styles.yourRequest} className={styles.label}>
                ご用件
              </label>
              <span className={styles.tag}>必須</span>
            </div>
            <div className={styles.formFieldItem}>
              <input
                type="text"
                id={styles.yourRequest}
                className={styles.formText}
                placeholder="ご選択ください"
              />
            </div>
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.formField}>
            <div className={styles.formFieldHead}>
              <label id={styles.yourMessage} className={styles.label}>
                ご用件の詳細
              </label>
              <span className={styles.tag}>必須</span>
            </div>
            <div className={styles.formFieldItem}>
              <textarea
                className={styles.formTextArea}
                name="yourMessage"
                id=""
                placeholder="ご自由にご記入ください。"
              ></textarea>
            </div>
          </div>
        </div>
        <div className={styles.privacy}>
          <label className={styles.formCheckbox} htmlFor="privacyCheck">
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
          <input type="submit" value="送　信" className={styles.button} />
        </div>
      </form>
    </div>
  );
}
