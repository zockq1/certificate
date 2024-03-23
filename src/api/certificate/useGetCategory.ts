import { QueryFunction } from '@tanstack/react-query';

import { baseURL } from '../axios-config';

export const getCategory: QueryFunction = async () => {
  const res = await fetch(`${baseURL}/certificate/category`, {
    next: {
      tags: ['category'],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export function useGetCategory() {
  return {
    queryKey: ['category'],
    queryFn: getCategory,
  };
}
