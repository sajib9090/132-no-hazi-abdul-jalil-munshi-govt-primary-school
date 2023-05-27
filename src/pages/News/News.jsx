import React, { useEffect, useState } from "react";
import "../Home/Hero.css";
import SingleNews from "./SingleNews";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  const allPost = useLoaderData();
  const [posts, setPosts] = useState(allPost);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://132-no-hazi-abdul-jalil-munshi-govt-prim-folisonjayson-gmailcom.vercel.app/posts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = posts?.filter((post) => post._id != _id);
            setPosts(remaining);
          });
      }
    });
  };
  // useEffect(() => {
  //   fetch(`http://localhost:5000/posts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, []);
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
          {posts &&
            posts.map((post) => (
              <SingleNews
                key={post._id}
                post={post}
                handleDelete={handleDelete}
              />
            ))}
          {/* <div>
            <img src="https://i.ibb.co/gMpPwmR/news-1.jpg" alt="" />
            <div className="mt-4 mb-6">
              <h1 className="text-[#666666] mb-3 font-bold text-lg">
                Phasellus molestie feugiat hendrerit Interdum
              </h1>
              <p className="text-[13px]">
                posted on <span className="font-semibold">July 28, 2017</span>
              </p>
              <p className="text-[14px] font-light mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                suscipit odio ante, id dapibus...
              </p>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/gMpPwmR/news-1.jpg" alt="" />
            <div className="mt-4 mb-6">
              <h1 className="text-[#666666] mb-3 font-bold text-lg">
                Phasellus molestie feugiat hendrerit Interdum
              </h1>
              <p className="text-[13px]">
                posted on <span className="font-semibold">July 28, 2017</span>
              </p>
              <p className="text-[14px] font-light mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                suscipit odio ante, id dapibus...
              </p>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/gMpPwmR/news-1.jpg" alt="" />
            <div className="mt-4 mb-6">
              <h1 className="text-[#666666] mb-3 font-bold text-lg">
                Phasellus molestie feugiat hendrerit Interdum
              </h1>
              <p className="text-[13px]">
                posted on <span className="font-semibold">July 28, 2017</span>
              </p>
              <p className="text-[14px] font-light mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                suscipit odio ante, id dapibus...
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default News;
