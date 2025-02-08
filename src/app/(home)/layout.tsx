import { HomeLayout } from "@/components/ui/home.layout";

interface BaseLayout {
  children: React.ReactNode;
}
export default function Layout({ children }: BaseLayout) {
  return (
    <section className="h-full flex flex-col">
      <HomeLayout>{children}</HomeLayout>
    </section>
  );
}
