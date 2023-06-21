import Navbar from "../pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Marquee from "react-fast-marquee";
import Promo from "../Component/Promo";

const Main = () => {
  return (
    <div>
      <div className="h-[40px] w-[100%] bg-white text-black fixed top-0 flex items-center justify-center font-semibold">
        <Marquee speed="100" pauseOnHover={true}>
          <Promo />
        </Marquee>
      </div>
      <div className="">
        <Navbar />
      </div>
      <div className="mt-[111px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
