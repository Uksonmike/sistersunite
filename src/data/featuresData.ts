import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg"
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg"
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg"

interface DataType {
   id: number;
   page:string;
   icon_bg?: string;
   icon_name?: string;
   title: string;
   desc: string;
   btn_bg?: string;
   bg_img?: StaticImageData;
   item_bg?:string;
}

const features_data: DataType[] = [
   // home_1 - Objectives
   {
      id: 1,
      page:"home_1",
      icon_name: "flaticon-help",
      title: "Child Protection",
      desc: "Protect vulnerable children from abuse, neglect, and exploitation through comprehensive safeguarding programs.",
   },
   {
      id: 2,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Education Access",
      desc: "Improve access to education and provide scholarships for underserved children to ensure equal learning opportunities.",
   },
   {
      id: 3,
      page:"home_1",
      icon_name: "flaticon-donation",
      icon_bg: "feature-item__icon--yellow",
      title: "Empowerment",
      desc: "Empower mothers and caregivers with knowledge and skills to safeguard children and strengthen families.",
   },
   {
      id: 4,
      page:"home_1",
      icon_name: "flaticon-solidarity",
      icon_bg: "feature-item__icon--green",
      title: "Community Mobilization",
      desc: "Mobilize volunteers and stakeholders for child-focused initiatives and community development programs.",
   },

   // home one single features - Objectives
   {
      id: 1,
      page:"single_features",
      title: "Child Protection",
      desc: "Protect vulnerable children from abuse, neglect, and exploitation through comprehensive safeguarding programs.",
   },
   {
      id: 2,
      page:"single_features",
      title: "Education Access",
      desc: "Improve access to education and provide scholarships for underserved children to ensure equal learning opportunities.",
      btn_bg: "btn--yellow",
   },
   {
      id: 3,
      page:"single_features",
      title: "Advocacy & Policy",
      desc: "Advocate for child rights and influence policy change to create lasting systemic impact for children.",
      btn_bg: "btn--green",
   },

   // home two - Objectives

   {
      id:1,
      page:"home_2",
      icon_name:"flaticon-help",
      title:"Child Protection",
      desc:"Protect vulnerable children from abuse, neglect, and exploitation through comprehensive safeguarding.",
   },
   {
      id:2,
      page:"home_2",
      icon_name:"flaticon-donation",
      title:"Education Access",
      desc:"Improve access to education and provide scholarships for underserved children in need.",
      item_bg:"feature-item--green",
   },
   {
      id:3,
      page:"home_2",
      icon_name:"flaticon-solidarity",
      title:"Community Empowerment",
      desc:"Empower mothers, caregivers, and communities with knowledge and skills for child protection.",
      item_bg:"feature-item--yellow",
   },

   // home three - Objectives
   
   {
      id:1,
      page:"home_3",
      bg_img:features3Bg_1,
      icon_name:"flaticon-solidarity",
      title:"Child Protection",
      desc:"Comprehensive programs to protect vulnerable children from abuse, neglect, and exploitation in our communities.",
   }, 
   {
      id:2,
      page:"home_3",
      bg_img:features3Bg_2,
      icon_name:"flaticon-heart",
      title:"Education Support",
      desc:"Ensuring equal learning opportunities through scholarships and educational resources for underserved children.",
   }, 
   {
      id:3,
      page:"home_3",
      bg_img:features3Bg_3,
      icon_name:"flaticon-help",
      title:"Advocacy & Policy",
      desc:"Advocating for child rights and influencing policy change to create lasting systemic impact for children's welfare.",
   },
]

export default features_data;