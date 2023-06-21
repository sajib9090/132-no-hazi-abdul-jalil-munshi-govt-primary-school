import "../Home/Hero.css";
import { FaPhoneAlt, FaMailBulk, FaSearchLocation } from "react-icons/fa";

const Contact = () => {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (
    <div className="px-8 mt-16 mb-12">
      <div style={{ height: "100vh", width: "100%" }}></div>
      <div>
        <div className="mb-8 mt-16">
          <h2 className="text-[#666666] text-4xl font-bold">Contact Us</h2>
          <p className="dividerr"></p>
          <p className="text-[#666666] font-light py-4 text-[14px]">
            Lorem ipsum gravida nibh vel velit auctor aliqunean sollicitudinlor
            quisbibendum auci elit consequat ipsutis sem nibh id elitsed
            vulputate.
          </p>
          <a className="flex items-center" href="tel:8801960774377">
            {" "}
            <FaPhoneAlt className="mr-2"></FaPhoneAlt> +8801960774377
          </a>
          <a className="flex items-center" href="mailto:xyz@abc.com">
            <FaMailBulk className="mr-2"></FaMailBulk> ahasunahamad@gmail.com
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
