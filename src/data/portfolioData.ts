import { StaticImageData } from "next/image"

import portfolioThumb_1 from "@/assets/img/portfolio/portfolio1.jpg";
import portfolioThumb_2 from "@/assets/img/portfolio/portfolio2.jpg";
import portfolioThumb_3 from "@/assets/img/portfolio/portfolio3.jpg";
import portfolioThumb_4 from "@/assets/img/portfolio/portfolio4.jpg";
import portfolioThumb_5 from "@/assets/img/portfolio/portfolio5.jpg";
import portfolioThumb_6 from "@/assets/img/portfolio/portfolio6.jpg";

interface DataType {
   id: number,
   thumb: StaticImageData;
   title: string;
   category: string;
}[];

const portfolio_data: DataType[] = [
   {
      id: 1,
      thumb: portfolioThumb_1,
      title: "Mothers of Influence",
      category: "Mothers of Influence",
   },
   {
      id: 2,
      thumb: portfolioThumb_2,
      title: "Mothers of Influence",
      category: "Mothers of Influence",
   },
   {
      id: 3,
      thumb: portfolioThumb_3,
      title: "Mothers of Influence",
      category: "Mothers of Influence",
   },
   {
      id: 4,
      thumb: portfolioThumb_4,
      title: "Mothers of Influence",
      category: "Mothers of Influence",
   },
   {
      id: 5,
      thumb: portfolioThumb_5,
      title: "Mothers of Influence",
      category: "Mothers of Influence",
   },
   {
      id: 6,
      thumb: portfolioThumb_6,
      title: "Mothers of Influence",
      category: "Mothers of Influence",
   },
]

export default portfolio_data;