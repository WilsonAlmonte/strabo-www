import { SwordsIcon } from "lucide-react";
export const HomeFooter = () => {
  return (
    <footer className="footer footer-horizontal bg-primary/60 items-center p-4">
      <aside className="grid-flow-col items-center">
        <SwordsIcon width={36} height={36} />
        <p className="font-display text-xl">Strabo</p>

        <p className="font-body">
          © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
};
