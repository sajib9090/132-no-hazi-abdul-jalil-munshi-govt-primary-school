import React from "react";
import { Toaster, toast } from "react-hot-toast";

const AddNews = () => {
  const handleAddNews = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const description = form.description.value;
    const title = form.title.value;
    const newPosts = {
      title,
      photo,
      description,
    };

    fetch(
      `https://132-no-hazi-abdul-jalil-munshi-govt-prim-folisonjayson-gmailcom.vercel.app/posts`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newPosts),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // form.reset();
        toast.success("post added successfully done");
      });
  };
  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      <div className="text-center">
        <h2 className="text-[#666666] text-4xl font-bold">Admin panel</h2>
        <p className="dividerr mx-auto"></p>
        <p className="text-[#666666] font-light py-4 text-[14px]">Added Post</p>
      </div>
      <div className="card flex-shrink-0 w-full md:w-[50%] mt-2 mb-10 rounded-none max-w-lg shadow-2xl bg-[#474b4c]">
        <form onSubmit={handleAddNews} className="card-body">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                name="title"
                required
                className="input input-bordered rounded-none"
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Post Photo</span>
              </label>
              <input
                type="url"
                placeholder="photo url (500*650)"
                name="photo"
                required
                className="input input-bordered rounded-none"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                What's on your mind?
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Write here.."
              name="description"
              required
              style={{ height: "100px" }}
              className="input input-bordered rounded-none"
            />
          </div>
          <div className="form-control mt-4">
            <input
              className="btn rounded-none bg-[#30AEDB] border-2 border-white hover:bg-white hover:bg-opacity-30 hover:border-white duration-500"
              type="submit"
              value="Add Post"
            />
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default AddNews;
