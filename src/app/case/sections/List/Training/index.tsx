import React from 'react';
import styles from '../../index.module.css';
import Image from 'next/image';

import { IoMdCheckboxOutline } from 'react-icons/io';
import {caseTrainingItems} from './data'

export default function index() {
  return (
    <>
      <div className={styles.box}>
        <hgroup className={styles.heading2}>
          <h2 className={styles.heading2Ja}>ビジネス英語研修</h2>
          <p className={styles.heading2En}>Business English Training</p>
        </hgroup>
        <div className={styles.cards}>
          {caseTrainingItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHead}>
                <div className={styles.cardHeadInner}>
                  <p className={styles.business}>{item.business}</p>
                  <h3 className={styles.company}>
                    {item.company}
                    <small className={styles.small}>様</small>
                  </h3>
                </div>
                <div className={styles.logo}>
                  <Image
                    className={styles.image}
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                  />
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.bodyHead}>
                  <dl className={styles.bodyHeadRow}>
                    <dt className={styles.bodyHeadTitle}>研修コース：</dt>
                    <dd className={styles.bodyHeadCategory}>{item.category}</dd>
                  </dl>
                </div>
                <div className={styles.bodyDetail}>
                  <dl className={styles.bodyDetailRow}>
                    <dt className={styles.bodyDetailTitle}>
                      <IoMdCheckboxOutline className={styles.icon} />
                      研修の目的
                    </dt>
                    <dd className={styles.bodyDetailText}>
                      {item.Detail.PurposeOfTraining}
                    </dd>
                  </dl>
                  <dl className={styles.bodyDetailRow}>
                    <dt className={styles.bodyDetailTitle}>
                      <IoMdCheckboxOutline className={styles.icon} />
                      選んだ理由
                    </dt>
                    <dd className={styles.bodyDetailText}>
                      {item.Detail.ReasonForChoosing}
                    </dd>
                  </dl>
                  <dl className={styles.bodyDetailRow}>
                    <dt className={styles.bodyDetailTitle}>
                      <IoMdCheckboxOutline className={styles.icon} />
                      導入後の成果・効果
                    </dt>
                    <dd className={styles.bodyDetailText}>
                      {item.Detail.ResultsAfterImplementation}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
