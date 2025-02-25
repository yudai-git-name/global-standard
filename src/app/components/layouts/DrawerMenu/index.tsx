// components/layouts/DrawerMenu.tsx
'use client';

import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import clsx from 'clsx';

import { navItems, headerButtons } from '@/app/components/elements/Nav/data';

type MenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function DrawerMenu({ isOpen, toggleMenu }: MenuProps) {
  return (
    <div className={clsx(styles.drawerMenu, { [styles.open]: isOpen })}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.item}>
                <Link
                  href={item.href}
                  className={styles.itemLink}
                  onClick={toggleMenu}
                >
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
                  onClick={toggleMenu}
                >
                  {buttonItem.label}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
