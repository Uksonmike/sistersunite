import React from "react";

const HeaderTop = ({ style }: any) => {
  return (
    <div
      className={`navbar-top d-none d-md-block ${
        style ? "pt-30 rpt-10 navtop--two" : "pt-15 pb-10 bgc-black navtop--one"
      }`}
    >
      <div className="container">
        <div className={`navtop-inner ${style ? "bgc-gray" : ""}`}>
          <ul className="topbar-left">
            <li>
              <b>
                Call now - <a href="tel:+2347025608111">+234 702 560 8111</a>
              </b>
            </li>
            <li>26 Awkuzu Street, Lekki Phase 1, Lagos State</li>
          </ul>

          <ul className="topbar-right">
            <li className="social-area">
              <span>Follow Us - </span>

              <a
                href="https://instagram.com/sistersunite4children"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://tiktok.com/@sistersunite4children"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>

              <a
                href="https://youtube.com/@SistersUnite4children"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://linkedin.com/in/sisters-unite-for-children-78311938b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>

              <a
                href="https://chat.whatsapp.com/KAxNY90aPIy3rDK08hwpbV?mode=wwc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
