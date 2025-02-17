import { createClient } from 'microcms-js-sdk';

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';


export type News = {
  title: string;
  category: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

export type NewsCategory = {
  id: string;
  category: string;
};

if (!process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.NEXT_PUBLIC_MICROCMS_API_KEY) {
  throw new Error('NEXT_PUBLIC_MICROCMS_API_KEY is required');
}

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY as string,
});

// ✅ ニュース一覧を取得する関数
export const getNewsList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<News>({
    endpoint: 'news',
    queries,
  });
  return listData;
};

export const getCategoryList = async () => {
  const listData = await client.getList<NewsCategory>({
    endpoint: 'news', // ✅ MicroCMS で作成したカテゴリーのエンドポイント
  });
  return listData;
};
