import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SocialIcon from "@/components/common/SocialIcon";
import footer_data from "@/data/footerData";

import logo_1 from "@/assets/img/logos/logo-white.png";
import donate from "@/assets/img/footer/donate-by.png";

// Gallery imports were removed

interface ContentData {
  footer_about_text: JSX.Element;
}

const footer_content: ContentData = {
  footer_about_text: (
    <>
      Sisters Unite for Children – www.sistersunite.org.ng – is a group of
      friends and professional Christian women who have distinguished themselves
      in various fields of endeavor cutting across Banking/Finance, Pharmacy,
      Education, Diplomatic Corps, Public Service etc.{" "}
    </>
  ),
};

const { footer_about_text } = footer_content;

const FooterOne = () => {
  const date = new Date();
  return (
    <footer className="footer-area overlay text-white pt-120 bgs-cover">
      <div className="container">
        <div className="row justify-content-between">
          {/* COLUMN 1: About Section 
              col-12: Full width on mobile (stacks vertically)
              col-lg-4: Wider on desktop (1/3rd of the 12-column grid, adjusted from original 3) 
              col-md-6: Half width on tablet
          */}
          <div className="col-12 col-lg-4 col-md-6">
            <div className="widget widget_about">
              <div className="logo_footer mb-25">
                <Link href="/">
                  <Image src={logo_1} alt="Logo" />
                </Link>
              </div>
              <p>{footer_about_text}</p>
              <div className="social-style-one pt-20">
                <SocialIcon />
              </div>
            </div>
          </div>

          {/* COLUMN 2 & 3: Link Lists 
              col-12: Full width on mobile (stacks vertically)
              col-lg-2: Narrower on desktop
              col-md-3: Quarter width on tablet (allowing two link columns to sit next to the about column)
          */}
          {footer_data
            .filter((item) => item.page === "home_1")
            .map((item) => (
              <div key={item.id} className="col-12 col-lg-2 col-md-3">
                <div className="widget widget_nav_menu">
                  <h5 className="widget-title">{item.widget_title}</h5>
                  <ul>
                    {item.footer_link.map((li, i) => (
                      <li key={i}>
                        <Link href={li.link}>{li.link_title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

          {/* The Photo Gallery column has been removed */}
        </div>
      </div>

      <div className="footer-bottom mt-50">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="donate-by"></div>
            <div className="copyright">
              <p>Copyright {date.getFullYear()} All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
