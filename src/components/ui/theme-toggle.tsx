import { MoonIcon, SunIcon } from 'lucide-react';

export const ThemeToggle = () => {
  return (
    <label className='swap swap-rotate'>
      {/* this hidden checkbox controls the state */}
      <input type='checkbox' className='theme-controller' value='strabo-dark' />
      <SunIcon className='swap-off h-6 w-6' />
      <MoonIcon className='swap-on h-6 w-6' />
    </label>
  );
};
