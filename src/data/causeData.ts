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

// Define the structure for the detail page features
interface FeatureType {
   icon: string;
   title: string;
   desc: string;
   item_bg?: string;
}

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

   // --- NEW FIELDS FOR CAUSE DETAILS PAGE ---
   detail_subtitle?: string;
   detail_desc_1?: string | JSX.Element;
   detail_desc_2?: string | JSX.Element;
   detail_desc_3?: string | JSX.Element;
   detail_features?: FeatureType[];
}

// Default feature set to use for examples
const default_features: FeatureType[] = [
   {
      icon: "flaticon-help",
      title: "Direct Support",
      desc: "Funds go directly into purchasing supplies or fees.",
   },
   {
      icon: "flaticon-heart",
      title: "Community Impact",
      desc: "Every donation strengthens the local community.",
      item_bg: "feature-item__icon--green",
   },
   {
      icon: "flaticon-donation",
      title: "Measurable Results",
      desc: "Track the positive outcome of your contribution.",
      item_bg: "feature-item__icon--yellow"
   },
];


const cause_data: DataType[] = [
   // home one - 4 causes (with detail data)
   {
      id: 1,
      page:"home_1",
      img: causeThumb_1,
      title: "Back-to-School Drive",
      desc: "Providing school kits, books, and scholarship/exam fee support for underprivileged children.",
      raised: 45600,
      goal: 75000,
      progress_width: "61%",
      detail_subtitle: "The Power of Educational Opportunity",
      detail_desc_1: "The Back-to-School Drive is our flagship initiative, focused on eradicating educational barriers for children from low-income families. We provide essential school supplies, uniforms, and financial assistance to ensure every child can start and stay in school with confidence. Education is the bedrock of a successful future, and your support makes it possible.",
      detail_desc_2: "Our program doesn't just hand out supplies; we partner with local schools and community leaders to identify children who are most at risk of dropping out due to financial constraints. This targeted approach ensures maximum impact and accountability for every penny donated. The goal is long-term academic success.",
      detail_desc_3: "By contributing to this drive, you are investing directly in a child's future, giving them the tools and confidence to pursue their dreams. It's more than a school kit; it's a belief in their potential.",
      detail_features: default_features,
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
      btn_bg: "btn--yellow",
      detail_subtitle: "Empowering Mothers, Protecting Children",
      detail_desc_1: "The 'Mothers of Influence' program recognizes that mothers are the primary caregivers and protectors in a child's life. We provide intensive workshops focused on child protection laws, recognizing signs of abuse, economic empowerment strategies, and positive parenting techniques. A strong mother builds a secure home.",
      detail_desc_2: "Our curriculum is developed by experts in child psychology and social work, ensuring that mothers gain practical, actionable knowledge. By giving them the right tools, we are creating a protective buffer around the children and breaking cycles of disadvantage.",
      detail_desc_3: "Your donation helps fund training materials, workshop venues, and expert facilitators, enabling us to reach hundreds of caregivers each year and create safer, more nurturing family environments.",
      detail_features: default_features.map(f => ({...f, icon: f.icon === 'flaticon-help' ? 'flaticon-donation' : f.icon, item_bg: f.item_bg === 'feature-item__icon--green' ? 'feature-item__icon--yellow' : f.item_bg})),
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
      btn_bg: "btn--green",
      detail_subtitle: "Building Resilience and Leadership in Youth",
      detail_desc_1: "This mentorship program targets teenagers and young adults, providing a safe space to develop crucial life skills often missed in traditional schooling. We focus on goal setting, conflict resolution, mental health awareness, and career guidance, turning today's youth into tomorrow's leaders.",
      detail_desc_2: "Mentors are successful professionals who volunteer their time, offering real-world advice and acting as role models. The structured curriculum fosters self-esteem and equips participants with the emotional and practical intelligence needed to navigate complex social challenges.",
      detail_desc_3: "Support for this program covers mentor training, program materials, and subsidized retreats and workshops, providing consistent, positive guidance to hundreds of young individuals.",
      detail_features: default_features,
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
      detail_subtitle: "Direct Impact: Reaching Every Community",
      detail_desc_1: "Our Community Outreach program is the face of Sisters Unite, conducting regular visits to schools, orphanages, and underserved communities. These visits often coincide with holidays (like Christmas parties) or specific needs (like health awareness drives). This is where we deliver hope directly.",
      detail_desc_2: "Beyond gifts and events, we advocate for the rights and welfare of children at the grassroots level. We listen to local needs and tailor our assistance, ensuring our help is relevant and sustainable. Advocacy for child rights is a core component of every outreach effort.",
      detail_desc_3: "Donations cover logistics, transportation for volunteers, and the purchase of necessary supplies for events and relief efforts, ensuring we can mobilize quickly to help children in need across the state.",
      detail_features: default_features.map(f => ({...f, icon: f.icon === 'flaticon-help' ? 'flaticon-donation' : f.icon, item_bg: f.item_bg === 'feature-item__icon--yellow' ? 'feature-item__icon--green' : f.item_bg})),
   },

   // home two - 4 causes (no detail data needed here)
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

   // home three - 4 causes (no detail data needed here)
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

   // Inner Page - 4 causes (NOW ADDING DETAIL DATA HERE)
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
      // === DETAIL PAGE CONTENT START ===
      detail_subtitle: "The Mission: Empowering Children Through Education",
      detail_desc_1: "This drive focuses intensely on students on the inner pages, ensuring continuity in their academic lives. We provide comprehensive educational packages, covering tuition gaps and school supplies, vital for stability and success in the face of financial hardship.",
      detail_desc_2: "Our approach includes working directly with the school administration to identify specific material needs and student sponsorship opportunities, making the process seamless for the children and highly efficient for our donors.",
      detail_desc_3: "Help us close the education gap for these young scholars. Your contribution directly funds a child's access to quality learning materials and a chance for a better future.",
      detail_features: default_features,
      // === DETAIL PAGE CONTENT END ===
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
      // === DETAIL PAGE CONTENT START ===
      detail_subtitle: "Securing Homes: The Role of Influential Mothers",
      detail_desc_1: "In challenging environments, a mother's knowledge is a child's strongest shield. This program targets mothers in specific areas to deliver training in child safety, emotional regulation, and basic financial literacy, transforming them into influential advocates for their families.",
      detail_desc_2: "Workshops are tailored to address the unique pressures and risks present in high-need areas, providing practical strategies for ensuring child welfare and navigating social services. We empower them to be leaders in their homes.",
      detail_desc_3: "By funding this training, you invest in the foundation of the family unit, resulting in more stable and protective environments for children in vulnerable situations.",
      detail_features: default_features.map(f => ({...f, icon: 'flaticon-donation', item_bg: 'feature-item__icon--yellow'})),
      // === DETAIL PAGE CONTENT END ===
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
      item_bg:"cause-green",
      // === DETAIL PAGE CONTENT START ===
      detail_subtitle: "The Journey of Self-Improvement and Mentorship",
      detail_desc_1: "This mentorship track is designed to guide youth through critical developmental stages, instilling confidence, ethical behavior, and future-ready skills. Sessions are held regularly, building a strong, consistent relationship between mentor and mentee.",
      detail_desc_2: "We utilize peer-to-peer counseling and professional workshops to cover topics like digital citizenship, interview skills, and college applications, preparing them for success beyond secondary school.",
      detail_desc_3: "Your funding ensures we can maintain a low mentor-to-mentee ratio, providing personalized attention and support that is critical for vulnerable youth to thrive and 'Become a Better You.'",
      detail_features: default_features,
      // === DETAIL PAGE CONTENT END ===
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
      // === DETAIL PAGE CONTENT START ===
      detail_subtitle: "Bringing Hope Directly to the Children",
      detail_desc_1: "Our community outreach is focused on bringing direct relief and joy to children who have the least. Events like holiday parties and school supply drops are opportunities to check on welfare, identify new cases of need, and simply offer a moment of happiness.",
      detail_desc_2: "These campaigns also serve as powerful child advocacy tools, raising community awareness about child protection issues and encouraging local stakeholders to take action against neglect and abuse.",
      detail_desc_3: "Donations are used to purchase gifts, refreshments, transportation, and educational materials distributed during these vital community visits. Every cent translates into a smile and tangible support.",
      detail_features: default_features.map(f => ({...f, icon: 'flaticon-heart', item_bg: 'feature-item__icon--green'})),
      // === DETAIL PAGE CONTENT END ===
   },

   // recent cause - 4 causes (no detail data needed here)
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