export type newsItem = {
  title: string;
  category: string;
  new: string;
  date: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const newsItems: newsItem[] = [
  {
    title: 'お盆期間中の営業について',
    category: 'カテゴリ',
    new: 'NEW',
    date: '2021.01.01',
    image: {
      src: '/img/index/news/news_image.png',
      width: 250,
      height: 156,
      alt: 'image01',
    },
  },
  {
    title: '新型コロナウイルス対策ご協力のお願い',
    category: 'カテゴリ',
    new: 'NEW',
    date: '2021.01.01',
    image: {
      src: '/img/index/news/news_image.png',
      width: 250,
      height: 156,
      alt: 'image02',
    },
  },
  {
    title:
      'オンライン英会話スクール「グッドイングリッシュオンライン株式会社」との業務提携について',
    category: 'カテゴリ',
    new: 'NEW',
    date: '2021.01.01',
    image: {
      src: '/img/index/news/news_image.png',
      width: 250,
      height: 156,
      alt: 'image02',
    },
  },
  {
    title:
      '○月のオンライン講座追加日程と、短期集中強化プランの申込み受付開始のお知らせ',
    category: 'カテゴリ',
    new: 'NEW',
    date: '2021.01.01',
    image: {
      src: '/img/index/news/news_image.png',
      width: 250,
      height: 156,
      alt: 'image02',
    },
  },
];
