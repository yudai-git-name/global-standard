import React from 'react';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Message from '@/app/about/sections/Message';
import Company from '@/app/about/sections/Company';
import Member from '@/app/about/sections/Member';
import Cta from '@/app/components/layouts/Cta';

const Page = () => {
  const breadcrumbItems = [
    { text: 'ホーム', href: '/' },
    { text: '当社について' },
  ];

  return (
    <main>
      <FvSub
        titleEn="ABOUT US"
        titleJa="当社について"
        imagePc="/img/index/fv/fv_about.png"
        imageSp="/img/index/fv/fv_about-sp.png"
        alt="aboutImage"
      />
      <Breadcrumb items={breadcrumbItems} />
      <Message />
      <Company />
      <Member />
      <Cta />
    </main>
  );
};

export default Page;
