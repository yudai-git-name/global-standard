// import React from 'react';
// import styles from './index.module.css';
// import Link from 'next/link';
// import clsx from 'clsx';

// export default function index() {
//   return (
//     <div className={styles.form}>
//       <form action="">
//         <div className={styles.field}>
//           <div className={styles.formField}>
//             <div className={styles.formFieldHead}>
//               <label className={styles.label} htmlFor="yourCompany">
//                 会社名
//               </label>
//             </div>
//             <div className={styles.formFieldItem}>
//               <input
//                 type="text"
//                 className={styles.formText}
//                 id="yourCompany"
//                 name="yourCompany"
//                 placeholder="例）○○株式会社"
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.field}>
//           <div className={styles.formField}>
//             <div className={styles.formFieldHead}>
//               <label className={styles.label} htmlFor="yourName">
//                 お名前
//               </label>
//               <span className={styles.tag}>必須</span>
//             </div>
//             <div className={styles.formFieldItem}>
//               <input
//                 className={styles.formText}
//                 type="text"
//                 id="yourName"
//                 name="yourName"
//                 placeholder="例）鈴木　一郎"
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.field}>
//           <div className={styles.formField}>
//             <div className={styles.formFieldHead}>
//               <label className={styles.label} htmlFor="yourFurigana">
//                 お名前（フリガナ）
//               </label>
//               <span className={styles.tag}>必須</span>
//             </div>
//             <div className={styles.formFieldItem}>
//               <input
//                 className={styles.formText}
//                 type="text"
//                 id="yourFurigana"
//                 name="yourFurigana"
//                 placeholder="例）スズキ　イチロウ"
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.field}>
//           <div className={styles.formField}>
//             <div className={styles.formFieldHead}>
//               <label className={styles.label} htmlFor="yourTel">
//                 電話番号
//               </label>
//               <span className={styles.tag}>必須</span>
//             </div>
//             <div className={styles.formFieldItem}>
//               <input
//                 type="text"
//                 className={styles.formText}
//                 id="yourTel"
//                 name="yourTel"
//                 placeholder="例）0312345678"
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.field}>
//           <div className={styles.formField}>
//             <div className={styles.formFieldHead}>
//               <label className={styles.label} htmlFor="yourEmail">
//                 メールアドレス
//               </label>
//               <span className={styles.tag}>必須</span>
//             </div>
//             <div className={styles.formFieldItem}>
//               <input
//                 type="email"
//                 className={styles.formText}
//                 id="yourEmail"
//                 name="yourEmail"
//                 placeholder="例）info@example.com"
//               />
//             </div>
//           </div>
//         </div>
//         <div className={styles.field}>
//           <div className={styles.formField}>
//             <div className={styles.formFieldHead}>
//               <label className={styles.label} htmlFor="yourRequest">
//                 ご用件
//               </label>
//               <span className={styles.tag}>必須</span>
//             </div>
//             <div
//               className={clsx(styles.formFieldItem, styles.formFieldItemSelect)}
//             >
//               <select
//                 className={styles.formSelect}
//                 id="yourRequest"
//                 name="yourRequest"
//               >
//                 <option value="">ご選択ください</option>
//                 <option value="">10代</option>
//                 <option value="">20代</option>
//                 <option value="">30代</option>
//                 <option value="">40代</option>
//                 <option value="">50代</option>
//                 <option value="">60代</option>
//                 <option value="">70代</option>
//                 <option value="">80代</option>
//               </select>
//             </div>
//           </div>
//         </div>
//         <div className={styles.field}>
//           <div className={styles.formField}>
//             <div className={styles.formFieldHead}>
//               <label className={styles.label} htmlFor="yourMessage">
//                 ご用件の詳細
//               </label>
//               <span className={styles.tag}>必須</span>
//             </div>
//             <div className={styles.formFieldItem}>
//               <textarea
//                 className={styles.formTextArea}
//                 id="yourMessage"
//                 name="yourMessage"
//                 placeholder="ご自由にご記入ください。"
//               ></textarea>
//             </div>
//           </div>
//         </div>
//         <div className={styles.privacy}>
//           <label className={styles.formCheckbox} htmlFor="yourPrivacyCheck">
//             <input
//               className={styles.formCheckboxInput}
//               type="checkbox"
//               id="yourPrivacyCheck"
//               name="yourPrivacyCheck"
//             />
//             <span className={styles.formCheckboxText}>
//               <Link href={'/'} className={styles.link}>
//                 個人情報保護方針
//               </Link>
//               に同意します。
//             </span>
//           </label>
//         </div>
//         <div className={styles.buttonWrap}>
					
//           <input type="submit" value="送　信" className={styles.button} />
//         </div>
//       </form>
//     </div>
//   );
// }
