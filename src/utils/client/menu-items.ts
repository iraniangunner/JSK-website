export const getMenuItems = (t: (key: string) => string) => [
  { linkTitle: t("Menu.home"), linkAddress: "/" },
  {
    linkTitle: t("Menu.services"),
    subLinks: [
      { title: t("Menu.commerce"), linkAddress: "/services/commerce" },
      { title: t("Menu.operation"), linkAddress: "/services/operation" },
      { title: t("Menu.management"), linkAddress: "/services/management" },
    ],
  },
  { linkTitle: t("Menu.certifications"), linkAddress: "/certifications" },
  { linkTitle: t("Menu.projects"), linkAddress: "/projects" },
  { linkTitle: t("Menu.tenders"), linkAddress: "/tenders" },
  // { linkTitle: t("Menu.about"), linkAddress: "/about" },
  { linkTitle: t("Menu.news"), linkAddress: "/news" },
  {
    linkTitle: t("Menu.cooperation"),
    subLinks: [
      { title: t("Menu.jobs"), linkAddress: "/hiring/jobs" },
      {
        title: t("Menu.companyCooperation"),
        linkAddress: "/hiring/cooperation",
      },
    ],
  },
  { linkTitle: t("Menu.contact"), linkAddress: "/contact" },
];
