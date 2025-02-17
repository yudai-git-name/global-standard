export type caseCommunicationItem = {
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

export const caseCommunicationItems: caseCommunicationItem[] = [
  {
    business: 'スポーツ用品開発事業',
    company: '合同会社BBB',
    category: '異文化コミュニケーション',
    image: {
      src: '/img/index/case/case_logo05.png',
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
    business: 'アパレル事業',
    company: 'DDD株式会社',
    category: '異文化コミュニケーション',
    image: {
      src: '/img/index/case/case_logo06.png',
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
    company: 'III株式会社',
    category: '異文化コミュニケーション',
    image: {
      src: '/img/index/case/case_logo07.png',
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
