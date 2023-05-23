import React from "react";
import "./Hero.css";
import teacher from "../../assets/img/teacher/teacher1.jpg";

const OurTeachers = () => {
  return (
    <div className="mt-36 bg-slate-500">
      <div className=" w-[90%] mx-auto flex flex-col md:flex-row py-6">
        <div className="md:w-[80%]">
          <h1 className="text-[40px] font-bold text-white">Our Teachers</h1>
          <p className="dividerr"></p>
          <p className="text-[14px] text-white pt-6 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
            odio ante, id dapibus elit condimentum vitae. Maecenas eget orci
            vitae enim accumsan mollis.
          </p>
        </div>
        <div className="flex items-center md:ml-auto">
          <button className="border-2 border-white px-6 py-2 my-4 duration-500 ease-in-out hover:bg-[#7ecddf] text-white">
            All Teachers
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 px-4 pb-10">
        <div className="containerr">
          <img className="mx-auto imagee" src={teacher} alt="" />
          <div className="overlayy">
            <div className="textt">
              <div>
                <h3 className="font-bold">Andy Jones</h3>
                <p className="font-light">Biology Teacher</p>
              </div>
              <div>
                <button className="px-6 py-1 border-2 mt-6 hover:bg-white hover:bg-opacity-25 duration-500 border-white">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="containerr">
          <img className="mx-auto imagee" src={teacher} alt="" />
          <div className="overlayy">
            <div className="textt">
              <div>
                <h3 className="font-bold">Andy Jones</h3>
                <p className="font-light">Biology Teacher</p>
              </div>
              <div>
                <button className="px-6 py-1 border-2 mt-6 hover:bg-white hover:bg-opacity-25 duration-500 border-white">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="containerr">
          <img className="mx-auto imagee" src={teacher} alt="" />
          <div className="overlayy">
            <div className="textt">
              <div>
                <h3 className="font-bold">Andy Jones</h3>
                <p className="font-light">Biology Teacher</p>
              </div>
              <div>
                <button className="px-6 py-1 border-2 mt-6 hover:bg-white hover:bg-opacity-25 duration-500 border-white">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeachers;
