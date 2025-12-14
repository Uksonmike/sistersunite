interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: true,
        title: "Home",
        link: "/", 
    },
    {
        id: 2,
        has_dropdown: true,
        title: "About Us",
        link: "/about", 
    },
    {
        id: 3,
        has_dropdown: true,
        title: "Our Programs",
        link: "/causes", 
          sub_menus: [
            { link: "/causes-details/1", title: "Back-to-School Drive" },
            { link: "/causes-details/2", title: "Mothers of Influence" }, 
            { link: "/causes-details/3", title: "Becoming a Better You (BABY)" }, 
            { link: "/causes-details/4", title: "Community Outreach Projects" } 
        ],
    },
    {
        id: 4,
        has_dropdown: true,
        title: "Gallery",
        link: "/portfolio", 
    },
    {
        id: 5,
        has_dropdown: true,
        title: "Contact Us",
        link: "/contact", 
    },
     
];
export default menu_data;
