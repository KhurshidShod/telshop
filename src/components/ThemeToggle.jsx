import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    return savedTheme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="
        flex
        size-10
        items-center
        justify-center
        rounded-full
        border
        border-zinc-200
        bg-white
        text-zinc-700
        transition-colors
        hover:bg-zinc-100
        dark:border-zinc-800
        dark:bg-zinc-900
        dark:text-zinc-300
        dark:hover:bg-zinc-800
      "
    >
      {dark ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </button>
  );
}
