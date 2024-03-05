'use client';

import './test.css';

import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { textState } from '@/app/RecoilRootProvider';

export default function Button() {
  const [count, setCount] = useState(0);
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <p className="text-7xl font-bold text-blue-700">{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p className="auto-pre">{text}</p>
      <button onClick={() => setText((prev) => prev + count)}>Click me</button>
    </div>
  );
}
