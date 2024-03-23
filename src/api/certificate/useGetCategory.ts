import { api } from '../axios-config';
import { GetCategoryListResponse } from './certificate.type';

const getCategory = async (): Promise<GetCategoryListResponse> => {
  return api.get('/certificate/category');
};

export function useGetCategory() {
  return {
    queryKey: ['category'],
    queryFn: getCategory,
  };
}
