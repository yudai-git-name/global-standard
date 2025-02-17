import React from 'react';
import styles from '@/app/case/sections/index.module.css';
import clsx from 'clsx';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import CategoryButton from '@/app/case/sections/List/CategoryButton';
import CaseTraining from '@/app/case/sections/List/Training';
import CaseCommunication from '@/app/case/sections/List/Communication'
import CaseProgram from '@/app/case/sections/List/Program'
import Cta from '@/app/components/layouts/Cta';

const Page = () => {
  const breadcrumbItems = [{ text: 'ホーム', href: '/' }, { text: '導入事例' }];

  return (
    <main>
      <FvSub
        titleEn="CASE STUDY"
        titleJa="導入事例"
        imagePc="/img/index/fv/fv_about.png"
        imageSp="/img/index/fv/fv_about-sp.png"
        alt="CASE STUDYImage"
      />
      <Breadcrumb items={breadcrumbItems} />
      <section className={styles.case}>
        <div className={clsx(styles.inner, 'innerXl')}>
          <CategoryButton />
          <div className={styles.content}>
            <div className={styles.boxes}>
              <CaseTraining />
              <CaseCommunication />
              <CaseProgram />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </main>
  );
};

export default Page;
