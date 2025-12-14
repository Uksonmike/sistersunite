import Image from "next/image"
import Link from "next/link";
// Removed CauseDetailsForm import
import CauseDetailsSidebar from "./CauseDetailsSidebar";

// --- REMOVED THE STATIC details_content OBJECT ---

const CauseDetailsArea = ({ single_cause }: any) => {
   
   // Safely access data or fall back to empty/placeholder values
   const title = single_cause?.title || "Cause Title Not Found";
   const subTitle = single_cause?.detail_subtitle || "Why Support This Cause";
   const desc1 = single_cause?.detail_desc_1 || "";
   const desc2 = single_cause?.detail_desc_2 || "";
   const desc3 = single_cause?.detail_desc_3 || "";
   const features = single_cause?.detail_features || [];

   return (
      <div className="cause-details-area py-120">
         <div className="container">
            <div className="row gap-60">
               <div className="col-lg-8">
                  <div className="cause-details-content">
                     
                     {/* 1. MAIN IMAGE */}
                     <div className="details-image mb-30">
                        {single_cause?.img && <Image src={single_cause.img} alt={title} />}
                     </div>
                     
                     {/* 2. MAIN TITLE */}
                     <h3 className="title">{title}</h3>
                     
                     {/* 3. FIRST DESCRIPTION PARAGRAPH (Moved up here) */}
                     <p>{desc1}</p>
                     
                     {/* Removed: Raised / Goal and Progress Bar */}
                     
                     {/* NOTE: Middle Image block is still commented out */}
                     
                     {/* 4. SECOND DESCRIPTION PARAGRAPH */}
                     <p>{desc2}</p> 
                     
                     <br />
                     {/* 5. SUB-TITLE: "Why Support This Cause" */}
                     <h4>{subTitle}</h4> 
                     
                     {/* 6. THIRD DESCRIPTION PARAGRAPH */}
                     <p>{desc3}</p> 

                     {/* 7. FEATURE / ICON BOXES */}
                     <div className="row pt-15 pb-30">
                        {features.map((item: any, index: number) => (
                           <div key={index} className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                              <div className="feature-item feature-item--bordered">
                                 <div className={`feature-item__icon ${item.item_bg}`}><i
                                    className={item.icon}></i></div>
                                 <h5><Link href="/cause-details">{item.title}</Link></h5>
                                 <p>{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <CauseDetailsSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CauseDetailsArea