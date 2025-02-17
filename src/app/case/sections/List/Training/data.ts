export type caseTrainingItem = {
  business: string;
  company: string;
  category: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  Detail: {
    PurposeOfTraining: string;
    ReasonForChoosing: string;
    ResultsAfterImplementation: string;
  };
};

export const caseTrainingItems: caseTrainingItem[] = [
  {
    business: 'Webマーケティング事業',
    company: 'AAA株式会社',
    category: 'ビジネス英語研修',
    image: {
      src: '/img/index/case/case_logo01.png',
      width: 260,
      height: 112,
      alt: 'image01',
    },
    Detail: {
      PurposeOfTraining:
        '海外にビジネス展開する計画があり、必要な英会話コミュニケーションを身につけることが目的。',
      ReasonForChoosing:
        '海外の企業で働いていた実績のある講師に直接ご指導いただけることは、とても貴重な経験になると考えた為',
      ResultsAfterImplementation:
        '昨年からオーストラリアの企業と業務提携を開始し、３ヶ月という短い研修期間でしたが、業務に必要なコミュニケーションはスムーズに行えております。今後は更なるスキルアップを目指していきます。',
    },
  },
  {
    business: 'メディカルフィットネス事業',
    company: 'FFF株式会社',
    category: 'ビジネス英語研修',
    image: {
      src: '/img/index/case/case_logo02.png',
      width: 260,
      height: 112,
      alt: 'image02',
    },
    Detail: {
      PurposeOfTraining:
        '海外にビジネス展開する計画があり、必要な英会話コミュニケーションを身につけることが目的。',
      ReasonForChoosing:
        '海外の企業で働いていた実績のある講師に直接ご指導いただけることは、とても貴重な経験になると考えた為',
      ResultsAfterImplementation:
        '昨年からオーストラリアの企業と業務提携を開始し、３ヶ月という短い研修期間でしたが、業務に必要なコミュニケーションはスムーズに行えております。今後は更なるスキルアップを目指していきます。',
    },
  },
  {
    business: 'ソフトウェア開発事業',
    company: '株式会社GGG',
    category: 'ビジネス英語研修',
    image: {
      src: '/img/index/case/case_logo03.png',
      width: 260,
      height: 112,
      alt: 'image03',
    },
    Detail: {
      PurposeOfTraining:
        '海外にビジネス展開する計画があり、必要な英会話コミュニケーションを身につけることが目的。',
      ReasonForChoosing:
        '海外の企業で働いていた実績のある講師に直接ご指導いただけることは、とても貴重な経験になると考えた為',
      ResultsAfterImplementation:
        '昨年からオーストラリアの企業と業務提携を開始し、３ヶ月という短い研修期間でしたが、業務に必要なコミュニケーションはスムーズに行えております。今後は更なるスキルアップを目指していきます。',
    },
  },
  {
    business: '飲食事業',
    company: 'HHH株式会社',
    category: 'ビジネス英語研修',
    image: {
      src: '/img/index/case/case_logo04.png',
      width: 260,
      height: 112,
      alt: 'image03',
    },
    Detail: {
      PurposeOfTraining:
        '海外にビジネス展開する計画があり、必要な英会話コミュニケーションを身につけることが目的。',
      ReasonForChoosing:
        '海外の企業で働いていた実績のある講師に直接ご指導いただけることは、とても貴重な経験になると考えた為',
      ResultsAfterImplementation:
        '昨年からオーストラリアの企業と業務提携を開始し、３ヶ月という短い研修期間でしたが、業務に必要なコミュニケーションはスムーズに行えております。今後は更なるスキルアップを目指していきます。',
    },
  },
];
