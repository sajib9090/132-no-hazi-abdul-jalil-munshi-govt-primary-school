import { Link, useRouteError } from "react-router-dom";
import errorAnimation from "../../../assets/errorPage.json";
import Lottie from "lottie-react";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="text-center pt-6">
        <Link to="/">
          <button className="bg-[#EF7B84] text-white px-4 py-2 rounded-md hover:bg-slate-700 duration-500">
            Go to home page
          </button>
        </Link>
      </div>
      <div className="">
        <Lottie
          className="w-[100%] h-[90vh]"
          animationData={errorAnimation}
          loop={true}
        ></Lottie>
      </div>
      {/* <div className="absolute bottom-2 left-[40%] text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div> */}
    </div>
  );
}
