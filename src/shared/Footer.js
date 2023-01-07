import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../firebase/AuthProvider";
import "../shared/custom.css";
const Footer = () => {
  const { theme } = useContext(AuthContext);

  return (
    <footer
      className={`footer px-10 py-12 shadow-xl font-mono   mt-5 ${theme ? "bg-slate-100 textColorHover1" : "bgThem2"}`}
    >
      <div>
        <span className="footer-title text-xl">Our Service</span>
        <h5> Brand New Cars</h5>
        <h5> Cars Garuanty</h5>
        <h6> Best brand Cars </h6>
        <h5> One time Used Cars</h5>
      </div>

      <div>
        <span className="footer-title">Our Responsibilty </span>
        <p className=" sm:text-xl lg:text-3xl">
          <span className="text-7xl font-bold">#</span>
          We Services Used product to our customer <br />
          You can get like fresh .
        </p>
      </div>

      <div>
        <span className="footer-title">Contact Us</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/sarwar_asik" target="_blank">
           
            <FaTwitter className="bg-white text-[#1d9bf0] text-3xl rounded-md "/>
          </a>
          <a
            href="https://github.com/sarwar-asik"
            className="text-2xl"
            target="_blank"
          >
            <FaGithub className="text-slate-700 bg-slate-100 text-3xl" />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100087624802395"
            target="_blank"
          >
            <FaFacebook  className=" text-[#0a66c2] bg-white text-3xl"/>
          </a>
          <a
            href="https://www.linkedin.com/in/sarwar-hossain-a29660257/"
            target="_blank"
            className="text-2xl"
          >
            <FaLinkedinIn className="bg-slate-100 text-3xl text-blue-800" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
