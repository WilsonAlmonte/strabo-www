import { HomeLayout } from '@/components/ui/home.layout';

interface BaseLayout {
  children: React.ReactNode;
}
export default function Layout({ children }: BaseLayout) {
  return (
    <section className='flex h-full flex-col'>
      <HomeLayout>{children}</HomeLayout>
    </section>
  );
}
