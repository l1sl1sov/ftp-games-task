import { Space, Select } from "antd";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { extractExactValueForApi } from "@/utils/extractExactValueForApi";
import { formatDisplayLabel } from "@/utils/formatDisplayLabel";
import { useMemo } from "react";

interface FilterSelectI {
  type: string;
  value: string | undefined;
  onChange: (val: string | undefined) => void;
}

export const FilterSelect = ({ type, value, onChange }: FilterSelectI) => {
  //fetch categories data from server by type
  const { data: categories = [] } = useFetchCategories(type);

  //transform categories into stable select options using mapping helpers
  const options = useMemo(() => {
    return categories.map((cat) => {
      const apiValue = extractExactValueForApi(cat.slug, cat.title, type);
      return {
        value: apiValue,
        label: formatDisplayLabel(apiValue, type),
      };
    });
  }, [categories, type]);

  //format dropdown criteria label text
  const label = useMemo(
    () => type.charAt(0).toUpperCase() + type.slice(1),
    [type],
  );

  return (
    <Space size="small">
      <span className="text-[#000000a6] font-medium">{label}:</span>
      <Select
        value={value}
        onChange={onChange}
        className="w-52"
        placeholder={`Select ${type}`}
        allowClear
        options={options}
      />
    </Space>
  );
};
