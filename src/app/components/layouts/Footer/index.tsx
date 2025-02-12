import { useMetadata } from '@/app/layout';
import React from 'react';
import styles from './index.module.css';

export default function Footer() {
  const { title } = useMetadata();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.title}>{String(title)}</p>
          <p className={styles.address}>
            〒550-1000　大阪市西区土佐堀9-5-5
            <br />
            TEL　06-123-4567
            <br />
            FAX　06-123-4568
          </p>
          <p className={styles.copyRight}>
            &copy;2021 Global Standard. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
