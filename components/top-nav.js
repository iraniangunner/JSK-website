import { HiOutlineLogin } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneIncoming } from "react-icons/fi";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function TopNav() {
  return (
    <div className="hidden sticky top-0 lg:grid grid-cols-3 bg-white py-4">
      <div className="flex justify-center items-center">
        <Typography
          as="a"
          href="#"
          className="relative cursor-pointer py-1.5 font-medium
          before:content-[''] before:absolute before:right-[100%] 
          before:top-0 before:border-l-[50px] before:border-l-transparent before:border-b-[65px] before:border-b-[#ffa500]
          after:content-[''] after:absolute after:left-[100%] after:top-0 after:min-w-[100vw] after:h-[100%] after:bg-[#ffa500]
          "
        >
          <Image src="./jsk.svg" alt="JSK Logo" width={200} height={24} />
        </Typography>
      </div>

      <div className="flex justify-center items-center gap-4 lg:gap-6">
        <div className="flex justify-center items-center ml-3">
          <div className="border rounded-full p-2 ml-3">
            <FiPhoneIncoming size={20} />
          </div>
          <div>
            <p className="mb-2">تلفن</p>
            <p className="text-sm">021-88660368</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="border rounded-full p-2 ml-3">
            <CiLocationOn size={20} />
          </div>
          <div>
            <p className="mb-2">آدرس</p>
            <p className="text-sm">
              {" "}
              تهران میدان ونک خیابان ملاصدرا خیابان شاد کوچه باغسرا پلاک ۱۳
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">

        <Button
          size="md"
          variant="text"
          className="lg:flex items-center justify-between text-md"
        >
          <span>ورود</span>
          <HiOutlineLogin size={25} />
        </Button>
        {/* <button>انگلیسی</button> */}
      </div>
    </div>
  );
}
