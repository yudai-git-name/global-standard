import type { Metadata } from 'next';
import { Noto_Sans_JP, Fira_Sans, Roboto } from 'next/font/google';
import 'destyle.css';
import './styles/_index.css';

import Header from '@/app/components/layouts/Header';
import Footer from '@/app/components/layouts/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
  variable: '--fontNoto_Sans_JP',
});

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  style: 'italic',
  variable: '--fontFira_Sans',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  style: 'italic',
  variable: '--fontRoboto',
});

export const metadata: Metadata = {
  title: 'Global standard',
  description: 'Global standard description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${firaSans.variable} ${roboto.variable}`}
      >
        <Header title={metadata.title as string} />
        {children}
        <Footer title={metadata.title as string} />
      </body>
    </html>
  );
}
