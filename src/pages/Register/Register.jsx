import { useState } from "react";
import Lottie from "lottie-react";
import welcome from "../../../public/welcome.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/google.png";
import {
  AiFillEye,
  AiOutlineEyeInvisible,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import useAuth from "../../Hooks/UseAuth";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

// const navigate = useNavigate();

const Register = () => {
  // import useful things from custom hook
  const {
    loading,
    setLoading,
    googleLogin,
    registerWithEmail,
    updateUser,
    logOut,
  } = useAuth();
  //state
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // use form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.photo[0]);
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_KEY
      }`;

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const imgData = await response.json();
      const imgURL = imgData.data.display_url;

      const userCredential = await registerWithEmail(data.email, data.password);
      const user = userCredential.user;

      await updateUser(data.name, imgURL);

      const saveUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: "user",
      };

      const saveResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/users`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        }
      );

      const saveData = await saveResponse.json();

      console.log(saveData);
      toast.success("Registration success");
      logOut();
      navigate("/login");
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const saveUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          role: "user",
        };
        fetch(`${import.meta.env.VITE_API_URL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Registration success");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <div className="grid md:grid-cols-2">
      {/* <Helmet>
        <title>Global | Register</title>
      </Helmet> */}
      <div className="">
        <Lottie
          className="w-[100%] h-[100%]"
          animationData={welcome}
          loop={true}
        ></Lottie>
      </div>
      <div className="flex flex-col justify-center bg-[#aacef5b3] bg-opacity-50 ">
        <div className="text-center mb-10">
          <h1 className="text-[35px] font-bold">Create Account Now</h1>
          <p className="text-[#727695] mt-4">
            Already signed up?{" "}
            <Link to="/login">
              <span className="text-[#007CFF] font-semibold mx-2">Login</span>
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 py-10 space-y-4"
        >
          <div>
            <input
              className="px-2 py-3 w-[100%] rounded-md outline-1 outline-[#007CFF]"
              type="text"
              placeholder="Enter your Full Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">Full Name is required</span>
            )}
          </div>
          <div>
            <input
              className="px-2 py-3 w-[100%] rounded-md outline-1 outline-[#007CFF]"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>
          <div className="relative">
            <input
              className="px-2 py-3 w-[100%] rounded-md outline-1 outline-[#007CFF]"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
            />
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}

            {passwordVisible ? (
              <AiOutlineEyeInvisible
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="h-6 w-6 text-[#007CFF] absolute right-3 cursor-pointer top-3"
              />
            ) : (
              <AiFillEye
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="h-6 w-6 text-[#007CFF] absolute right-3 cursor-pointer top-3"
              />
            )}
          </div>
          <div>
            <input
              className="px-2 py-3 w-[100%] rounded-md outline-1 outline-[#007CFF]"
              type="file"
              name="image"
              accept="image/*"
              {...register("photo", {
                required: true,
              })}
            />
            {errors.photo && (
              <span className="text-red-600">Photo is required</span>
            )}
          </div>
          <div>
            <button
              className="px-2 py-3 w-[100%] rounded-md bg-[#007CFF] text-white cursor-pointer"
              type="submit"
            >
              {loading ? (
                <AiOutlineLoading3Quarters
                  className="m-auto animate-spin"
                  size={24}
                />
              ) : (
                "Register"
              )}
            </button>
          </div>
          <div className="divider py-4">Or</div>
        </form>
        <div className="mb-6">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center border border-[#007CFF] hover:border-transparent rounded-md hover:bg-[#516c8984] btn-outline py-3 w-[50%] mx-auto justify-center duration-500"
          >
            <img className="h-7 w-8 mr-2" src={googleLogo} alt="" /> Connect
            with Google
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
