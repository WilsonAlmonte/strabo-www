import { SidebarContent } from "@/components/ui/sidebar-content";
import { HomeFooter } from "@/presentation/home/home.footer";

interface BaseLayout {
  children: React.ReactNode;
}
const HomeLayout: React.FC<BaseLayout> = ({ children }) => {
  return (
    <section className="h-full flex flex-col">
      <SidebarContent>{children}</SidebarContent>
      <HomeFooter />
    </section>
  );
};

export default HomeLayout;
