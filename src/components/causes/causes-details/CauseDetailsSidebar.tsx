"use client"
import cause_data from "@/data/causeData"
import Image from "next/image"
import Link from "next/link"

const tags: string[] = ["Charity", "African people", "Community", "Food", "Clean Water", "Education", "Health", "Volunteers", "Homeless child"]

const CauseDetailsSidebar = () => {
   return (
      <div className="main-sidebar rmt-75">
       

        

       
         
         <div className="widget widget_cta">
            <div className="cta-widget-inner" style={{ backgroundImage: `url(assets/img/widgets/cta-bg.jpg)` }}>
               <h5>Help us improve the lives of children in need.</h5>
               <a className="cr-btn ml-5" href="https://flutterwave.com/donate/plyjpesfl4wx" target="_blank">Donate Now</a>
            </div>
         </div>
      </div>
   )
}

export default CauseDetailsSidebar
