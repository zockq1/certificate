import './globals.css';

import type { Metadata } from 'next';

import RecoilRootProvider from './RecoilRootProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //let a;
  //let b;
  return (
    <html lang="ko">
      <body>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
