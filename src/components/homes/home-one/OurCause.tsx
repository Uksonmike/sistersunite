import cause_data from "@/data/causeData"
import Image from "next/image"
import Link from "next/link"

import ourCauseShapes from "@/assets/img/shapes/three-round-green.png"

const OurCause = () => {
   return (
      <div className="our-cause-area pt-120 pb-90 rel z-1">
         <div className="container">
            {/* ... section-title ... */}
            
            <div className="row">
               {cause_data.filter((item) => item.page === "home_1").map((item) => (
                  <div key={item.id} className="col-xl-3 col-md-6">
                     <div className="cause-item">
                        <div className="image">
                           <Image src={item.img} alt="Cause" />
                        </div>
                        <div className="content">
                           <h5>{item.title}</h5>
                           <p>{item.desc}</p>
                          
                           <div className="cause-btn">
                              {/* --- CHANGE IS HERE --- */}
                              <Link 
                                 className={`cr-btn ${item.btn_bg}`} 
                                 href={`causes-details/${item.id}`} // Dynamic link using item.id
                              >
                                 Learn More
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="our-cause-shapes">
            <Image className="one top_image_bounce" src={ourCauseShapes} alt="Shape" />
         </div>
      </div>
   )
}

export default OurCause