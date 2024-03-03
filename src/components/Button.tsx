'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { textState } from '@/app/RecoilRootProvider';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useRecoilState(textState);

  return (
    <div>
      <p className="text-7xl font-bold text-blue-700">{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p className="text-xs">{text}</p>
      <button onClick={() => setText((prev) => prev + count)}>Click me</button>
      <a href="/">asasdasdasdd</a>
    </div>
  );
}
