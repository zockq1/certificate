'use client';

import { useQuery } from '@tanstack/react-query';

import { getCategory } from '@/api/certificate/useGetCategory';

const UserPage = () => {
  const { data } = useQuery({ queryKey: ['category'], queryFn: getCategory });
  if (!data || !data[0]) return <div>데이터 없음</div>;
  return <div>{data[0].id}</div>;
};

export default UserPage;
