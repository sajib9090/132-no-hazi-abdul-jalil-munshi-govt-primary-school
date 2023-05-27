import React from "react";
import "../Home/Hero.css";
import { Toaster, toast } from "react-hot-toast";

const AddTeacher = () => {
  const handleAddTeacher = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const subject = form.subject.value;
    const facebook = form.facebook.value;
    const twitter = form.twitter.value;
    const photo = form.photo.value;
    const education = form.education.value;
    const description = form.education.value;
    const title = form.title.value;
    const teacher = {
      name,
      title,
      mobile,
      email,
      subject,
      facebook,
      twitter,
      photo,
      education,
      description,
    };
    console.log(teacher);
    fetch(
      `https://132-no-hazi-abdul-jalil-munshi-govt-prim-folisonjayson-gmailcom.vercel.app/teachers`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(teacher),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        form.reset();
        toast.success("Added successfully done");
      });
  };
  return (
    <div className="mt-24 flex flex-col justify-center items-center">
      <div className="text-center">
        <h2 className="text-[#666666] text-4xl font-bold">Admin panel</h2>
        <p className="dividerr mx-auto"></p>
        <p className="text-[#666666] font-light py-4 text-[14px]">
          Added Teacher
        </p>
      </div>
      <div className="card flex-shrink-0 w-full md:w-[50%] mt-2 mb-10 rounded-none max-w-lg shadow-2xl bg-[#474b4c]">
        <form onSubmit={handleAddTeacher} className="card-body">
          <div className="md:flex md:justify-between">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Teachers active Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered rounded-none"
                />
              </div>
              <div>
                <label className="text-white" htmlFor="category">
                  Title
                </label>
                <br />
                <select
                  name="title"
                  id=""
                  required
                  className="w-[100%] input input-bordered rounded-none"
                >
                  <option value="" disabled>
                    select
                  </option>
                  <option value="Headmaster">Headmaster</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Teachers Mobile Number(optional)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="mobile number"
                  name="mobile"
                  className="input input-bordered rounded-none"
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Teachers Facebook ID (optional)
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="Paste id link"
                  name="facebook"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Teachers Twitter ID (optional)
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="Paste id link"
                  name="twitter"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Teachers Photo</span>
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
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Education Qualification
              </span>
            </label>
            <textarea
              style={{ height: "70px" }}
              type="text"
              placeholder="Education Qualification"
              name="education"
              required
              className="input input-bordered rounded-none"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Write short description
              </span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
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
              value="Add Teacher"
            />
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default AddTeacher;
