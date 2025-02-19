export const getUsefulLinks = (t: (key: string) => string) => [
  {
    items: [
      { title: t("Footer.Links.about"), link: "/about" },
      { title: t("Footer.Links.contact"), link: "/contact" },
      { title: t("Footer.Links.projects"), link: "/projects" },
      { title: t("Footer.Links.tenders"), link: "/tenders" },
      { title: t("Footer.Links.jobs"), link: "/hiring/jobs" },
    ],
  },
];
