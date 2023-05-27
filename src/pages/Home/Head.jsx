import React from "react";

const Head = ({ headmaster }) => {
  const { photo, title, name } = headmaster;
  return (
    <div className="h-[50vh] md:h-[100vh] md:col-span-4 text-center flex flex-col justify-center">
      <img className="h-[337px] mx-auto" src={photo} alt="" />
      <div className="pt-2 md:pt-6">
        <h4 className="font-light tracking-[5px] text-[12px]">{title}</h4>
        <h2 className="text-[#666666] text-[2.4rem] font-bold leading-[0.8em] pt-2">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Head;
