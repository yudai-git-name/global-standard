import React from 'react';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import News from '@/app/news/sections/News'
import Cta from '@/app/components/layouts/Cta';

const Page = () => {
  const breadcrumbItems = [{ text: 'ホーム', href: '/' }, { text: 'ニュース' }];

  return (
    <main>
      <FvSub
        titleEn="NEWS"
        titleJa="ニュース"
        imagePc="/img/index/fv/fv_news.png"
        imageSp="/img/index/fv/fv_news-sp.png"
        alt="serviceImage"
      />
      <Breadcrumb items={breadcrumbItems} />
      <News />
      <Cta />
    </main>
  );
};

export default Page;