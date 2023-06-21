import { useEffect } from "react";
import "../Home/Hero.css";
import SingleNews from "./SingleNews";

import AOS from "aos";
import "aos/dist/aos.css";
import UseAllPosts from "../../Hooks/UseAllPosts";

const Posts = () => {
  const [allPosts] = UseAllPosts();
  const posts = allPosts.filter((post) => post.status === "approved");
  // console.log(posts);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-28 mb-24">
      <div>
        <div
          className="text-center"
          data-aos="zoom-out-right"
          data-aos-duration="1000"
        >
          <h2 className="text-[#666666] text-4xl font-bold">Posts & Update</h2>
          <p className="dividerr mx-auto"></p>
          <p className="text-[#666666] font-light py-4 text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {/* {posts.length} */}
          </p>
        </div>
        <div className="px-6 mt-8 grid md:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <SingleNews key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
