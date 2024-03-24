import { QueryFunction } from '@tanstack/react-query';

import { baseURL } from '../fetch-config';
import { GetCategoryListResponse } from './certificate.type';

export const getCategory: QueryFunction<
  GetCategoryListResponse,
  [string]
> = async ({ queryKey }) => {
  const res = await fetch(`${baseURL}/certificate/category`, {
    next: {
      tags: queryKey,
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
