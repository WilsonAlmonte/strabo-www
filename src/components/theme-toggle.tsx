import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggle = () => {
  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" className="theme-controller" value="strabo-dark" />
      <SunIcon className="h-10 w-10 swap-off" />
      <MoonIcon className="h-10 w-10 swap-on" />
    </label>
  );
};
