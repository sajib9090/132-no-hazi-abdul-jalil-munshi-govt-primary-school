import React from "react";

const SingleTeacher = ({ teacher }) => {
  const { name, subject, photo, title, email, education } = teacher;
  return (
    <div className="containerr">
      <img className="mx-auto imagee" src={photo} alt="" />
      <div className="overlayy">
        <div className="textt">
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="font-light mt-2">{title}</p>
            <p className="font-light mt-2">{subject}</p>
            <p className="font-light mt-2">{email}</p>
            <p className="font-light mt-4">{education}</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleTeacher;
