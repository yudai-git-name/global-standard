export type MemberItem = {
  position: string;
  name: string;
  text: string;
  icons: {
    x: string;
    faceBook: string;
    instaGram: string;
  };
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const MemberItems: MemberItem[] = [
  {
    position: '代表取締役社長',
    name: '波瑠　慶太',
    text: '20年間外資系企業に勤務し、世界17カ国でビジネスを展開。\n様々な文化に触れ、コミュニケーションスキルを磨き、同時にその必要性を実感する。\n自身も講師を務め、実体験から得られた知見を皆様に還元し、グローバルなビジネス展開をサポートいたします。',
    icons: {
      x: 'https://x.com/',
      faceBook: 'https://www.facebook.com/',
      instaGram: 'https://www.instagram.com/',
    },
    image: {
      src: '/img/index/about/about_member01.png',
      width: 240,
      height: 320,
      alt: 'image01',
    },
  },
  {
    position: '取締役',
    name: 'ジャック・スミス',
    text: 'オーストラリア出身。\n英会話の講師として13年のキャリアがあります。\n翻訳業務も担当しており、外国映画の日本版DVDの字幕やテレビ番組の英語をヒヤリングなども行なっております。\n皆様に「より気持ちの伝わる英会話」を習得していただくサポートをいたします。',
    icons: {
      x: 'https://x.com/',
      faceBook: 'https://www.facebook.com/',
      instaGram: 'https://www.instagram.com/',
    },
    image: {
      src: '/img/index/about/about_member02.png',
      width: 240,
      height: 320,
      alt: 'image02',
    },
  },
  {
    position: '取締役',
    name: 'メアリー・ジャクソン',
    text: 'アメリカ出身。\nメジャーリーグ球団「ニューヨークヤンキース」の通訳担当として7年間チームに在籍。\n数多くの契約交渉の経験を活かし、国際ビジネスにおけるコミュニケーションのマナーから応用までお伝えいたします。',
    icons: {
      x: 'https://x.com/',
      faceBook: 'https://www.facebook.com/',
      instaGram: 'https://www.instagram.com/',
    },
    image: {
      src: '/img/index/about/about_member03.png',
      width: 240,
      height: 320,
      alt: 'image03',
    },
  },
];
