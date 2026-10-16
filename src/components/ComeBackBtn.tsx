import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { Button } from "antd";

export const ComeBackBtn = () => {
  const navigate = useNavigate();
  return (
    <Button
      type="text"
      icon={<ArrowLeftOutlined />}
      onClick={() => navigate(-1)}
      className="text-gray-500 hover:text-black p-0 flex items-center font-medium"
    >
      Come back
    </Button>
  );
};
