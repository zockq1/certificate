'use client';

import './test.css';

import axios from 'axios';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { textState } from '@/app/RecoilRootProvider';

export default function Button() {
  const [count, setCount] = useState(0);
  const [text, setText] = useRecoilState(textState);
  const [data, setData] = useState<{ name: string; age: number | null }>({
    name: '',
    age: null,
  });

  const getTest = () => {
    axios
      .get('http://localhost:9090/user')
      .then((res) => {
        const { data } = res;
        console.log(data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <p className="text-7xl font-bold text-blue-700">{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p className="auto-pre">{text}</p>
      <button onClick={() => setText((prev) => prev + count)}>Click me</button>
      <br />
      <button onClick={getTest}>임시 데이터 가져오기</button>
      <br />
      <p>{data.name}</p>
      <p>{data.age}</p>
    </div>
  );
}
