'use client';

import './test.css';

import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { useCreatePosts } from '@/api/post/useCreatePost';
import { textState } from '@/app/RecoilRootProvider';

export default function Button() {
  const [count, setCount] = useState(0);
  const [text, setText] = useRecoilState(textState);
  const { mutate, data } = useCreatePosts();
  console.log(data);
  return (
    <div>
      <p className="text-7xl font-bold text-blue-700">{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p className="auto-pre">{text}</p>
      <button onClick={() => setText((prev) => prev + count)}>Click me</button>
      <br />
      <button
        onClick={() =>
          mutate({
            body: {
              title: '제목',
              content: '내용',
              images: [],
              certificate: {
                id: 1,
                title: '자격증',
              },
            },
          })
        }
      >
        임시 데이터 가져오기
      </button>
      <br />
    </div>
  );
}
