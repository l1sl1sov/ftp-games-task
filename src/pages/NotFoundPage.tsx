import { Typography, Result } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { ComeBackBtn } from "@/components/ComeBackBtn";

export const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-start pt-24 sm:pt-32 select-none px-4 relative overflow-hidden bg-transparent">
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-gray-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center z-10 flex flex-col items-center max-w-md w-full relative">
        <Result
          icon={<FrownOutlined className="text-5xl text-gray-800" />}
          title={
            <div className="flex flex-col items-center gap-4 mt-2">
              <h1 className="text-8xl sm:text-9xl font-black tracking-widest text-gray-900 m-0">
                404
              </h1>
              <Typography.Title
                level={2}
                className="m-0 font-bold uppercase tracking-[0.2em] text-base text-gray-800"
              >
                Page Not Found
              </Typography.Title>
            </div>
          }
          subTitle={
            <p className="mt-3 text-sm font-medium text-gray-400 max-w-xs leading-relaxed mx-auto">
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
