import { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../Shared/Loader/Loader";
import useAuth from "../../Hooks/UseAuth";
import { Toaster, toast } from "react-hot-toast";

const AddAPost = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

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
      console.log(imgData.data.display_url);

      const savePost = {
        title: data.title,
        description: data.description,
        photo: imgData.data.display_url,
        email: user?.email,
        status: "pending",
      };
      const saveResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/posts`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savePost),
        }
      );

      const saveData = await saveResponse.json();
      console.log(saveData);
      toast.success("Post added successfully");
      setLoading(false);
      reset();
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center bg-[#aacef5b3] bg-opacity-50 ">
          <div className="text-center mb-2 mt-6">
            <h1 className="text-[35px] font-bold">Add a Post Now</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-6 py-10 space-y-4 w-[100%] md:w-[50%] mx-auto"
          >
            <div>
              <input
                className="px-2 py-3 w-[100%] rounded-md outline-1 outline-[#007CFF]"
                type="text"
                placeholder="Enter Title"
                {...register("title", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Title is required</span>
              )}
            </div>
            <div>
              <textarea
                className="px-2 py-3 w-[100%] h-[200px] rounded-md outline-1 outline-[#007CFF]"
                type="text"
                placeholder="Description"
                {...register("description", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">Description is required</span>
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
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default AddAPost;
