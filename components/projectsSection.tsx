"use client";
import { ProjectsCarousel } from "./carousel/ProjectsCarousel";
import Link from "next/link";
import { motion } from "framer-motion";
// import SwiperTabSlider from "./carousel/TabCarousel";

interface Project {
  id: string;
  title: string;
  overview:string;
  backdrop_path: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsCarouselProps> = ({
  projects,
}) => {
  return (
    <section
      className="relative bg-section-2-pattern bg-cover overflow-hidden bg-no-repeat bg-center before:content-[''] 
    before:absolute before:left-0 before:top-0 before:w-full before:h-full before:opacity-[0.9] before:z-[0] before:bg-[#1a1919]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-10 py-20 ">
        <div className="order-2 lg:order-1">
          <ProjectsCarousel projects={projects} />
        </div>
        <div className="z-[1] order-1 lg:order-2 flex flex-col justify-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            className="text-xl text-white mb-4 overflow-hidden"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            برخی پروژه های اخیر
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            className="text-white text-justify overflow-hidden"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="overflow-hidden"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
          >
            <Link
              className="align-middle inline-block mt-6 select-none font-bold text-center 
                    uppercase transition-all disabled:opacity-50 disabled:shadow-none 
                    disabled:pointer-events-none py-3 px-6 rounded-lg bg-white 
                    text-gray-900 shadow-md shadow-gray-900/10 hover:shadow-lg 
                    hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none 
                    active:opacity-[0.85] active:shadow-none"
              href="/projects"
            >
              مشاهده همه
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
