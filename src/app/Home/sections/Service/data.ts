export type ServiceItem = {
  number: string;
  titleTop: string;
  titleBottom: string;
  text: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const ServiceItems: ServiceItem[] = [
  {
    number: '01',
    titleTop: 'ビジネス英語研修',
    titleBottom: '',
    text: 'ビジネス英会話はこれからの時代、すべてのビジネスパーソンが学ぶべき必須スキルと考えおります。海外にビジネス展開する際にはもちろんのこと、日本国内でも英会話コミュニケーションができることによってチャンスが掴める場面があります。',
    image: {
      src: '/img/index/service/service_top01.png',
      width: 320,
      height: 427,
      alt: 'image01',
    },
  },
  {
    number: '02',
    titleTop: '異文化',
    titleBottom: 'コミュニケーション研修',
    text: '急速にグローバル化が進んでおり、ビジネスの場面に限らず様々な文化的背景を持つ者同士の交流はもはや日常的な光景となりました。\n言語や文化が異なる相手を理解することで世界が広がり、新たなビジネスチャンスに巡り会うことは少なくありません。',
    image: {
      src: '/img/index/service/service_top02.png',
      width: 320,
      height: 427,
      alt: 'image02',
    },
  },
  {
    number: '03',
    titleTop: 'ビジネス留学',
    titleBottom: 'サポートプログラム',
    text: '将来的に海外で働きたい方に向けた講座をご用意しております。一般的には3ヶ月〜1年の期間で基本的な英会話スキルと、海外でのビジネスマナー習得を目指します。\n通常の語学留学では得られないビジネスの場で通用するコミュニケーションスキル習得に重点をおいておりますので、海外でビジネス展開する際に自信を持って活動することができるようになります。',
    image: {
      src: '/img/index/service/service_top03.png',
      width: 320,
      height: 427,
      alt: 'image03',
    },
  },
];
