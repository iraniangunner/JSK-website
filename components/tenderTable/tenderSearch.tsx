"use client";
import { Select, Input, ConfigProvider, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function TenderSearch() {
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };
  return (
    <div className="my-16 w-full xl:max-w-[50%] 3xl:max-w-[40%] mx-auto">
      <div className="flex flex-wrap justify-around border py-3 rounded-sm">
        <div className="flex flex-wrap  flex-col gap-6">
          <div>
            <p className="mb-1 text-[14px] font-bold">نوع فراخوان</p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 13,
                  borderRadius: 0,
                },
              }}
            >
              <Select
                labelInValue
                defaultValue={{ value: "tender", label: "مناقصه" }}
                style={{ width: 280 }}
                onChange={handleChange}
                options={[
                  { value: "tender", label: "مناقصه" },
                  {
                    value: "auction",
                    label: "مزایده",
                  },

                  { value: "inquiry", label: "استعلام" },
                ]}
              />
            </ConfigProvider>
          </div>
          <div>
            <p className="mb-1 text-[14px] font-bold">وضعیت فراخوان</p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 13,
                  borderRadius: 0,
                },
              }}
            >
              <Select
                labelInValue
                defaultValue={{ value: "active", label: "فعال" }}
                style={{ width: 280 }}
                onChange={handleChange}
                options={[
                  { value: "active", label: "فعال" },
                  {
                    value: "inactive",
                    label: "غیر فعال",
                  },
                  {
                    value: "canceled",
                    label: "لغو",
                  },
                  {
                    value: "extend",
                    label: "تمدید",
                  },
                ]}
              />
            </ConfigProvider>
          </div>
          <div>
            <p className="mb-1 text-[14px] font-bold">نوع برگزاری</p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 13,
                  borderRadius: 0,
                },
              }}
            >
              <Select
                labelInValue
                defaultValue={{ value: "onestep", label: "یک مرحله ای" }}
                style={{ width: 280 }}
                onChange={handleChange}
                options={[
                  { value: "onestep", label: "یک مرحله ای" },
                  {
                    value: "twostep",
                    label: "دو مرحله ای",
                  },
                ]}
              />
            </ConfigProvider>
          </div>
        </div>
        <div className="flex flex-wrap flex-col gap-6">
          <div>
            <p className="mb-1 text-[14px] font-bold">
              جستجو بر اساس شماره فراخوان
            </p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 13,
                  borderRadius: 0,
                },
              }}
            >
              <Input
                placeholder="شماره را وارد کنید ..."
                allowClear
                onChange={onChange}
                style={{ width: 280 }}
                // className="w-full"
              />
            </ConfigProvider>
          </div>
          <div>
            <p className="mb-1 text-[14px] font-bold">
              جستجو بر اساس کلید واژه
            </p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 13,
                  borderRadius: 0,
                },
              }}
            >
              <Input
                placeholder="کلید واژه را وارد کنید ..."
                allowClear
                onChange={onChange}
                style={{ width: 280 }}
              />
            </ConfigProvider>
          </div>
          <div className="flex justify-center items-center gap-4 mt-2">
            <div>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
            </div>
            <div>
              <Button type="primary" className="px-7">Reset</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
