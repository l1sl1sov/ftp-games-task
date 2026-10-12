import { Input, Button, ConfigProvider } from "antd";
import { Outlet, Link } from "react-router";
import { SearchOutlined, AppstoreOutlined } from "@ant-design/icons";

export const MainLayout = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000000",
          colorLink: "#4b5563",
          colorLinkHover: "#000000",
        },
      }}
    >
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
        <header className="border-b border-gray-100 h-16 flex items-center w-full sticky top-0 z-50 px-0 bg-white">
          <div className="w-full flex items-center justify-between gap-8 px-6 max-w-7xl mx-auto">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-black transition-colors"
            >
              <AppstoreOutlined className="text-xl text-black" />
              <span>Open.games</span>
            </Link>

            <div className="flex-1 max-w-md hidden md:block">
              <Input
                placeholder="Search games..."
                prefix={<SearchOutlined className="text-gray-400" />}
                variant="filled"
                className="bg-gray-100 border-none hover:bg-gray-200 focus:bg-white transition-all rounded-lg py-1.5"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="md:hidden flex items-center justify-center p-2 text-gray-600 hover:text-black transition-colors">
                <SearchOutlined className="text-xl" /> //will function soon
              </button>

              <Button
                type="primary"
                className="rounded-lg font-medium px-5 h-9 text-sm shadow-none"
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
                <span className="font-bold text-gray-900 text-base">
                  Open.games
                </span>
                <p className="text-xs text-gray-400 max-w-50">
                  The next generation gaming marketplace.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Platform
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Browse Catalog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Trending Hub
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Resources
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Developer API
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Company
                </h4>
                <ul className="list-none p-0 m-0 flex flex-col gap-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      About Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      Privacy & Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100 text-xs text-gray-400">
              <p>
                © {new Date().getFullYear()} OPEN.GAMES. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-black transition-colors">
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
