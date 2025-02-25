// components/layouts/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import clsx from 'clsx';

import { navItems, headerButtons } from '@/app/components/elements/Nav/data';
import DrawerButton from '@/app/components/elements/Button/DrawerButton';
import DrawerMenu from '@/app/components/layouts/DrawerMenu';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ハンバーガーメニューの開閉を制御
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // メニュー開閉時にスクロールを制御
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1 className={styles.heading1}>
            <Link href="/" className={styles.heading1Link}>
              {title}
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
            <div className={styles.drawerButtonWrap}>
              <DrawerButton isOpen={isMenuOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>
      </header>
      <DrawerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}
