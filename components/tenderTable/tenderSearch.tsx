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
    <div className="my-16 w-full lg:max-w-[80%] xl:max-w-[60%] 2xl:max-w-[50%] mx-auto">
      <div className="flex flex-wrap justify-around border border-[#ffa500] py-3 px-1 rounded-sm">
        <div className="flex flex-wrap flex-col gap-4">
          <div>
            <p className="mb-1 text-[13px] font-bold">نوع فراخوان</p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 12,
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
            <p className="mb-1 text-[13px] font-bold">وضعیت فراخوان</p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 12,
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
            <p className="mb-1 text-[13px] font-bold">نوع برگزاری</p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 12,
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
        <div className="flex flex-wrap flex-col gap-4">
          <div>
            <p className="mb-1 text-[13px] font-bold">
              جستجو بر اساس شماره فراخوان
            </p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 12,
                  borderRadius: 0,
                },
              }}
            >
              <Input
                placeholder="شماره را وارد کنید ..."
                allowClear
                onChange={onChange}
                style={{ width: 280 }}
              />
            </ConfigProvider>
          </div>
          <div>
            <p className="mb-1 text-[13px] font-bold">
              جستجو بر اساس کلید واژه
            </p>
            <ConfigProvider
              theme={{
                token: {
                  fontFamily: "iran_sans",
                  fontSize: 12,
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
          <div className="flex justify-center items-center gap-4">
            <div>
              <Button
                className="rounded-none font-iransans bg-[#007F38] text-white"
                icon={<SearchOutlined />}
              >
                جستجو
              </Button>
            </div>
            <div>
              <Button className="px-7 rounded-none font-iransans bg-[#696969] text-white">
                پاک کردن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
