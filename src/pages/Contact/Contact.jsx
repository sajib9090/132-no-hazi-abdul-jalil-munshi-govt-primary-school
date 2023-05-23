import React from "react";
import GoogleMapReact from "google-map-react";
import { useForm } from "react-hook-form";
import "../Home/Hero.css";
import { FaPhoneAlt, FaMailBulk, FaSearchLocation } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 23.307169,
      lng: 90.408006,
    },
    zoom: 11,
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="px-8 mt-16 mb-12">
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
      <div>
        <div className="mb-8 mt-16">
          <h2 className="text-[#666666] text-4xl font-bold">Contact Us</h2>
          <p className="dividerr"></p>
          <p className="text-[#666666] font-light py-4 text-[14px]">
            Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor
            quisbibendum auci elit consequat ipsutis sem nibh id elitsed
            vulputate.
          </p>
          <a className="flex items-center" href="tel:+9112345678">
            {" "}
            <FaPhoneAlt className="mr-2"></FaPhoneAlt> +91 12345678
          </a>
          <a className="flex items-center" href="mailto:xyz@abc.com">
            <FaMailBulk className="mr-2"></FaMailBulk> mailto:xyz@abc.com
          </a>
          <address className="flex items-center">
            <FaSearchLocation className="mr-2"></FaSearchLocation> No: 58 A,
            East Madison Street, Baltimore, MD, USA 4508
          </address>
        </div>
        {/* <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
            <input type="submit" />
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
