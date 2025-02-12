export type navItem = {
  href: string;
  label: string;
};

export type headerButton = {
  href: string;
  label: string;
  type: 'contact' | 'download';
};

export const navItems: navItem[] = [
  {
    href: '/',
    label: 'トップ',
  },
  {
    href: '/about',
    label: '当社について',
  },
  {
    href: '/service',
    label: 'サービス',
  },
  {
    href: '/case',
    label: '導入事例',
  },
  {
    href: '/news',
    label: 'お知らせ',
  },
];

export const headerButtons: headerButton[] = [
  {
    href: '/download',
    label: '資料ダウンロード',
    type: 'download',
  },
  {
    href: '/contact',
    label: 'お問い合わせ',
    type: 'contact',
  },
];