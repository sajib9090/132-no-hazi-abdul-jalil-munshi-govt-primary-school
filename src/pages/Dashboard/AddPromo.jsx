import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddPromo = () => {
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

      const savePromo = {
        promo: data.promo,
      };
      const saveResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/promo`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savePromo),
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
    <div className="bg-[#aacef5b3] bg-opacity-50 min-h-screen">
      <h1 className="text-center font-semibold text-3xl mt-8">Add promo</h1>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="px-6 py-10 space-y-4 w-[100%] md:w-[50%] mx-auto"
        >
          <div>
            <textarea
              className="px-2 py-3 w-[100%] h-[200px] rounded-md outline-1 outline-[#007CFF]"
              type="text"
              placeholder="Write Promo"
              {...register("promo", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600">Promo is required</span>
            )}
          </div>

          <div>
            <button
              className="px-2 py-3 w-[100%] rounded-md bg-[#007CFF] text-white cursor-pointer"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPromo;
