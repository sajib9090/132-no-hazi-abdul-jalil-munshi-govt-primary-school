import React from "react";

const SinglePost = ({ post }) => {
  const { photo, title, description, createdAt } = post;
  const dateString = createdAt;
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleString();
  return (
    <div className="w-[100%] px-4 pt-8 pb-4">
      <img className="h-[220px]" src={photo} alt="" />
      <h3 className="font-bold text-[18px] py-5 text-[#666666]">{title}</h3>
      <p className="text-[#666666] text-[13px]">
        Posted on <span className="pl-2 font-semibold">{formattedDate}</span>
      </p>
      <p className="text-[14px] mt-5">
        {description?.length > 200
          ? description.slice(0, 200) + "....."
          : description}
      </p>
    </div>
  );
};

export default SinglePost;
