import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

import { CompanyItems } from './data';

export default function index() {
  return (
    <section className={styles.company}>
      <div className={styles.inner}>
        <div className={clsx(styles.content, 'innerL')}>
          <h2 className={styles.heading3}>会社概要</h2>
          <dl className={styles.list}>
            {CompanyItems.map((item, index) => (
              <div key={index} className={styles.row}>
                <dt className={styles.dt}>{item.dt}</dt>
                <dt className={styles.dd}>
                  {' '}
                  {item.dd.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
