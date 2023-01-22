import React from "react";
import { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../firebase/AuthProvider";
import "../shared/custom.css";
const Footer = () => {
  const { theme } = useContext(AuthContext);

  return (
    <footer
      className={`footer px-10 py-12 mt-16 shadow-xl font-mono ${theme ? "bg-slate-200 textColorHr1 text-slate-700" : "bgThem2 shadow-2xl"}`}
    >
      <div>
        <span className="footer-title font-semibold text-3xl ">Our Service</span>
        <h5> Brand New Cars</h5>
        <h5> Cars Garuanty</h5>
        <h6> Best brand Cars </h6>
        <h5>Update Features Cars</h5>
      </div>

      <div>
        <span className="footer-title text-2xl">Our Responsibilty </span>
        <p className=" sm:text-xl lg:text-xl">
          <span className="text-5xl font-bold">#</span>
          We Services  product to our customer <br />
          You can get like fresh .
        </p>
      </div>

      <div>
        <span className="footer-title text-2xl">Contact Us</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com/sarwar_asik" target="_blank">
           
            <FaTwitter className="bg-white text-[#1d9bf0] text-2xl rounded-md "/>
          </a>
          <a
            href="https://github.com/sarwar-asik"
            className="text-2xl"
            target="_blank"
          >
            <FaGithub className="text-slate-700 bg-slate-100 text-2xl" />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100087624802395"
            target="_blank"
          >
            <FaFacebook  className=" text-[#0a66c2] bg-white text-2xl"/>
          </a>
          <a
            href="https://www.linkedin.com/in/sarwar-hossain-a29660257/"
            target="_blank"
            className="text-2xl"
          >
            <FaLinkedinIn className="bg-slate-100 text-2xl text-blue-800" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
