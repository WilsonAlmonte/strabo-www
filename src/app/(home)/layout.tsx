import { Sidebar } from "@/components/ui/sidebar";

interface BaseLayout {
  children: React.ReactNode;
}
const HomeLayout: React.FC<BaseLayout> = ({ children }) => {
  return (
    <section className="h-full flex flex-col">
      <Sidebar>{children}</Sidebar>
    </section>
  );
};

export default HomeLayout;
