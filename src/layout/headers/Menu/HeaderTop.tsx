import React from 'react';
import Link from 'next/link'

const HeaderTop = ({ style }: any) => {
   return (
      // ADDED: d-none (hide on mobile) and d-md-block (show on medium/tablet+)
      <div className={`navbar-top d-none d-md-block ${style ? "pt-30 rpt-10 navtop--two" : "pt-15 pb-10 bgc-black navtop--one"}`}>
         <div className="container">
            <div className={`navtop-inner ${style ? "bgc-gray" : ""}`}>
               <ul className="topbar-left">
                  {/* TEXT MOVED OUTSIDE THE CONDITIONAL BLOCK */}
                  <li><b>Call now - <Link href="callto:2347025608111">+234 702 560 8111</Link></b></li>
                  <li>26 Awkuzu Street, Lekki Phase 1, Lagos State</li>
               </ul>
               <ul className="topbar-right">
                  <li className="social-area">
                     <span>Follow Us - </span> 
                     <Link href="https://instagram.com/sistersunite4children"><i className="fab fa-instagram"></i></Link> 

                     <Link href="https://tiktok.com/@sistersunite4children"><i className="fab fa-tiktok"></i></Link> 

                     <Link href="https://youtube.com/@SistersUnite4children"><i className="fab fa-youtube"></i></Link> 

                     <Link href="https://linkedin.com/in/sisters-unite-for-children-78311938b"><i className="fab fa-linkedin"></i></Link> 

                     <Link href="https://chat.whatsapp.com/KAxNY90aPIy3rDK08hwpbV?mode=wwc"><i className="fab fa-whatsapp"></i></Link> 


                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default HeaderTop