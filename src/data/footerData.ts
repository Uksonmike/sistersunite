interface DataType {
  id: number;
  page: string;
  widget_title: string;
  footer_link: {
    link: string;
    link_title: string;
  }[];
}

const footer_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    widget_title: "About",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "/about", link_title: "About Us" },
      { link: "/causes", link_title: "Our Programs" },
      { link: "/contact", link_title: "Contact Us" },
      {
        link: "https://flutterwave.com/donate/plyjpesfl4wx",
        link_title: "Donate",
      },
      { link: "/sisters-unite-brochure.pdf", link_title: "Our Brochure" },
    ],
  },
  {
    id: 2,
    page: "home_1",
    widget_title: "Our Programs",
    footer_link: [
      { link: "#", link_title: "Back-to-School Drive" },
      { link: "#", link_title: "Mothers of Influence" },
      { link: "#", link_title: " Becoming a Better You (BABY)" },
      { link: "#", link_title: "Community Outreach Projects" },
    ],
  },
  {
    id: 3,
    page: "home_1",
    widget_title: "Explore",
    footer_link: [
      { link: "#", link_title: "E-Brochure" },
      { link: "#", link_title: "Contact Us" },
      { link: "#", link_title: "Gallery" },
    ],
  },

  // home two

  {
    id: 1,
    page: "home_2",
    widget_title: "About",
    footer_link: [
      { link: "#", link_title: "Home" },
      { link: "#", link_title: "Donation" },
      { link: "#", link_title: "About us" },
      { link: "#", link_title: "Event" },
    ],
  },
  {
    id: 2,
    page: "home_2",
    widget_title: "Quick links",
    footer_link: [
      { link: "#", link_title: "Causes" },
      { link: "#", link_title: "About" },
      { link: "#", link_title: "New campaign" },
      { link: "#", link_title: "Site map" },
    ],
  },
];

export default footer_data;
