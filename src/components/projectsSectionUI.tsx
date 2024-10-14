"use client";
import { ProjectsCarousel } from "./carousel/ProjectsCarousel";
import Link from "next/link";
import { motion } from "framer-motion";

// interface Project {
//   id: string;
//   title: string;
//   overview: string;
//   backdrop_path: string;
// }

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
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
          پروژه های اخیر
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          className="text-justify overflow-hidden select-none leading-8"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
        >
          با توجه به طبیعت حاکم بر تمامی پروژه‌های بزرگ ، پیچیدگی‌های اجرایی در
          حال افزایش است، به طوری که داده‌های پیچیده، کنترل و سیستم ایمنی از
          اهمیت ویژه‌ای برخوردار می‌باشند. علاوه بر این، انتظارات بالاتر در
          حوزه‌های بهره‌وری، قابلیت اطمینان و ایمنی و همچنین محیط‌های پرتکاپویی
          که پروژه‌ها در آن‌ها اجرا می‌گردند، تیم‌های طراحی و اجرایی را بیش از
          پیش به چالش می‌کشند. شرکت ژیوار صنعت کیان نیز بر همین اساس با تکیه بر
          دانش و تجربیات خود و برنامه‌ریزی و بهینه‌سازی عملکرد با «رویکرد
          سیستمی» جهت دستیابی به اهداف خود و اجرای بهینه کارها تلاش نموده است که
          خلاصه‌ای از آن به نمایش گذاشته شده است.
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
            className="inline-block px-4 py-2 text-white bg-[#ffa500] select-none
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
