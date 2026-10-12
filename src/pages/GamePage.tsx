import { useParams, useNavigate } from "react-router";
import { Typography, Button, Result } from "antd";
import { ArrowLeftOutlined, AppstoreOutlined } from "@ant-design/icons";

export const GamePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl mx-auto py-4 flex flex-col gap-6 flex-1 justify-center">
      <div>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          className="text-gray-500 hover:text-black p-0 flex items-center font-medium"
        >
          Come back
        </Button>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center flex-1 min-h-87.5">
        <Result
          icon={<AppstoreOutlined className="text-5xl text-black" />}
          title={
            <Typography.Title level={2} className="m-0 font-bold text-gray-900">
              Game page {slug}
            </Typography.Title>
          }
          subTitle="In development"
        />
      </div>
    </div>
  );
};
