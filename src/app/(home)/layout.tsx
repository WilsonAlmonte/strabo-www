import { AppNavbar } from "@/components/ui/navbar";

interface BaseLayout {
  children: React.ReactNode;
}
const HomeLayout: React.FC<BaseLayout> = ({ children }) => {
  return (
    <section>
      <header>
        <AppNavbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </section>
  );
};

export default HomeLayout;
