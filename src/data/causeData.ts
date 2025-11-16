import { StaticImageData } from "next/image";

import causeThumb_1 from "@/assets/img/causes/cause1.jpg";
import causeThumb_2 from "@/assets/img/causes/cause2.jpg";
import causeThumb_3 from "@/assets/img/causes/cause3.jpg";
import causeThumb_4 from "@/assets/img/causes/cause4.jpg";

import cause2Thumb_1 from "@/assets/img/causes/cause-two1.jpg";
import cause2Thumb_2 from "@/assets/img/causes/cause-two2.jpg";
import cause2Thumb_3 from "@/assets/img/causes/cause-two3.jpg";
import cause2Thumb_4 from "@/assets/img/causes/cause-two4.jpg";

import cause3Thumb_1 from "@/assets/img/causes/cause-three1.jpg";
import cause3Thumb_2 from "@/assets/img/causes/cause-three2.jpg";
import cause3Thumb_3 from "@/assets/img/causes/cause-three3.jpg";

import recentCauseThumb_1 from "@/assets/img/widgets/cause1.jpg";
import recentCauseThumb_2 from "@/assets/img/widgets/cause2.jpg";
import recentCauseThumb_3 from "@/assets/img/widgets/cause3.jpg";

interface DataType {
   id: number;
   page:string;
   img: StaticImageData;
   title: string;
   desc?: string;
   raised: number;
   goal: number;
   progress_width?: string | number;
   progress_bg?: string;
   btn_bg?: string;
   price_color?:string;
   item_bg?:string;
   percentage?:number;
}

const cause_data: DataType[] = [
   // home one - 4 causes
   {
      id: 1,
      page:"home_1",
      img: causeThumb_1,
      title: "Back-to-School Drive",
      desc: "Providing school kits, books, and scholarship/exam fee support for underprivileged children.",
      raised: 45600,
      goal: 75000,
      progress_width: "61%",
   },
   {
      id: 2,
      page:"home_1",
      img: causeThumb_2,
      title: "Mothers of Influence",
      desc: "Training mothers and caregivers in child protection, empowerment, and family support.",
      raised: 38900,
      goal: 60000,
      progress_width: "65%",
      progress_bg: "progress-bar--yellow",
      btn_bg: "btn--yellow"
   },
   {
      id: 3,
      page:"home_1",
      img: causeThumb_3,
      title: "Becoming a Better You",
      desc: "Mentorship program for youth focusing on resilience, self-esteem, and essential life skills.",
      raised: 52300,
      goal: 80000,
      progress_width: "65%",
      progress_bg: "progress-bar--green",
      btn_bg: "btn--green"
   },
   {
      id: 4,
      page:"home_1",
      img: causeThumb_4,
      title: "Community Outreach",
      desc: "School visits, Christmas parties, and child advocacy campaigns in local communities.",
      raised: 67800,
      goal: 100000,
      progress_width: "68%",
   },

   // home two - 4 causes
   {
      id: 1,
      page:"home_2",
      img: cause2Thumb_1,
      title: "Back-to-School Drive",
      desc: "Ensuring every child has access to education through school supplies and financial support.",
      raised: 45600,
      goal: 75000,
      percentage: 61,
      progress_bg:"one",
   },
   {
      id: 2,
      page:"home_2",
      img: cause2Thumb_2,
      title: "Mothers of Influence",
      desc: "Empowering mothers with skills and knowledge to protect and nurture their families.",
      raised: 38900,
      goal: 60000,
      percentage: 65,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 3,
      page:"home_2",
      img: cause2Thumb_3,
      title: "Becoming a Better You",
      desc: "Youth mentorship program building resilience and life skills for a brighter future.",
      raised: 52300,
      goal: 80000,
      percentage: 65,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 4,
      page:"home_2",
      img: cause2Thumb_4,
      title: "Community Outreach",
      desc: "Engaging communities through advocacy, events, and support programs for children.",
      raised: 67800,
      goal: 100000,
      percentage: 68,
      progress_bg:"one",
   },

   // home three - 4 causes
   {
      id: 1,
      page:"home_3",
      img: cause3Thumb_1,
      title: "Back-to-School Drive",
      desc: "Providing essential educational resources and financial support to ensure no child is left behind in their academic journey.",
      raised: 45600,
      goal: 75000,
      percentage: 61,
   },   
   {
      id: 2,
      page:"home_3",
      img: cause3Thumb_2,
      title: "Mothers of Influence",
      desc: "Equipping mothers and caregivers with protection skills and empowerment tools to create stronger family foundations.",
      raised: 38900,
      goal: 60000,
      percentage: 65,
      item_bg:"item--green"
   },  
   {
      id: 3,
      page:"home_3",
      img: cause3Thumb_3,
      title: "Becoming a Better You",
      desc: "Comprehensive youth mentorship focusing on personal development, resilience building, and essential life skills training.",
      raised: 52300,
      goal: 80000,
      percentage: 65,
      item_bg:"item--yellow"
   },
   {
      id: 4,
      page:"home_3",
      img: cause3Thumb_1,
      title: "Community Outreach",
      desc: "Direct community engagement through school visits, holiday events, and advocacy campaigns for children's rights.",
      raised: 67800,
      goal: 100000,
      percentage: 68,
   },

   // Inner Page - 4 causes
   {
      id: 1,
      page:"inner_page",
      img: cause2Thumb_1,
      title: "Back-to-School Drive",
      desc: "Providing school kits, books, and scholarship/exam fee support for educational advancement.",
      raised: 45600,
      goal: 75000,
      percentage: 61,
      progress_bg:"one",
   },
   {
      id: 2,
      page:"inner_page",
      img: cause2Thumb_2,
      title: "Mothers of Influence",
      desc: "Training programs for mothers and caregivers in protection and empowerment techniques.",
      raised: 38900,
      goal: 60000,
      percentage: 65,
      progress_bg:"two",
      btn_bg:"btn--yellow",
      price_color:"cause-price--yellow",
      item_bg:"cause-yellow",
   },
   {
      id: 3,
      page:"inner_page",
      img: cause2Thumb_3,
      title: "Becoming a Better You",
      desc: "Youth mentorship focusing on resilience, self-esteem, and essential life skills development.",
      raised: 52300,
      goal: 80000,
      percentage: 65,
      progress_bg:"three",
      btn_bg:"btn--green",
      price_color:"cause-price--green",
      item_bg:"cause-green"
   },
   {
      id: 4,
      page:"inner_page",
      img: cause2Thumb_4,
      title: "Community Outreach",
      desc: "School visits, Christmas parties, and child advocacy campaigns in local communities.",
      raised: 67800,
      goal: 100000,
      percentage: 68,
      progress_bg:"one",
   },

   // recent cause - 4 causes
   {
      id: 1,
      page:"inner_page_details",
      img: recentCauseThumb_1,
      title: "Back-to-School Drive",
      raised: 45600,
      goal: 75000,
   }, 
   {
      id: 2,
      page:"inner_page_details",
      img: recentCauseThumb_2,
      title: "Mothers of Influence",
      raised: 38900,
      goal: 60000,
   }, 
   {
      id: 3,
      page:"inner_page_details",
      img: recentCauseThumb_3,
      title: "Becoming a Better You",
      raised: 52300,
      goal: 80000,
   },
   {
      id: 4,
      page:"inner_page_details",
      img: recentCauseThumb_1,
      title: "Community Outreach",
      raised: 67800,
      goal: 100000,
   },
]

export default cause_data;