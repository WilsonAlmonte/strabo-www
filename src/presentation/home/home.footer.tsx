import { SwordsIcon } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
export const HomeFooter = () => {
  return (
    <footer className="footer footer-horizontal bg-base-200 items-center p-4">
      <aside className="grid-flow-col items-center">
        <SwordsIcon width={36} height={36} />
        <p className="font-display text-xl">AI-Strabo</p>

        <p className="font-body">
          © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 place-self-center justify-self-end">
        <a>
          <SiGithub title="Check on Github" />
        </a>
      </nav>
    </footer>
  );
};
