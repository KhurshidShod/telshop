import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingCart,
  Sun,
  X,
} from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

const categories = [
  'Telefonlar',
  'MacBook',
  'Noutbuklar',
  'Planshetlar',
  'Gadjetlar',
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Replace this with your existing theme logic
  const [dark, setDark] = useState(
    document.documentElement.classList.contains('dark')
  );

  const toggleTheme = () => {
    const next = !dark;

    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');

    setDark(next);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-gray-200/70
        bg-gray-50/90
        backdrop-blur-xl
        dark:border-white/[0.06]
        dark:bg-zinc-950/90
      "
    >
      <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            TOP / MAIN ROW
        ===================================================== */}

        <div className="flex h-16 items-center gap-4">
          {/* Mobile menu */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen((value) => !value)}
            className="
              size-10
              shrink-0
              rounded-xl
              lg:hidden
              dark:hover:bg-white/10
            "
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>

          {/* Logo */}
          <a
            href="/"
            className="
              shrink-0
              text-xl
              font-black
              tracking-[-0.04em]
              text-gray-950
              dark:text-zinc-50
              sm:text-2xl
            "
          >
            Texno<span className="text-yellow-500">Dom</span>
          </a>

          {/* Search */}
          <div className="mx-auto hidden w-full max-w-xl md:block">
            <div
              className="
                group
                flex
                h-11
                items-center
                rounded-xl
                border
                border-gray-200
                bg-white
                px-3
                transition
                focus-within:border-yellow-400
                focus-within:ring-4
                focus-within:ring-yellow-400/10
                dark:border-white/[0.08]
                dark:bg-zinc-900
              "
            >
              <Search
                className="
                  size-4.5
                  shrink-0
                  text-gray-400
                  dark:text-zinc-500
                "
              />

              <input
                type="search"
                placeholder="Mahsulot qidirish..."
                className="
                  h-full
                  min-w-0
                  flex-1
                  bg-transparent
                  px-3
                  text-sm
                  text-gray-900
                  outline-none
                  placeholder:text-gray-400
                  dark:text-zinc-100
                  dark:placeholder:text-zinc-500
                "
              />

              <kbd
                className="
                  hidden
                  rounded-md
                  border
                  border-gray-200
                  bg-gray-50
                  px-1.5
                  py-0.5
                  text-[10px]
                  text-gray-400
                  lg:block
                  dark:border-white/10
                  dark:bg-zinc-800
                  dark:text-zinc-500
                "
              >
                /
              </kbd>
            </div>
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1">
            {/* Favorites */}
            <Button
              variant="ghost"
              size="icon"
              className="
                size-10
                rounded-xl
                text-gray-700
                hover:bg-gray-100
                dark:text-zinc-300
                dark:hover:bg-white/[0.06]
              "
            >
              <Heart className="size-5" />
            </Button>

            {/* Theme */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="
                size-10
                rounded-xl
                text-gray-700
                hover:bg-gray-100
                dark:text-zinc-300
                dark:hover:bg-white/6
              "
            >
              {dark ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav
          className="
            hidden
            h-12
            items-center
            gap-7
            lg:flex
          "
        >
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              className="
                relative
                flex
                h-full
                items-center
                text-sm
                font-medium
                text-gray-600
                transition-colors
                hover:text-gray-950
                dark:text-zinc-400
                dark:hover:text-white
              "
            >
              {category}
            </a>
          ))}
        </nav>

        {/* =====================================================
            MOBILE SEARCH
        ===================================================== */}

        <div className="pb-3 md:hidden">
          <div
            className="
              flex
              h-11
              items-center
              rounded-xl
              border
              border-gray-200
              bg-white
              px-3
              dark:border-white/[0.08]
              dark:bg-zinc-900
            "
          >
            <Search className="size-4.5 text-gray-400 dark:text-zinc-500" />

            <input
              type="search"
              placeholder="Mahsulot qidirish..."
              className="
                min-w-0
                flex-1
                bg-transparent
                px-3
                text-sm
                text-gray-900
                outline-none
                placeholder:text-gray-400
                dark:text-zinc-100
                dark:placeholder:text-zinc-500
              "
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {mobileOpen && (
          <nav
            className="
              border-t
              border-gray-200/70
              py-3
              lg:hidden
              dark:border-white/[0.06]
            "
          >
            <div className="flex flex-col">
              {categories.map((category) => (
                <a
                  key={category}
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="
                    rounded-xl
                    px-3
                    py-3
                    text-sm
                    font-medium
                    text-gray-700
                    transition-colors
                    hover:bg-gray-100
                    dark:text-zinc-300
                    dark:hover:bg-white/[0.06]
                  "
                >
                  {category}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
