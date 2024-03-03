'use client';

import { atom, RecoilRoot } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: 'ads',
});

export default function RecoilRootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
