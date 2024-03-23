import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { getCategory } from '@/api/certificate/useGetCategory';
import Button from '@/components/button/Button';
import Test from '@/components/Test';
import UserPage from '@/components/User';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['certificate'],
    queryFn: getCategory,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main>
      <Button>버튼</Button>
      <HydrationBoundary state={dehydratedState}>
        <UserPage />
      </HydrationBoundary>
      <Test />
    </main>
  );
}
