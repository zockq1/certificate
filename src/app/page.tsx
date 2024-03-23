import Button from '@/components/button/Button';
import Test from '@/components/Test';
import UserPage from '@/components/User';

export default function Home() {
  return (
    <main>
      <Button>버튼</Button>
      <UserPage />
      <Test />
    </main>
  );
}
