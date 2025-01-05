import Backdrop from "./backdrop";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const strings = [
  { linkTitle: "صفحه اصلی", linkAddress: "/" },
  {
    linkTitle: "خدمات",
    subLinks: [
      {
        title: "بازرگانی و تامین اقلام پروژه",
        linkAddress: "/services/commerce",
      },
      {
        title: "بهره برداری پروژه های صنعتی و معدنی",
        linkAddress: "/services/operation",
      },
      {
        title: "مدیریت پروژه های صنعتی و معدنی",
        linkAddress: "/services/management",
      },
    ],
  },

  { linkTitle: "گواهینامه ها و جوایز", linkAddress: "/certifications" },
  { linkTitle: "پروژه ها", linkAddress: "/projects" },
  { linkTitle: "مناقصات", linkAddress: "/tenders" },

  { linkTitle: "درباره ما", linkAddress: "/about" },
  {
    linkTitle: "همکاری با ما",
    subLinks: [
      {
        title: "فرصت های شغلی",
        linkAddress: "/hiring/jobs",
      },
      {
        title: "همکاری شرکت ها",
        linkAddress: "/hiring/contractor",
      },
    ],
  },
  { linkTitle: "تماس با ما", linkAddress: "/contact" },
];

const MenuModal = ({
  modalOpen,
  handleClose,
}: {
  modalOpen: () => void;
  handleClose: () => void;
}) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  function Icon({ id, open }: { id: any; open: any }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  const dropIn = {
    hidden: {
      x: 500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
    exit: {
      x: 500,
      opacity: 0,
      transition: {
        duration: 0.3,
        type: "spring",
      },
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#ffffff] text-lg w-[70%] sm:w-[50%] md:w-[35%] shadow-2xl absolute top-[20px] right-[20px] bottom-[20px] rounded-lg overflow-auto"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex justify-end p-3">
          <button
            type="button"
            className="bg-[#16161a0a] rounded-[14px] p-2"
            onClick={handleClose}
          >
            <IoMdClose size={25} color="black" />
          </button>
        </div>
        <ul className="pb-3 pt-1 px-8">
          {strings.map((link, index) =>
            link.subLinks ? (
              <li key={link.linkTitle} className="my-2">
                <Accordion
                  open={open === index}
                  icon={<Icon id={index} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(index)}
                    className="text-[#04244c] text-[18px] font-inherit hover:text-black transition-colors ease-linear duration-200 "
                  >
                    {link.linkTitle}
                  </AccordionHeader>
                  <AccordionBody className="font-inherit font-[500]">
                    <ul>
                      {link.subLinks.map((subLink) => (
                        <li
                          className="my-2 text-[#04244c] hover:text-black transition-colors ease-linear duration-200"
                          key={subLink.linkAddress}
                        >
                          <Link
                            href={subLink.linkAddress}
                            className="flex items-center p-2"
                            onClick={handleClose}
                          >
                            <span className="ml-4">{subLink.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionBody>
                </Accordion>
              </li>
            ) : (
              <li
                key={link.linkTitle}
                className="my-4 text-[#04244c] text-[18px] font-[600] hover:text-black transition-colors ease-linear duration-200"
              >
                <Link
                  href={link.linkAddress}
                  className="flex items-center py-2"
                  onClick={handleClose}
                >
                  <span className="ml-4">{link.linkTitle}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </motion.div>
    </Backdrop>
  );
};

export default MenuModal;
