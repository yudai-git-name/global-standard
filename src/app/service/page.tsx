import React from 'react';

import FvSub from '@/app/components/layouts/Fv/Sub';
import Breadcrumb from '@/app/components/layouts/Breadcrumb';
import Program from '@/app/service/sections/Program';
import Introduction from '@/app/service/sections/Introduction';
import Qa from '@/app/service/sections/Qa'
import Cta from '@/app/components/layouts/Cta';

const Page = () => {
  const breadcrumbItems = [{ text: 'ホーム', href: '/' }, { text: 'サービス' }];

  return (
    <main>
      <FvSub
        titleEn="SERVICE"
        titleJa="サービス"
        imagePc="/img/index/fv/fv_service.png"
        imageSp="/img/index/fv/fv_service-sp.png"
        alt="serviceImage"
      />
      <Breadcrumb items={breadcrumbItems} />
      <Program />
      <Introduction />
      <Qa />
      <Cta />
    </main>
  );
};

export default Page;
