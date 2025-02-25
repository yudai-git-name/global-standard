// components/elements/Button/DrawerButton.tsx
import React from 'react';
import styles from './index.module.css';

type DrawerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function DrawerButton({ isOpen, onClick }: DrawerButtonProps) {
  return (
    <button
      className={`${styles.drawerButton} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label="メニューを開く"
      aria-expanded={isOpen}
    >
      <span className={styles.drawerButtonBar}></span>
    </button>
  );
}
