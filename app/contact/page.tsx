import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Map from "../../components/googlemap";

export default function Contact() {
  return (
    <>
      <div
        className="relative bg-contact-pattern pt-[80px] lg:pt-[260px] 
        lg:pb-[10px] bg-[top_right] bg-no-repeat bg-fixed
        before:absolute before:content-[''] before:left-0 before:top-0
        before:w-full before:h-full before:opacity-0 before:z-[-1]"
      >
        <nav
          aria-label="breadcrumb"
          className="px-[15px] mx-auto md:max-w-[720px] lg:max-w-[920px]"
        >
          <ol className="flex flex-wrap items-center rounded-md bg-opacity-60 px-[1rem] py-[0.75rem]">
            <li className="flex items-center text-lg font-iransans antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-[#ffa500]">
              <Link href="/" className="opacity-60">
                خانه
              </Link>
              <span className="mx-2 font-sans text-lg antialiased font-normal leading-normal pointer-events-none select-none text-blue-gray-500">
                /
              </span>
            </li>
            <li className="flex items-center font-iransans text-lg antialiased font-normal leading-normal text-blue-gray-900">
              <span>تماس با ما</span>
            </li>
          </ol>
        </nav>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-[50px] pb-[20px] lg:pt-[60px] lg:pb-[30px] px-10 lg:px-30 xl:px-40 mx-auto">
        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] 2xl:py-[25px] shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <FaPhone className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <FaPhone size={45} className="ml-[20px]" color="#ffa500" />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              تلفن
            </h4>
            <p className="mb-0 text-[18px] text-[#777777]">
              021-88660368
              <br />
              021-88660628
            </p>
          </div>
        </div>
        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] overflow-hidden bg-white shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <FaLocationDot className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <FaLocationDot size={45} className="ml-[20px]" color="#ffa500" />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              آدرس
            </h4>
            <p className="mb-0 text-[17px] text-[#777777]">
              تهران، میدان ونک، خیابان ملاصدرا، <br /> خیابان شاد، کوچه باغسرا،
              پلاک ۱۳
            </p>
          </div>
        </div>
        <div className="relative group flex items-center py-5 px-10 lg:py-[20px] lg:px-[30px] shadow-[0_5px_20px_0_rgba(0,0,0,0.15)] overflow-hidden bg-white hover:shadow-[0_5px_60px_0_rgba(0,0,0,0.15)] hover:translate-y-[-10px] transition-all duration-[0.8s]">
          <MdEmail className="absolute text-[70px] left-[10px] bottom-[5px] leading-[1px] font-[700] text-[#000] transition-all duration-[0.8s] opacity-[0.05] group-hover:scale-[2]" />
          <MdEmail size={45} className="ml-[20px]" color="#ffa500" />
          <div className="overflow-hidden">
            <h4 className="mb-[10px] text-[1rem] lg:text-[1.5rem] font-bold">
              ایمیل
            </h4>
            <p className="mb-0 text-[18px] text-[#777777]">
              info@jsk-co.com
              <br /> 
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-[50px] pb-[20px] lg:pt-[60px] lg:pb-[30px] px-10 lg:px-30 xl:px-40 mx-auto">
        <div className="py-[40px] px-[45px] border border-solid border-[#fea925] w-[80%] mr-auto">
          <div className="text-center">
            <h2 className="mb-[10px] text-[25px] font-bold">
              با ما در ارتباط باشید
            </h2>
            <p className="text-[#848484] mb-[20px]">
              نظرات و پیشنهادات خود را برای ما ارسال کنید
            </p>
          </div>
          <form>
            <div>
              <div>
                <input
                  className="w-full mb-[30px] py-3 border border-solid border-[#ddd] pr-[20px] rounded-[15px]"
                  placeholder="نام شما"
                />
              </div>
              <div>
                <input
                  className="w-full mb-[30px] py-3 border border-solid border-[#ddd] pr-[20px] rounded-[15px]"
                  placeholder="پست الکترونیکی"
                />
              </div>
              <div>
                <input
                  className="w-full mb-[30px] py-3 border border-solid border-[#ddd] pr-[20px] rounded-[15px]"
                  placeholder="آدرس وب سایت"
                />
              </div>
            </div>
            <div>
              <textarea
                rows={6}
                className="w-full mb-[30px] py-3 border border-solid border-[#ddd] pr-[20px] rounded-[15px]"
                placeholder="پیام خود را تایپ کنید"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="ارسال پیام"
                className="w-full text-center bg-[#fea925] rounded-[15px] cursor-pointer border 
                border-solid border-[#fea925] h-[52px] font-[600] text-[#fff] text-[18px]
                 hover:bg-[#2c4050] hover:border-[#2c4050] transition-all duration-[0.5s]"
              />
            </div>
          </form>
        </div>
        <div className=" h-[200px] lg:h-full w-[80%]">
          <Map />
        </div>
      </div>
    </>
  );
}
