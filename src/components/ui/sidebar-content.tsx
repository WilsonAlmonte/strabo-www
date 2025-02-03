import { HomeHero } from "@/presentation/home/home.hero";
import Image from "next/image";

interface AppNavbarProps {
  children: React.ReactNode;
}

export const SidebarContent: React.FC<AppNavbarProps> = ({ children }) => {
  return (
    <div className="drawer flex-1">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className=" w-full absolute h-full opacity-15">
        <video autoPlay loop muted className="h-full w-full object-fill">
          <source src="/bk/bk-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="drawer-content flex flex-col h-full from-neutral via-[#0e1215] via-40% to-neutral bg-linear-to-b">
        {/* Navbar */}
        <HomeHero>
          <nav className="navbar backdrop-blur-2xl w-full z-10 ">
            <div className="mx-2 px-2 text-3xl flex-1 font-display text-base-100 flex items-center gap-2">
              <Image src="/logo.png" width={40} height={40} alt="logo" />
              STRABO
            </div>
          </nav>
        </HomeHero>
        <main className="flex-1">
          {/* Page content here */}
          <div className="">{children}</div>
        </main>
      </div>
      <aside className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 bg-gradient-to-br from-base-100 to-primary">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};
