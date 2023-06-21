import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const SingleNews = ({ post }) => {
  const dateString = post.createdAt;
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleString();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link to={`/posts/${post._id}`}>
      <div data-aos="zoom-in-down" data-aos-duration="1000">
        <img className="h-[250px]" src={post.photo} alt="" />
        <div className="mt-4 mb-6">
          <h1 className="text-[#666666] mb-3 font-bold text-lg">
            {post.title}
          </h1>
          <p className="text-[13px]">
            posted on <span className="font-semibold">{formattedDate}</span>
          </p>
          <p className="text-[14px] font-light mt-3">
            {post.description.length > 195
              ? post.description.slice(0, 195) + "...See more"
              : post.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleNews;
