import Link from "next/link"

const HeroArea = () => {
   return (
      <div className="hero-area bgs-cover overlay pt-155 pb-170" style={{backgroundImage:`url(/assets/img/hero/hero.jpg)`}}>
         <div className="container container-1370">
            <div className="hero-content text-center text-white">
               <h1>Empowering Young Minds, One Child at a 
<span>Time</span></h1>
               <p>Sisters United for Children (SUC) is a non-profit organization committed to supporting underprivileged children through education, mentorship, and outreach programs. Our mission is to provide essential resources, inspire growth, and build brighter futures for children across Nigeria. 
</p>
               <div className="hero-btns pt-30 rpt-10">
                  <Link className="cr-btn" href="/contact">Join Us</Link>
                  <Link className="cr-btn btn--yellow btn--style-two" href="/about">Learn More</Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeroArea
