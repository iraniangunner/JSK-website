import { HiOutlineLogin } from "react-icons/hi";
import { Button } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { Typography } from "@material-tailwind/react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Image from "next/image";

export default function TopNav() {
  return (
    <div className="hidden sticky top-0 lg:grid grid-cols-4 bg-white pt-4">
      <div className="flex justify-center items-center">
        <Typography
          as="a"
          href="#"
          className="relative cursor-pointer font-medium 
          before:content-[''] before:absolute before:right-[100%] 
          before:bottom-0 before:border-l-[50px] before:border-l-transparent 
          before:border-b-[75px] before:border-b-[#ffa500]
          after:content-[''] after:absolute after:left-[100%] 
          after:bottom-0 after:min-w-[100vw] after:h-[100%] after:bg-[#ffa500]
          "
        >
          <Image src="./jsk.svg" alt="JSK Logo" width={200} height={24} />
        </Typography>
      </div>

      <div className="flex justify-center items-center gap-4 col-span-2">
        <div className="flex items-center justify-center ml-4">
          <div className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] hover:text-white transition-all rounded-full p-2 ml-3">
            <MdOutlineLocationOn size={20} />
          </div>
          <div>
            <p className="mb-2 font-bold">آدرس</p>
            <p className="text-sm">
              {" "}
              تهران میدان ونک خیابان ملاصدرا خیابان شاد کوچه باغسرا پلاک ۱۳
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center ml-4">
          <div className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] hover:text-white transition-all rounded-full p-2 ml-3">
            <FiPhoneIncoming size={20} />
          </div>
          <div>
            <p className="mb-2 font-bold">تلفن</p>
            <p className="text-sm">021-88660368</p>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="border border-[#ffa500] text-[#ffa500] hover:bg-[#ffa500] 
          hover:text-white transition-all rounded-full p-2 ml-3">
            <HiOutlineMail size={20} />
          </div>
          <div>
            <p className="mb-2 font-bold">ایمیل</p>
            <p className="text-sm">info@jsk-co.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button
          size="md"
          variant="text"
          className="lg:flex items-center justify-between text-md hover:bg-opacity-0 
          focus:bg-opacity-0 active:bg-opacity-0 text-[#737272] hover:bg-[#fff] 
          hover:text-[#323131] hover:transition-all duration-[0.4s] delay-0 ease-in-out"
        >
          <BsFillPersonFill size={20} />
          <span className="mr-1">ورود</span>
        </Button>
      </div>
    </div>
  );
}
