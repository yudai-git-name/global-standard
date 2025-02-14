export type ProgramItem = {
  number: string;
  titleJa: string;
  titleEn: string;
  text01: string;
  text02: string;
  subject: string;
  cost: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
	href: string;
};

export const ProgramItems: ProgramItem[] = [
  {
    number: '01',
    titleJa: 'ビジネス英語研修',
    titleEn: 'Business English Training',
    text01:
      'ビジネス英会話はこれからの時代、すべてのビジネスパーソンが学ぶべき必須スキルと考えおります。 海外にビジネス展開する際にはもちろんのこと、日本国内でも英会話コミュニケーションができることによってチャンスが掴める場面があります。',
    text02:
      ' 担当する講師は皆、豊富な海外ビジネス経験者であり、ティーチングスキル、コミュニケーションスキル、人間性に加えて採用後には厳しいトレーニング期間を設けているので、様々な職業や職種に合ったスキルまで身につけられます。また、必要に応じてマンツーマン形式のレッスンを行うことも可能なので、時間の限り話すことができ効率よく上達することができます。',
    subject: 'ビジネスの中で使える英語コミュニケーション能力が必要な方',
    cost: '時間内容要相談',
    image: {
      src: '/img/index/service/service_program01.png',
      width: 560,
      height: 896,
      alt: 'image01',
    },
		href: '/'
  },
  {
    number: '02',
    titleJa: '異文化コミュニケーション',
    titleEn: 'Cross-cultural communication',
    text01:
      '急速にグローバル化が進んでおり、ビジネスの場面に限らず様々な文化的背景を持つ者同士の交流はもはや日常的な光景となりました。言語や文化が異なる相手を理解することで世界が広がり、新たなビジネスチャンスに巡り会うことは少なくありません。多様な価値観を尊重しながら言葉の垣根を越え、コミュニケーションの力で他者を理解しようとする「異文化コミュニケーション」はこれからの時代、さらに重要となるスキルと言えます。',
    text02:
      'コミュニケーションの基本となる日本語と英語の力を鍛えつつ、アプローチする国の文化を同時に学び、スムーズなビジネス展開をサポートいたします。',
    subject: '海外へのビジネス展開を検討されている方',
    cost: '時間内容要相談',
    image: {
      src: '/img/index/service/service_program02.png',
      width: 560,
      height: 896,
      alt: 'image02',
    },
		href: '/'
  },
  {
    number: '03',
    titleJa: 'ビジネス留学プログラム',
    titleEn: 'Business study abroad program',
    text01:
      '将来的に海外で働きたい方に向けた講座をご用意しております。一般的には3ヶ月〜1年の期間で基本的な英会話スキルと、海外でのビジネスマナー習得を目指します。通常の語学留学では得られないビジネスの場で通用するコミュニケーションスキル習得に重点をおいておりますので、海外でビジネス展開する際に自信を持って活動することができるようになります。',
    text02:
      'お申し込みいただく際に綿密なヒアリングを行い、おすすめの留学先を複数ピックアップいたします。海外ビジネス経験豊富な講師が、留学後のキャリアプラン作成までお手伝いいたします。',
    subject: '英語コミュニケーション能力を習得し、将来的に海外で働きたい方',
    cost: '時間内容要相談',
    image: {
      src: '/img/index/service/service_program03.png',
      width: 560,
      height: 896,
      alt: 'image03',
    },
		href: '/'
  },
];
