import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import clsx from 'clsx';

type Props = {
  href: string;
  variant?: 'primary' | 'secondary';
};

export default function TopSectionButton({ href, variant = 'primary' }: Props) {
  return (
    <>
      <Link href={href} className={clsx(styles.button, styles[variant])}>
        View more
      </Link>
    </>
  );
}
