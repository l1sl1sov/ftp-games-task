import { Button, Typography } from "antd";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 gap-4">
      <Typography.Title level={3}>hd cd zD</Typography.Title>
      <h3 className="bg-primary text-primary-light">testing primary color</h3>
      <Button type="dashed">testing button ant</Button>
    </div>
  );
}
