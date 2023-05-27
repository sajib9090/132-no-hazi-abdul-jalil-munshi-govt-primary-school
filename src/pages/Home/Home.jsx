import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Headmaster from "./Headmaster";
import NewsAndUpdate from "./NewsAndUpdate";
import OurTeachers from "./OurTeachers";
import RandomMarque from "./RandomMarque";
import SchoolCarousel from "./SchoolCarousel";
import Space from "./Space";

const Home = () => {
  return (
    <div>
      <Hero />
      <SchoolCarousel />
      <Space />
      <Award />
      <Headmaster />
      <NewsAndUpdate />
      <OurTeachers />
      <RandomMarque />
    </div>
  );
};

export default Home;
