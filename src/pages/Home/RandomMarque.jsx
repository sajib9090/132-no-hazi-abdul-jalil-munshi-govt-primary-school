import React from "react";
import Marquee from "react-fast-marquee";
import client1 from "../../assets/img/client/client1.jpg";
import client2 from "../../assets/img/client/client2.jpg";
import client3 from "../../assets/img/client/client3.jpg";
import client4 from "../../assets/img/client/client4.jpg";
import client5 from "../../assets/img/client/client5.jpg";
import client6 from "../../assets/img/client/client6.jpg";

const RandomMarque = () => {
  return (
    <div>
      <Marquee>
        <div className="grid grid-cols-6 my-16">
          <img className="px-4" src={client1} alt="" />
          <img className="px-4" src={client2} alt="" />
          <img className="px-4" src={client3} alt="" />
          <img className="px-4" src={client4} alt="" />
          <img className="px-4" src={client5} alt="" />
          <img className="px-4" src={client6} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default RandomMarque;
