import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Script from 'next/script';
import styles from './index.module.css';

type BreadcrumbItem = {
  text: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.text,
    item: item.href
      ? `${process.env.NEXT_PUBLIC_BASE_URL}${item.href}`
      : undefined,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.filter((item) => item.item),
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className={clsx(styles.breadcrumb, 'innerXl')}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {item.href ? (
              <Link className={styles.link} href={item.href}>{item.text}</Link>
            ) : (
              <span className={styles.text}>{item.text}</span>
            )}
          </li>
        ))}
      </ol>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
};

export default Breadcrumb;
