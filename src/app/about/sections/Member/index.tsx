import React from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import { MemberItems } from './data';

export default function index() {
  return (
    <section className={styles.member}>
      <div className={styles.inner}>
        <div className={clsx(styles.content, 'innerS')}>
          <h2 className={styles.heading2}>役員紹介</h2>
          <div className={styles.boxes}>
            {MemberItems.map((item, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.body}>
                  <div className={styles.head}>
                    <h3 className={styles.heading3}>
                      <span className={styles.position}>{item.position}</span>
                      <span className={styles.name}>{item.name}</span>
                    </h3>
                  </div>
                  <div className={styles.textWrap}>
                    <p className={styles.text}>
                      {' '}
                      {item.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  <div className={styles.icons}>
                    <div className={styles.iconWrap}>
                      <Link className={styles.iconLink} href={item.icons.x}>
                        <FaTwitter className={styles.iconImage} />
                      </Link>
                    </div>
                    <div className={styles.iconWrap}>
                      <Link
                        className={styles.iconLink}
                        href={item.icons.faceBook}
                      >
                        <FaFacebook className={styles.iconImage} />
                      </Link>
                    </div>
                    <div className={styles.iconWrap}>
                      <Link
                        className={styles.iconLink}
                        href={item.icons.instaGram}
                      >
                        <FaInstagram className={styles.iconImage} />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.imageWrap}>
                  <Image
                    className={styles.image}
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                    alt={item.image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
