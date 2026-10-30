import { ConfigProvider, theme as antTheme } from "antd";
import { Outlet, Link } from "react-router";
import {
  SearchOutlined,
  AppstoreOutlined,
  SunOutlined,
  MoonOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useThemeStore } from "@/store/useThemeStore";
import { GamesSearch } from "@/components/GamesSearch";
import { ScrollToTopBtn } from "@/components/ScrollToTopBtn";
import { useState } from "react";

export const MainLayout = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";

  //for showing or not showing serach modal for mobiles
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#de3e80",
          colorPrimaryHover: "#c22d69",
          colorLink: "#de3e80",
          colorLinkHover: "#c22d69",
          fontFamily: "system-ui, -apple-system, sans-serif",
          borderRadius: 8,
          colorBgContainer: isDark ? "#18181b" : "#ffffff",
          colorBgLayout: isDark ? "#09090b" : "#f8fafc",
          colorTextBase: isDark ? "#f4f4f5" : "#0f172a",
        },
      }}
    >
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-zinc-950 font-sans text-gray-800 dark:text-zinc-200 antialiased transition-colors duration-200">
        <header className="border-b border-slate-100 dark:border-zinc-800 h-16 flex items-center w-full sticky top-0 z-50 px-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
          <div className="w-full flex items-center justify-between gap-8 px-6 max-w-7xl mx-auto relative h-full">
            <Link
              to="/"
              className={`items-center gap-2 font-black text-xl text-gray-950 dark:text-white hover:text-primary transition-colors group tracking-tighter uppercase ${
                isMobileSearchActive ? "hidden md:flex" : "flex"
              }`}
            >
              <AppstoreOutlined className="text-xl text-primary group-hover:rotate-6 transition-transform normal-case" />
              <span>
                open<span className="text-primary">.games</span>
              </span>
            </Link>

            <div
              className={`transition-all duration-200 ${
                isMobileSearchActive
                  ? "flex flex-1 absolute inset-x-0 mx-6 bg-white dark:bg-zinc-900 z-10 items-center gap-2"
                  : "hidden md:block flex-1 max-w-md"
              }`}
            >
              <div className="flex-1">
                <GamesSearch />
              </div>

              <button
                type="button"
                onClick={() => setIsMobileSearchActive(false)}
                className="md:hidden flex items-center justify-center p-2 text-slate-500 hover:text-primary transition-colors"
                aria-label="Close search"
              >
                <CloseOutlined className="text-xl" />
              </button>
            </div>

            <div
              className={`items-center gap-4 ${isMobileSearchActive ? "hidden md:flex" : "flex"}`}
            >
              <button
                type="button"
                onClick={() => setIsMobileSearchActive(true)}
                className="md:hidden flex items-center justify-center p-2 text-slate-600 dark:text-zinc-400 hover:text-primary transition-colors"
                aria-label="Open search"
              >
                <SearchOutlined className="text-xl" />
              </button>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="group relative inline-flex h-9 w-16 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-slate-200 dark:bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
              >
                <span
                  className={`${
                    isDark
                      ? "translate-x-7 bg-zinc-950"
                      : "translate-x-0 bg-white"
                  } pointer-events-none relative block h-7 w-7 rounded-full shadow-sm ring-0 transition-transform duration-200 ease-in-out`}
                >
                  <span
                    className={`${
                      isDark
                        ? "opacity-0 scale-50 -rotate-45"
                        : "opacity-100 scale-100 rotate-0"
                    } absolute inset-0 flex items-center justify-center text-slate-500 text-[11px] transition-all duration-200 ease-in-out`}
                  >
                    <SunOutlined />
                  </span>
                  <span
                    className={`${
                      isDark
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-50 rotate-45"
                    } absolute inset-0 flex items-center justify-center text-zinc-400 text-[11px] transition-all duration-200 ease-in-out`}
                  >
                    <MoonOutlined />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </header>

        <main className="w-full flex-1 flex flex-col max-w-7xl mx-auto px-6 py-8">
          <Outlet />
        </main>

        <footer className="bg-white dark:bg-zinc-900 border-t border-slate-100 dark:border-zinc-800 py-12 w-full px-0 mt-auto transition-colors">
          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-black text-lg text-gray-950 dark:text-white tracking-tighter uppercase">
                  open<span className="text-primary">.games</span>
                </span>
                <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-50 leading-relaxed">
                  The next generation gaming marketplace.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
                  Platform
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
                    >
                      Browse Catalog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
                    >
                      Trending Hub
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
                  Resources
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
                    >
                      Developer API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
                  Company
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
                    >
                      About Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-zinc-400 hover:text-primary transition-colors"
                    >
                      Privacy & Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              <p>
                © {new Date().getFullYear()} OPEN.GAMES. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
        <ScrollToTopBtn />
      </div>
    </ConfigProvider>
  );
};
