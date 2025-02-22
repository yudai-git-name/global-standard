import { createClient } from 'microcms-js-sdk';

import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

// ✅ ニュース
export type News = {
  title: string;
  category: NewsCategory;
  heading2: string;
  heading2Text: string;
  heading3: string;
  heading3Text: string;
  heading4: string;
  heading4Text: string;
  image: MicroCMSImage;
} & MicroCMSListContent;

// ✅ カテゴリー
export type NewsCategory = {
  id: string;
  name: string;
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

// ✅ ニュース詳細記事の取得
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<News>({
    endpoint: 'news',
    contentId,
    queries,
  });
  return detailData;
};

export const getCategoryDetail = async (
	contentId: string,
	queries?: MicroCMSQueries
) => {
	const detailData = await client.getListDetail<NewsCategory>({
    endpoint: 'categories',
    contentId,
    queries,
  });
	return detailData;
}