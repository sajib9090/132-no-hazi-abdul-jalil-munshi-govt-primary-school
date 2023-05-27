import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const SingleNews = ({ post, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const { photo, title, createdAt, description, _id } = post;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleButtonClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  let displayedDescription = description;

  if (description.length > 100) {
    displayedDescription = showFullDescription
      ? description
      : description.slice(0, 300) + "...";
  }

  const dateString = createdAt;
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleString();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="zoom-in-down" data-aos-duration="1000">
      <img src={photo} alt="" />
      <div className="mt-4 mb-6">
        <h1 className="text-[#666666] mb-3 font-bold text-lg">{title}</h1>
        <p className="text-[13px]">
          posted on <span className="font-semibold">{formattedDate}</span>
        </p>
        <p className="text-[14px] font-light mt-3">
          {/* {description?.length > 100
            ? description.slice(0, 300)
            : description} */}
          {/* {description.length > 100 ? (
            <div>
              {showFullDescription ? (
                <span>{description}</span>
              ) : (
                <span>{description.slice(0, 300)}...</span>
              )}
              {!showFullDescription && (
                <button
                  className="text-[#7ECDDF] font-semibold"
                  onClick={handleButtonClick}
                >
                  Read More
                </button>
              )}
            </div>
          ) : (
            <span>{description}</span>
          )} */}
          {
            <div>
              <span>{displayedDescription}</span>
              {description.length > 100 && (
                <button
                  className="text-[#7ECDDF] font-semibold"
                  onClick={handleButtonClick}
                >
                  {showFullDescription ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          }
        </p>
      </div>
      {user?.email == "nispapdevilsajib@gmail.com" ||
      user?.email == "ahasunahamad@gmail.com" ||
      user?.email == "rakibojha99@gmail.com" ||
      user?.email == "istiakmd70@gmail.com" ? (
        <>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-[#7ECDDF] px-6 py-2 text-white"
          >
            Delete
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleNews;
