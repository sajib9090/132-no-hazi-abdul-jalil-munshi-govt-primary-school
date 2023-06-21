import React from "react";

const Gallery = () => {
  return (
    <div className="mt-28">
      <div className="text-center mb-8">
        <h2 className="text-[#666666] text-4xl font-bold">Our Gallery</h2>
        <p className="dividerr mx-auto"></p>
        <p className="text-[#666666] font-light py-4 text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="px-4 grid md:grid-cols-3 gap-4">
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/p1FQSqb/news-2.jpg" alt="" />
        </div>
      </div>

      <div className="md:h-[40vh] bg-[#7ecddf] mt-24 mb-12 flex flex-col justify-center items-center py-6">
        <div className="text-center">
          <h1 className="text-[32px] md:text-[40px] font-bold text-white py-4">
            Contact us if you are interested.
          </h1>
          <button className="px-6 py-1 border-2 border-white text-white hover:bg-white hover:bg-opacity-30 duration-500">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
