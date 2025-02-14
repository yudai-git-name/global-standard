export type MessageItem = {
  titleEn: string;
  titleJa: string;
  heading3: string;
  text: string;
  image: {
    srcPc: string;
    srcSp: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const MessageItems: MessageItem[] = [
  {
    titleEn: 'MISSION',
    titleJa: '社会的使命',
    heading3: '人財育成を通じて、豊かな世界を創造する',
    text: '急速に広がったグローバル社会に対応できる人材を育成することで、文化・言語の垣根を越えたコミュニケーションを活発にし、一人でも多くの人が豊かに暮らせる世界を実現することを使命とする。',
    image: {
      srcPc: '/img/index/about/about_message01.png',
      srcSp: '/img/index/about/about_message01-sp.png',
      width: 1100,
      height: 353,
      alt: 'message01',
    },
  },
  {
    titleEn: 'VISION',
    titleJa: '企業理念',
    heading3: '文化の垣根を越えた人と人とのつながりが新しい価値を生む',
    text: 'コミュニケーションスキル習得をサポートすることで一人でも多くのビジネスパーソンの視野を広げ、世界を舞台に新しい相乗効果を生む未来を創造する。文化の垣根を越えた人と人とのつながりが新しい価値を生むことを信念とする。',
    image: {
      srcPc: '/img/index/about/about_message02.png',
      srcSp: '/img/index/about/about_message02-sp.png',
      width: 1100,
      height: 353,
      alt: 'message02',
    },
  },
];
