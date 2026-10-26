import { Input, Button, ConfigProvider } from "antd";
import { Outlet, Link } from "react-router";
import { SearchOutlined, AppstoreOutlined } from "@ant-design/icons";

export const MainLayout = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#de3e80",
          colorPrimaryHover: "#c22d69",
          colorLink: "#de3e80",
          colorLinkHover: "#c22d69",
          fontFamily: "system-ui, -apple-system, sans-serif",
          borderRadius: 8,
        },
      }}
    >
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800 antialiased">
        <header className="border-b border-gray-100 h-16 flex items-center w-full sticky top-0 z-50 px-0 bg-white/80 backdrop-blur-md">
          <div className="w-full flex items-center justify-between gap-8 px-6 max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-2 font-black text-xl text-gray-950 hover:text-primary transition-colors group tracking-tighter uppercase"
            >
              <AppstoreOutlined className="text-xl text-primary group-hover:rotate-6 transition-transform normal-case" />
              <span>
                open<span className="text-primary">.games</span>
              </span>
            </Link>

            <div className="flex-1 max-w-md hidden md:block">
              <Input
                placeholder="Search games..."
                prefix={
                  <SearchOutlined className="text-gray-400 group-focus-within:text-primary transition-colors" />
                }
                variant="filled"
                className="bg-gray-100 border border-transparent hover:border-gray-200 focus:border-primary focus:bg-white transition-all rounded-lg py-1.5"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="md:hidden flex items-center justify-center p-2 text-gray-600 hover:text-primary transition-colors">
                <SearchOutlined className="text-xl" />
              </button>

              <Button
                type="primary"
                className="rounded-lg font-semibold px-5 h-9 text-sm border-none bg-primary hover:bg-primary-hover transition-all"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </header>

        <main className="w-full flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 py-8">
          <Outlet />
        </main>

        <footer className="bg-white border-t border-gray-100 py-12 w-full px-0 mt-auto">
          <div className="max-w-7xl mx-auto px-6 w-full flex flex-col gap-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-black text-lg text-gray-950 tracking-tighter uppercase">
                  open<span className="text-primary">.games</span>
                </span>
                <p className="text-xs text-gray-500 max-w-50 leading-relaxed">
                  The next generation gaming marketplace.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Platform
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Browse Catalog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Trending Hub
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Resources
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Developer API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                  Company
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      About Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Privacy & Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100 text-xs text-gray-500">
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
      </div>
    </ConfigProvider>
  );
};
