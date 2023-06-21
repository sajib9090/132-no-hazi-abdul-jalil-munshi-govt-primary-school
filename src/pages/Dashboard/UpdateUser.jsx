import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const position = form.position.value;
    const date = form.elements.date.value;
    const education_qualification = form.education_qualification.value;
    const description = form.description.value;

    const updatedUser = {
      subject,
      position,
      date,
      education_qualification,
      description,
    };
    fetch(`${import.meta.env.VITE_API_URL}/users/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Updated");
          navigate("/dashboard/manageUsers");
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
          <div className="w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="px-4 py-4">
              <div className="flex space-x-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={data.name}
                    placeholder="Name"
                    readOnly={true}
                    className="input input-bordered rounded-sm px-4 py-2 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    defaultValue={data.email}
                    readOnly={true}
                    className="input input-bordered rounded-sm px-4 py-2 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject (Editable)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    defaultValue={data.subject}
                    className="input input-bordered rounded-sm px-4 py-2 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Position (Editable)</span>
                  </label>
                  <select
                    name="position"
                    required
                    className="appearance-none bg-white border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
                  >
                    <option disabled>Select</option>
                    <option name="teacher" value="teacher">
                      Teacher
                    </option>
                    <option name="headmaster" value="headmaster">
                      Headmaster
                    </option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Joining Date (Editable)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      defaultValue={data.joining_date}
                      className="appearance-none rounded border border-gray-300 bg-white py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label className="label">
                    <span className="label-text">
                      Education qualification (Editable)
                    </span>
                  </label>
                  <textarea
                    placeholder="Education qualification"
                    name="education_qualification"
                    defaultValue={data.education_qualification}
                    className="input input-bordered rounded-sm px-4 py-2 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500 w-full h-24"
                  ></textarea>
                </div>
              </div>
              <div>
                <div>
                  <label className="label">
                    <span className="label-text">Description (Editable)</span>
                  </label>
                  <textarea
                    placeholder="Description"
                    name="description"
                    defaultValue={data.description}
                    className="input input-bordered rounded-sm px-4 py-2 border border-gray-300 bg-white text-gray-700 focus:outline-none focus:border-blue-500 w-full h-24"
                  ></textarea>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
