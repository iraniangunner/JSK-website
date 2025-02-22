export const getServicesData = (t: (key: string) => string) => [
  {
    id: 0,
    title: t("ServicesAccordion.commerce.title"),
    desc: t("ServicesAccordion.commerce.desc"),
    link: "/services/commerce",
  },
  {
    id: 1,
    title: t("ServicesAccordion.operation.title"),
    desc: t("ServicesAccordion.operation.desc"),
    link: "/services/operation",
  },
  {
    id: 2,
    title: t("ServicesAccordion.management.title"),
    desc: t("ServicesAccordion.management.desc"),
    link: "/services/management",
  },
];
