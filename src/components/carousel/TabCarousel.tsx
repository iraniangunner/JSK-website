import React, { useState, useRef, useEffect } from "react";
// import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const tabs: string[] = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"];

const SwiperTabSlider: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeTab);
    }
  }, [activeTab]);

  return (
    <div className="flex">
      {/* Tabs */}
      <div className="w-1/4">
        <div className="flex flex-col">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`p-4 text-left ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Swiper */}
      <div className="w-3/4">
        <Swiper
          onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
          ref={swiperRef}
          slidesPerView={1}
          allowTouchMove={false}
          spaceBetween={10}
          className="h-full"
        >
          {tabs.map((tab, index) => (
            <SwiperSlide className="h-full" key={index}>
              <div className="p-8 h-full bg-gray-100">{`Content for ${tab}`}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperTabSlider;
