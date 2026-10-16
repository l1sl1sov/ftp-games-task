import { Spin } from "antd";

interface LoadingSpinProps {
  desc: string;
}

export const LoadingSpin = ({ desc }: LoadingSpinProps) => {
  return (
    <div className="flex justify-center items-center py-24 w-full">
      <Spin size="large" description={`Loading ${desc}...`} />
    </div>
  );
};
