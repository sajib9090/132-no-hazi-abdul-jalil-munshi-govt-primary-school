import React from "react";
import "./Hero.css";
import news1 from "../../assets/img/news/news 1.jpg";
import news5 from "../../assets/img/news/news 5.jpg";

const NewsAndUpdate = () => {
  return (
    <div className="mt-36">
      <div className="h-[210vh] md:h-[140vh] news">
        <div className="bg-[#424245] w-[100%] h-[210vh] md:h-[140vh] bg-opacity-70">
          <div className=" w-[90%] mx-auto flex flex-col md:flex-row py-6">
            <div className="md:w-[80%]">
              <h1 className="text-[40px] font-bold text-white">
                News & Update
              </h1>
              <p className="dividerr"></p>
              <p className="text-[14px] text-white pt-6 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                suscipit odio ante, id dapibus elit condimentum vitae. Maecenas
                eget orci vitae enim accumsan mollis.
              </p>
            </div>
            <div className="flex items-center md:ml-auto">
              <button className="border-2 border-white px-6 py-2 my-4 duration-500 ease-in-out hover:bg-[#7ecddf] text-white">
                View All News
              </button>
            </div>
          </div>
          <div className="md:h-[90vh] bg-white w-[95%] mx-auto grid md:grid-cols-12">
            <div className="md:h-[90vh] md:col-span-8 grid md:grid-cols-2">
              <div className="w-[100%] px-4 pt-8 pb-4">
                <img className="h-[220px]" src={news1} alt="" />
                <h3 className="font-bold text-[18px] py-5 text-[#666666]">
                  Phasellus molestie feugiat hendrerit Interdum
                </h3>
                <p className="text-[#666666] text-[13px]">
                  Posted on{" "}
                  <span className="pl-2 font-semibold">July 28, 2017</span>
                </p>
                <p className="text-[14px] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  suscipit odio ante, id dapibus...
                </p>
              </div>
              <div className="w-[100%] px-4 pt-8 pb-4">
                <img className="h-[220px]" src={news1} alt="" />
                <h3 className="font-bold text-[18px] py-5 text-[#666666]">
                  Phasellus molestie feugiat hendrerit Interdum
                </h3>
                <p className="text-[#666666] text-[13px]">
                  Posted on{" "}
                  <span className="pl-2 font-semibold">July 28, 2017</span>
                </p>
                <p className="text-[14px] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  suscipit odio ante, id dapibus...
                </p>
              </div>
            </div>
            <div className="md:h-[90vh] md:col-span-4">
              <div className="flex items-center py-4 px-4">
                <div>
                  <img className="h-[90px]" src={news5} alt="" />
                </div>
                <div className="px-2">
                  <h3 className="text-[#666666] font-bold pb-3">
                    Maecenas Ultrices Justo Metus Quis Facilisis
                  </h3>
                  <p className="font-semibold">April 21, 2017</p>
                </div>
              </div>
              <div className="flex items-center py-4 px-4">
                <div>
                  <img className="h-[90px]" src={news5} alt="" />
                </div>
                <div className="px-2">
                  <h3 className="text-[#666666] font-bold pb-3">
                    Maecenas Ultrices Justo Metus Quis Facilisis
                  </h3>
                  <p className="font-semibold">April 21, 2017</p>
                </div>
              </div>
              <div className="flex items-center py-4 px-4">
                <div>
                  <img className="h-[90px]" src={news5} alt="" />
                </div>
                <div className="px-2">
                  <h3 className="text-[#666666] font-bold pb-3">
                    Maecenas Ultrices Justo Metus Quis Facilisis
                  </h3>
                  <p className="font-semibold">April 21, 2017</p>
                </div>
              </div>
              <div className="flex items-center py-4 px-4">
                <div>
                  <img className="h-[90px]" src={news5} alt="" />
                </div>
                <div className="px-2">
                  <h3 className="text-[#666666] font-bold pb-3">
                    Maecenas Ultrices Justo Metus Quis Facilisis
                  </h3>
                  <p className="font-semibold">April 21, 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdate;
