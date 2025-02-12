export type CaseItem = {
  companyName: string;
  category: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const CaseItems: CaseItem[] = [
  {
    companyName: 'AAA株式会社',
    category: 'ビジネス英語研修',
    image: {
      src: '/img/index/case/case_logo01.png',
      width: 320,
      height: 240,
      alt: 'image01',
    },
  },
  {
    companyName: '合同会社BBB',
    category: '異文化コミュニケーション',
    image: {
      src: '/img/index/case/case_logo05.png',
      width: 320,
      height: 240,
      alt: 'image02',
    },
  },
  {
    companyName: '株式会社CCC',
    category: 'ビジネス留学プログラム',
    image: {
      src: '/img/index/case/case_logo08.png',
      width: 320,
      height: 240,
      alt: 'image03',
    },
  },
  {
    companyName: 'DDD株式会社',
    category: '異文化コミュニケーション',
    image: {
      src: '/img/index/case/case_logo06.png',
      width: 320,
      height: 240,
      alt: 'image04',
    },
  },
  {
    companyName: 'EEE株式会社',
    category: 'ビジネス留学プログラム',
    image: {
      src: '/img/index/case/case_logo09.png',
      width: 320,
      height: 240,
      alt: 'image05',
    },
  },
  {
    companyName: 'FFF株式会社',
    category: 'ビジネス留学プログラム',
    image: {
      src: '/img/index/case/case_logo02.png',
      width: 320,
      height: 240,
      alt: 'image06',
    },
  },
];
