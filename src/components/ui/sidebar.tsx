import { SidebarContent } from "./sidebar-content";

interface AppNavbarProps {
  children: React.ReactNode;
}

export const Sidebar: React.FC<AppNavbarProps> = ({ children }) => {
  return (
    <div className="drawer flex-1">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className=" w-full absolute h-full opacity-15">
        <video autoPlay loop muted className="h-full w-full object-fill">
          <source src="/bk/bk-video.mp4" type="video/mp4" />
        </video>
      </div>
      <SidebarContent>{children}</SidebarContent>
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
