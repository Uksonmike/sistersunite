import React from 'react';
import Link from 'next/link'

const HeaderTop = ({ style }: any) => {
   return (
      // The background color is set here: bgc-black navtop--one
      <div className={`navbar-top ${style ? "pt-30 rpt-10 navtop--two" : "pt-15 pb-10 bgc-black navtop--one"}`}>
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
                     <Link href="#"><i className="fab fa-instagram"></i></Link> 
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default HeaderTop