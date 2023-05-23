import React from "react";
import head from "../../assets/img/New folder/head teacher.jpg";
import "./Hero.css";

const Headmaster = () => {
  return (
    <div className="grid md:grid-cols-12 px-8 mt-32">
      <div className="h-[50vh] md:h-[100vh] md:col-span-4 text-center flex flex-col justify-center">
        <img className="h-[337px] mx-auto" src={head} alt="" />
        <div className="pt-2 md:pt-6">
          <h4 className="font-light tracking-[5px] text-[12px]">HEADMASTER</h4>
          <h2 className="text-[#666666] text-[2.4rem] font-bold leading-[0.8em] pt-2">
            Michel Groch
          </h2>
        </div>
      </div>
      <div className="md:h-[100vh] md:col-span-8 flex flex-col justify-center">
        <div>
          <h4 className="font-light text-[1rem] tracking-[12px] my-6">
            WELCOME
          </h4>
          <h2 className="font-bold text-[#666666] leading-[1.2em] text-[24px] max-w-lg">
            Hello. Our school has been present for over 20 years. We make the
            most of all our students.
          </h2>
          <p className="dividerr"></p>
          <p className="text-[#666666] text-sm mt-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pulvinar tellus sed mauvehicula tempor. In hac habitasse platea
            dictumst. Donec nunc nunc, interdum sed aliquet quis, conditum vitae
            enim. Quisque molestie consectetur urna quis scelerisque. Morbi at
            lectus sapien. Donec fgiat arcu in mi placerat ullamcorper. <br />{" "}
            <br />
            In tempor, ex id viverra convallis, ante augue vestibulum leo, eget
            elementum risus nulla bibendum nisl. Maecenas lacinia libero
            tincidunt justo bibendum sagittis. Duis gravida massa ac vehicula
            pulvinar. Nunc ligula orci, vulputate id tempor ac, tincidunt in
            orci. Etiam nulla lectus, commodo quis tortor et, congue volutpat
            velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headmaster;
