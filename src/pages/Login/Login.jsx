import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleOnsubmit = (event) => {
    event.preventDefault();
    toast.error("Not available right now! Please login with google.");
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left md:w-[50%]">
            <h1 className="text-5xl text-[#666666] font-bold">Login now!</h1>
            <p className="py-6 text-sm max-w-sm">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full md:w-[50%] mt-14 rounded-none max-w-sm shadow-2xl bg-[#474b4c]">
            <form onSubmit={handleOnsubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  disabled
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  disabled
                  className="input input-bordered rounded-none"
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn rounded-none bg-[#30AEDB] border-2 border-white hover:bg-white hover:bg-opacity-30 hover:border-white duration-500"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="text-center py-4">
                <p className="text-white">Or</p>
              </div>
              <div className="mx-auto">
                <Link onClick={handleGoogleLogin}>
                  <img
                    className="h-14"
                    src="https://i.ibb.co/FWQkgzN/png-transparent-google-logo-google-text-trademark-logo-removebg-preview.png"
                    alt=""
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
