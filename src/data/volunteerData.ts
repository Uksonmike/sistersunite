import { StaticImageData } from "next/image";

import volunteerThumb_1 from "@/assets/img/valunteer/valunteer1.jpg";
import volunteerThumb_2 from "@/assets/img/valunteer/valunteer2.jpg";
import volunteerThumb_3 from "@/assets/img/valunteer/valunteer3.jpg";
import volunteerThumb_4 from "@/assets/img/valunteer/valunteer4.jpg";
import volunteerThumb_5 from "@/assets/img/valunteer/valunteer5.jpg";
import volunteerThumb_6 from "@/assets/img/valunteer/valunteer6.jpg";

import volunteer2Thumb_1 from "@/assets/img/valunteer/volunteer-two1.jpg";
import volunteer2Thumb_2 from "@/assets/img/valunteer/volunteer-two2.jpg";
import volunteer2Thumb_3 from "@/assets/img/valunteer/volunteer-two3.jpg";
import volunteer2Thumb_4 from "@/assets/img/valunteer/volunteer-two4.jpg";
import volunteer2Thumb_5 from "@/assets/img/valunteer/volunteer-two5.jpg";
import volunteer2Thumb_6 from "@/assets/img/valunteer/volunteer-two6.jpg";
import volunteer2Thumb_7 from "@/assets/img/valunteer/volunteer-two7.jpg";
import volunteer2Thumb_8 from "@/assets/img/valunteer/volunteer-two8.jpg";

import volunteer3Thumb_1 from "@/assets/img/valunteer/volunteer-three1.jpg";
import volunteer3Thumb_2 from "@/assets/img/valunteer/volunteer-three2.jpg";
import volunteer3Thumb_3 from "@/assets/img/valunteer/volunteer-three3.jpg";
import volunteer3Thumb_4 from "@/assets/img/valunteer/volunteer-three4.jpg";
import volunteer3Thumb_5 from "@/assets/img/valunteer/volunteer-three5.jpg";
import volunteer3Thumb_6 from "@/assets/img/valunteer/volunteer-three6.jpg";
import volunteer3Thumb_7 from "@/assets/img/valunteer/volunteer-three7.jpg";
import volunteer3Thumb_8 from "@/assets/img/valunteer/volunteer-three8.jpg";
import nkeiruka from "@/assets/img/valunteer/nkeiruka.jpeg";
import adeola from "@/assets/img/valunteer/adeola.jpeg";
import belema from "@/assets/img/valunteer/belema.jpeg";
import chika from "@/assets/img/valunteer/chika.jpeg";
import funmi from "@/assets/img/valunteer/funmi.jpeg";
import mary from "@/assets/img/valunteer/mary.jpeg";
import oluwaremilekun from "@/assets/img/valunteer/oluwaremilekun.jpeg";
import Victoria from "@/assets/img/valunteer/Victoria.jpeg";
import folasade from "@/assets/img/valunteer/folasade.jpeg";

interface DataType {
  id: number;
  page: string;
  thumb: StaticImageData;
  name: string;
  item_bg?: string;
  designation?: string;
  short_description?: string;
}

