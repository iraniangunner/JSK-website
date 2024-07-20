"use client";
import { ProjectsCarousel } from "./carousel/ProjectsCarousel";
import Link from "next/link";
import { motion } from "framer-motion";
// import SwiperTabSlider from "./carousel/TabCarousel";

interface Project {
  id: string;
  title: string;
  overview: string;
  backdrop_path: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export const ProjectsSectionUI: React.FC<ProjectsCarouselProps> = ({
  projects,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto gap-10 py-20 ">
      <div className="order-2 lg:order-1">
        <ProjectsCarousel projects={projects} />
      </div>
      <div className="z-[1] order-1 lg:order-2 flex flex-col justify-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          className="text-xl mb-4 overflow-hidden select-none"
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
          className="text-justify overflow-hidden select-none"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
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
            href="/projects"
            className="inline-block px-4 py-2 text-white bg-[#ffa500] 
                mt-8 border border-[#ffa500] hover:bg-white hover:text-[#ffa500] 
                transition-all"
          >
            مشاهده همه
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
