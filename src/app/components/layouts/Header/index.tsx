import { useMetadata } from '@/app/layout';
import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import clsx from 'clsx';

import { navItems, headerButtons } from '@/app/components/elements/Nav/data';

export default function Header() {
  const { title } = useMetadata();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.heading1}>
          <Link href={'/'} className={styles.heading1Link}>
            {String(title)}
          </Link>
        </h1>
        <div className={styles.wrap}>
          <nav className={styles.nav}>
            <ul className={styles.items}>
              {navItems.map((item, index) => (
                <li key={index} className={styles.item}>
                  <Link href={item.href} className={styles.itemLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.buttons}>
              {headerButtons.map((buttonItem, buttonIndex) => (
                <div key={buttonIndex} className={styles.buttonWrap}>
                  <Link
                    href={buttonItem.href}
                    className={clsx(
                      styles.button,
                      buttonItem.type === 'contact' && styles.contact,
                      buttonItem.type === 'download' && styles.download
                    )}
                  >
                    {buttonItem.label}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
