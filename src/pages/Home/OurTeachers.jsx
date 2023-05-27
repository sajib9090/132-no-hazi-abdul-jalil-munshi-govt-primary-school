import React, { useEffect, useState } from "react";
import "./Hero.css";
import SingleTeacher from "./SingleTeacher";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch(
      `https://132-no-hazi-abdul-jalil-munshi-govt-prim-folisonjayson-gmailcom.vercel.app/teachers`
    )
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
      });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  // console.log(teachers);
  return (
    <div
      className="mt-36 bg-slate-500"
      data-aos="zoom-in-down"
      data-aos-duration="1000"
    >
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
          <Link to="/about">
            <button className="border-2 border-white px-6 py-2 my-4 duration-500 ease-in-out hover:bg-[#7ecddf] text-white">
              All Teachers
            </button>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 px-4 pb-10">
        {teachers &&
          teachers
            .slice(0, 3)
            .map((teacher) => (
              <SingleTeacher key={teacher._id} teacher={teacher} />
            ))}
      </div>
    </div>
  );
};

export default OurTeachers;
