import React from "react";

const SinglePost2 = ({ post }) => {
  const { photo, title, createdAt } = post;
  const dateString = createdAt;
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleString();
  return (
    <div className="flex items-center py-4 px-4">
      <div>
        <img className="h-[90px]" src={photo} alt="" />
      </div>
      <div className="px-2">
        <h3 className="text-[#666666] font-bold pb-3">{title}</h3>
        <p className="font-semibold">{formattedDate}</p>
      </div>
    </div>
  );
};

export default SinglePost2;
