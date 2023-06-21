import logo from "../../assets/img/logo/logoo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#1B1B1B] text-white">
        <div>
          <img className="h-12 mb-6" src={logo} alt="" />
          <a className="flex items-center" href="tel:8801960774377">
            {" "}
            <FaPhoneAlt className="mr-2"></FaPhoneAlt> +8801960774377
          </a>
          <a className="flex items-center" href="mailto:xyz@abc.com">
            <FaMailBulk className="mr-2"></FaMailBulk> ahasunahamad@gmail.com
          </a>
        </div>
        <div>
          <span className="footer-title text-white text-xl capitalize">
            Services
          </span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-white text-xl capitalize">
            Company
          </span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-white text-xl capitalize">
            Legal
          </span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          {/* <span className="footer-title text-white text-xl capitalize">
            Newsletter
          </span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 rounded-none"
              />
              <button className="btn hover:outline-none border-2 border-white hover:bg-[#48C6F5] hover:border-white absolute top-0 right-0 rounded-none">
                Subscribe
              </button>
            </div>
          </div>
          <span className="footer-title text-white text-xl capitalize">
            Connect with us
          </span> */}
          <div className="flex items-center space-x-4 text-xl">
            <p>
              <FaTwitter className="hover:scale-125 hover:text-[#eb5662] duration-500"></FaTwitter>
            </p>
            <p>
              <FaFacebookF className="hover:scale-125 hover:text-[#eb5662] duration-500"></FaFacebookF>
            </p>
            <p>
              <FaInstagram className="hover:scale-125 hover:text-[#eb5662] duration-500"></FaInstagram>
            </p>
            <p>
              <FaLinkedin className="hover:scale-125 hover:text-[#eb5662] duration-500"></FaLinkedin>
            </p>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#1B1B1B] text-white">
        <div>
          <p>
            Copyright © 2023 - All right reserved by{" "}
            <span className="text-[#48C6F5]">
              132 No. Hazi Abdul jalil munshi govt primary school
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// <address className="flex items-center">
//             <FaSearchLocation className="mr-2"></FaSearchLocation> No: 58 A,
//             East Madison Street, Baltimore, MD, USA 4508
//           </address>
