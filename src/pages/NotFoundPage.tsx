import { Typography, Result } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { ComeBackBtn } from "@/components/ComeBackBtn";

export const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-start pt-24 sm:pt-32 select-none px-4 relative overflow-hidden bg-transparent">
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none transition-colors duration-200" />

      <div className="text-center z-10 flex flex-col items-center max-w-md w-full relative">
        <Result
          icon={
            <FrownOutlined className="text-5xl text-gray-800 dark:text-zinc-400 transition-colors" />
          }
          title={
            <div className="flex flex-col items-center gap-4 mt-2">
              <h1 className="text-8xl sm:text-9xl font-black tracking-widest text-gray-900 dark:text-zinc-50 m-0 transition-colors">
                404
              </h1>
              <Typography.Title
                level={2}
                className="m-0 font-bold uppercase tracking-[0.2em] text-base text-gray-800 dark:text-zinc-300 transition-colors"
              >
                Page Not Found
              </Typography.Title>
            </div>
          }
          subTitle={
            <p className="mt-3 text-sm font-medium text-gray-400 dark:text-zinc-500 max-w-xs leading-relaxed mx-auto transition-colors">
              The page you are looking for doesn't exist or has been moved.
            </p>
          }
          extra={
            <div className="mt-10 w-full flex justify-center">
              <ComeBackBtn />
            </div>
          }
        />
      </div>
    </div>
  );
};
