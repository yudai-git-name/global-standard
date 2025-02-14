export type IntroductionItem = {
  number: string;
  title: string;
  text: string;
  textNote?: string;
};

export const IntroductionItems: IntroductionItem[] = [
  {
    number: '01',
    title: 'お問い合わせ',
    text: 'お問い合わせフォームより必要事項を誤入力の上、お申し込みください',
  },
  {
    number: '02',
    title: 'ご提案',
    text: 'ご依頼の背景をお伺いし、必要なスキルと習得期間から最適なプランをご提案いたします',
  },
  {
    number: '03',
    title: '日程調整',
    text: '研修日数と開始日を調整し、今後の流れ全体の段取りをご提案いたします',
  },
  {
    number: '04',
    title: '研修開始',
    text: '研修当日はお約束のお時間の30分前に講師が伺います。',
    textNote: '※キャンセルのご連絡は2日前までにお願いいたします',
  },
];
