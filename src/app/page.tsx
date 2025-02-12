import React from 'react';
import FvTop from '@/app/components/layouts/Fv/Top';
import About from '@/app/Home/sections/About';
import Service from '@/app/Home/sections/Service';
import Case from '@/app/Home/sections/Case';
import News from '@/app/Home/sections/News';
import Cta from '@/app/components/layouts/Cta';

export default function page() {
  return (
    <main>
      <FvTop />
      <About />
      <Service />
      <Case />
      <News />
      <Cta />
    </main>
  );
}
