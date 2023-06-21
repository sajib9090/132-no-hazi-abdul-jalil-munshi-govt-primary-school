import React, { useEffect, useState } from "react";
import "../Home/Hero.css";
import { FaEdit } from "react-icons/fa";
import Teachers from "./Teachers";
import Post from "./post";

const About = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div className="mt-36">
      {posts &&
        posts
          ?.slice(0, 1)
          .map((post) => <Post key={post._id} post={post}></Post>)}

      <div className="md:h-[300px]  mt-14 countt">
        <div className="bg-[#33B8EB] w-[100%] py-4 md:py-0 h-[100%] bg-opacity-75 flex flex-col md:flex-row  items-center justify-center">
          <div className="text-center px-8 py-4">
            <h1 className="font-bold text-6xl text-white">21</h1>
            <p className="font-light text-white tracking-[5px] mt-4">
              Teachers
            </p>
          </div>
          <div className="text-center px-8 py-4">
            <h1 className="font-bold text-6xl text-white">120</h1>
            <p className="font-light text-white tracking-[5px] mt-4">
              Outdoor Activities
            </p>
          </div>
          <div className="text-center px-8 py-4">
            <h1 className="font-bold text-6xl text-white">96</h1>
            <p className="font-light text-white tracking-[5px] mt-4">
              Fun Experiments
            </p>
          </div>
          <div className="text-center px-8 py-4">
            <h1 className="font-bold text-6xl text-white">21</h1>
            <p className="font-light text-white tracking-[5px] mt-4">
              English Lessons
            </p>
          </div>
        </div>
      </div>

      <div className="md:h-[100vh] mt-32 px-4 py-6 grid md:grid-cols-2">
        <div>
          <img src="https://i.ibb.co/C2hwWzL/intro-schools.png" alt="" />
        </div>
        <div className="">
          <h4 className="font-light text-sm tracking-[12px]">HISTORY</h4>
          <h1 className="font-bold text-[36px] max-w-sm text-[#666666]">
            Quality Children Education
          </h1>
          <p className="dividerr"></p>
          <p className="text-[#666666] text-sm mt-4 max-w-md">
            Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne
            vim enim rebum honestatis, ad his consulatu pertinacia deterruisset.
            Te bonorum ancillae nec. Mea errem alterum in, harum iudico vel et,
            nec atqui propriae id.
            <br />
            <br />
            Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne
            vim enim rebum honestatis, ad his consulatu pertinacia deterruisset.
          </p>
          <div className="mt-10">
            <div>
              <p className="flex items-center text-[#666666] text-[14px] mb-2">
                <FaEdit className="mr-2 text-[#7ecddf]" /> Learning program with
                after-school
              </p>
              <p className="flex items-center text-[#666666] text-[14px] mb-2">
                <FaEdit className="mr-2 text-[#7ecddf]" /> Positive learning
                environment after-school
              </p>
              <p className="flex items-center text-[#666666] text-[14px] mb-2">
                <FaEdit className="mr-2 text-[#7ecddf]" /> Learning through play
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Teachers />
      </div>
    </div>
  );
};

export default About;