const volunteer_data: DataType[] = [
  {
    id: 0,
    page: "home_1",
    thumb: nkeiruka,
    name: "Nkeiruka Obi",
    designation: "Founder",
    short_description:
      "Serving vulnerable children and advancing faith-driven community impact",
    item_bg: "valunteer-item--green",
  },
  {
    id: 1,
    page: "home_1",
    thumb: mary,
    name: "Mary Ofili",
    designation: "Past President SUC",
    short_description:
      "I am passionate about people transformation — spiritually, professionally, and practically — through structured systems, leadership, and service.",
    item_bg: "valunteer-item--green",
  },
  {
    id: 2,
    page: "home_1",
    thumb: Victoria,
    name: "Victoria Oluchi Ogundipe",
    designation: "Vice President SUC",
    short_description: "Interested in helping children and young adults.",
    item_bg: "valunteer-item--green",
  },
  {
    id: 41,
    page: "home_1",
    thumb: folasade,
    designation: "Chairman Board of Advisors, SUC ",
    short_description:
      "I Have passion for disavantaged children and passion to rescue girls in prostitution.",
    name: "Folasade Osinubi",
    item_bg: "valunteer-item--green",
  },
  {
    id: 3,
    page: "home_1",
    thumb: volunteerThumb_1,
    name: "Olufemi Bola-Sadipe",
    designation: "Board of Advisor",
    short_description:
      "Bola-Sadipe & Co (Chartered Accountants) with offices in Lagos, Kaduna (Nigeria) and Accra (Ghana).",
    item_bg: "valunteer-item--green",
  },
  {
    id: 4,
    page: "home_1",
    thumb: volunteerThumb_2,
    designation: "Program Coordinator",
    short_description:
      "Coordinator at Sisters Unite for Children. I’m passionate about empowering children through education and creating opportunities that make a real impact.",
    name: "Chidera Obi",
    item_bg: "valunteer-item--green",
  },
  {
    id: 5,
    page: "home_1",
    thumb: belema,
    designation: "Advisor/Expert/Project",
    short_description: "Cooking & Traveling",
    name: "Belema Peter",
    item_bg: "valunteer-item--green",
  },
  {
    id: 6,
    page: "home_1",
    thumb: oluwaremilekun,
    name: "Mrs Oluwaremilekun Soyannwo",
    designation: "Partner at SUC",
    short_description:
      "Working with children and adults with special or complex learning needs.",
    item_bg: "valunteer-item--green",
  },
  {
    id: 7,
    page: "home_1",
    thumb: funmi,
    name: "Funmi Bolarinwa",
    designation: "Volunteer",
    short_description: "Children and Talent Development",
    item_bg: "valunteer-item--green",
  },
  {
    id: 8,
    page: "home_1",
    thumb: volunteerThumb_3,
    name: "Yetunde Onanuga",
    designation: "Member",
    short_description:
      "My name is Sister Yetunde Onanuga, an administrator and also a former Deputy Governor of Ogun State. An active member of the Sisters Unite for Children since inception. l love cooking and also take pleasure in mentoring the young ones especially the 'girl child'.",
    item_bg: "valunteer-item--green",
  },
  {
    id: 9,
    page: "home_1",
    thumb: adeola,
    name: "Adeola Folashade Fadojutimi",
    designation: "Member",
    short_description:
      "A Teacher by training and presently serving as a member of the Active Participant group. Interested in Soul winning.",
    item_bg: "valunteer-item--green",
  },
  {
    id: 10,
    page: "home_1",
    thumb: chika,
    name: "Chika Sanni",
    designation: "Member",
    short_description:
      "Chika has been a member of Sisters Unite for Children Association since 2005. She worked with Citibank Nigeria Limited where she retired after 35 years as a Senior Vice President. She currently serves as a Non-Executive Director at Thrive Microfinance Bank Limited, overseeing Risk Control and Operations. In her free time, she enjoys gardening, reading, and mentoring teenagers and youths. She is a Sunday School Teacher and is actively involved in her local church.",
    item_bg: "valunteer-item--green",
  },

  // home two

  {
    id: 1,
    page: "home_2",
    thumb: volunteer2Thumb_1,
    name: "Brooklyn Simmons",
  },
  {
    id: 2,
    page: "home_2",
    thumb: volunteer2Thumb_2,
    name: "Savannah Nguyen",
    item_bg: "valunteer-two-item__des--yellow",
  },
  {
    id: 3,
    page: "home_2",
    thumb: volunteer2Thumb_3,
    name: "Darrell Steward",
    item_bg: "valunteer-two-item__des--green",
  },
  {
    id: 4,
    page: "home_2",
    thumb: volunteer2Thumb_4,
    name: "Leslie Alexander",
  },
  {
    id: 5,
    page: "home_2",
    thumb: volunteer2Thumb_5,
    name: "Brooklyn Simmons",
  },
  {
    id: 6,
    page: "home_2",
    thumb: volunteer2Thumb_6,
    name: "Savannah Nguyen",
    item_bg: "valunteer-two-item__des--yellow",
  },
  {
    id: 7,
    page: "home_2",
    thumb: volunteer2Thumb_7,
    name: "Darrell Steward",
    item_bg: "valunteer-two-item__des--green",
  },
  {
    id: 8,
    page: "home_2",
    thumb: volunteer2Thumb_8,
    name: "Leslie Alexander",
  },

  // home three

  {
    id: 1,
    page: "home_3",
    thumb: volunteer3Thumb_1,
    name: "Brooklyn Simmons",
  },
  {
    id: 2,
    page: "home_3",
    thumb: volunteer3Thumb_2,
    name: "Savannah Nguyen",
  },
  {
    id: 3,
    page: "home_3",
    thumb: volunteer3Thumb_3,
    name: "Darrell Steward",
  },
  {
    id: 4,
    page: "home_3",
    thumb: volunteer3Thumb_4,
    name: "Leslie Alexander",
  },
  {
    id: 5,
    page: "home_3",
    thumb: volunteer3Thumb_5,
    name: "Brooklyn Simmons",
  },
  {
    id: 6,
    page: "home_3",
    thumb: volunteer3Thumb_6,
    name: "Savannah Nguyen",
  },
  {
    id: 7,
    page: "home_3",
    thumb: volunteer3Thumb_7,
    name: "Darrell Steward",
  },
  {
    id: 8,
    page: "home_3",
    thumb: volunteer3Thumb_8,
    name: "Leslie Alexander",
  },
];

export default volunteer_data;
