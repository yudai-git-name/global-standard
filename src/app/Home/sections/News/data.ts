export type NewsItem = {
  href: string;
  title: string;
  category: string;
  date: string;
};

export const NewsItems: NewsItem[] = [
  {
    href: '/',
    title: 'お盆期間中の営業について',
    category: '営業時間',
    date: '2021.07.20',
  },
  {
    href: '/',
    title: '新型コロナウイルス対策ご協力のお願い',
    category: 'その他',
    date: '2021.06.01',
  },
  {
    href: '/',
    title:
      'オンライン英会話スクール「グッドイングリッシュオンライン株式会社」との業務提携について',
    category: 'その他',
    date: '2021.05.01',
  },
];
