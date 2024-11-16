import Image from "next/image";
import { FaDotCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const commerceItems = [
  {
    id: 0,
    text: "واردات کالا به ساده‌ترین شکل ممکن انجام می‌شود. از مشاوره اولیه و اخذ مجوزهای لازم تا ترخیص کالا از گمرک، تمامی مراحل توسط تیم متخصص ما انجام می‌شود.",
  },
  {
    id: 1,
    text: "حتی در شرایط تحریم‌ها، ما با بهره‌گیری از دانش و تجربه خود، صادرات محصولات شما را به صورت ایمن و مطمئن به سراسر دنیا انجام می‌دهیم.",
  },
  {
    id: 2,
    text: "تمامی مجوزهای مورد نیاز برای واردات و صادرات کالا، توسط کارشناسان ما پیگیری و اخذ می‌شود.",
  },
  {
    id: 3,
    text: "از طریق شبکه گسترده‌ای از شرکت‌های حمل و نقل، کالاهای شما را به صورت ایمن و به موقع به مقصد می‌رسانیم.",
  },
  {
    id: 4,
    text: "تسلط بر قوانین و مقررات گمرکی، اظهارنامه‌های گمرکی را با دقت و سرعت بالا تهیه و کالاهای شما را از گمرک ترخیص می‌کنیم.",
  },
];

const commerceSecondItems = [
  {
    id: 0,
    text: " انجام امور حمل و نقل بین‌المللی دریایی، زمینی و هوایی در زمینه صادرات و واردات ",
  },
  {
    id: 1,
    text: "رزرو کانتینر",
  },
  {
    id: 2,
    text: "انجام امور حمل داخلی",
  },
  {
    id: 3,
    text: "پیگیری و نظارت محموله مشتریان",
  },
  {
    id: 4,
    text: "کراس استافینگ",
  },
  {
    id: 5,
    text: "فری تایم بالا",
  },
  {
    id: 6,
    text: "حمل کالاهای یخچالی و کالاهای خطرناک",
  },
  {
    id: 7,
    text: "تعرفه مناسب جهت دموراژ",
  },
  {
    id: 8,
    text: "حمل کالاهای برند و تحریمی",
  },
  {
    id: 9,
    text: "سوییچ بارنامه",
  },
  {
    id: 10,
    text: "انجام امور اکسپرس کالا",
  },
];

export function SingleService({ service }: { service: any }) {
  return (
    <div className="my-12 mx-8">
      <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <Image
          src={"https://image.tmdb.org/t/p/w500" + service.backdrop_path}
          width={300}
          height={300}
          className="h-auto max-w-full rounded-t-lg w-full"
          alt="project-image"
        /> */}
        <div className="flex items-center justify-center">
          {/* <img
            src={"/images/" + service.image}
            className="h-auto max-w-full w-full"
          /> */}
        </div>

        {!service.description && (
          <div>
            <p className="mt-6 text-lg font-bold">خدمات جامع گمرکی</p>
            <ul>
              {commerceItems.map((item) => (
                <li className="my-3 flex items-center gap-2" key={item.id}>
                  {/* <FaCheck color="#ffa500" /> */}
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="mt-6">{service.description}</p>
      </div>
      {!service.description && (
        <>
          <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="mt-6 text-lg font-bold">خدمات حمل خارجی و داخلی </p>
              <p className="mt-6">
                شرکت ژیوار صنعت کیان در بخش حمل و نقل و ارسال کالا به طرق مختلف
                در حوزه واردات و صادرات، با نمایندگی در کشورهای آسیایی، اروپایی،
                خاورمیانه و با کمک نمایندگان خارجی مناسب‌ترین و بهترین قیمت و
                خدمات را ارائه می‌دهد.{" "}
              </p>
              <ul>
                {commerceSecondItems.map((item) => (
                  <li className="my-3 flex items-center gap-2" key={item.id}>
                    {/* <FaCheck color="#ffa500" /> */}
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              {/* <img
                src={"/images/" + "golgohar_2.jpg"}
                className="h-auto max-w-full w-full"
              /> */}
            </div>
          </div>

          <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex items-center justify-center">
              {/* <img
                src={"/images/" + "gol1.jpg"}
                className="h-auto max-w-full w-full"
              /> */}
            </div>
            <div>
              <p className="mt-6 text-lg font-bold">
                خدمات واردات و صادرات کالا
              </p>
              <p className="mt-6">
                واردات و صادرات کالا یکی از روش‌های افزایش تولید ناخالص ملی است
                و برای اقتصاد هر کشور حیاتی محسوب می‌شود. صادرات علاوه بر این که
                سود فراوانی برای شرکت یا فرد صادرکننده دارد، با ورود ارز موجب
                بهبود اقتصاد کشور نیز می‌شود. صادرات کالا در بازارهای جهانی از
                حساسیت‌های خاصی برخوردار است و در صورت عدم رعایت نکات اصولی،
                باعث اتلاف سرمایه مالی و انسانی می‌شود.
              </p>
              <p className="mt-6">
                اولین قدم در انجام واردات و صادرات کالا، بازاریابی است. واردات و
                صادرات کالا انواع مختلفی دارد و می‌توان آن را از منظری به ۲ نوع
                قطعی و موقت و از منظری دیگر به ۲ نوع مستقیم و غیر مستقیم
                بخش‌بندی کرد.
              </p>
              <p className="mt-6">
                اما برای واردات و صادرات کالا چه باید کرد؟ بازرگانی از نظر خیلی
                از افراد کاری بسیار جالب و هیجان انگیز است. ولی صادرات و واردات
                هم مانند هر کار دیگری نیاز به دانش، تخصص و تجربه دارد. اگر
                نمیدانید برای صادرات چه باید کرد، وقت آن رسیده است که به ما
                اعتماد کنید. صفر تا صد خدمات واردات و صادرات را به ما بسپارید
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
