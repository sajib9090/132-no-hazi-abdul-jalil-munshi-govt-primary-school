import React, { useEffect } from "react";
import national from "../../assets/img/icon/national award.png";
import best from "../../assets/img/icon/best teacher.png";
import many from "../../assets/img/icon/courses.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Award = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="grid md:grid-cols-3 mt-40 md:gap-6"
      data-aos="zoom-in-down"
      data-aos-duration="1000"
    >
      <div className="h-[30vh] md:h-[40vh] md:grid md:grid-cols-12 px-8">
        <div className="h-[10vh] md:h-[40vh] col-span-3">
          <img className="w-16" src={national} alt="" />
        </div>
        <div className="h-[20vh] md:h-[40vh] col-span-9">
          <h3 className="text-[#666666] font-semibold text-base">
            National Awards
          </h3>
          <p className="text-[#AAAAAA] text-sm mt-6">
            Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor
            quisbibendum auci elit consequat ipsutis sem nibh id elitsed
            vulputate.
          </p>
        </div>
      </div>
      <div className="h-[30vh] md:h-[40vh] md:grid md:grid-cols-12 px-8">
        <div className="h-[10vh] md:h-[40vh] col-span-3">
          <img className="w-16" src={best} alt="" />
        </div>
        <div className="h-[20vh] md:h-[40vh] col-span-9">
          <h3 className="text-[#666666] font-semibold text-base">
            Best Teachers
          </h3>
          <p className="text-[#AAAAAA] text-sm mt-6">
            Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor
            quisbibendum auci elit consequat ipsutis sem nibh id elitsed
            vulputate.
          </p>
        </div>
      </div>
      <div className="h-[30vh] md:h-[40vh] md:grid md:grid-cols-12 px-8">
        <div className="h-[10vh] md:h-[40vh] col-span-3">
          <img className="w-16" src={many} alt="" />
        </div>
        <div className="h-[20vh] md:h-[40vh] col-span-9">
          <h3 className="text-[#666666] font-semibold text-base">
            Many Courses
          </h3>
          <p className="text-[#AAAAAA] text-sm mt-6">
            Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor
            quisbibendum auci elit consequat ipsutis sem nibh id elitsed
            vulputate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Award;
