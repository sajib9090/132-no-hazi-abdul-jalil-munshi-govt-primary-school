import { useLoaderData } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const TeacherDetails = () => {
  const teacher = useLoaderData();

  return (
    <div className="my-36">
      <div className="card lg:card-side bg-base-100 shadow-xl ">
        <figure>
          <img
            className="h-[400px] max-w-[300px]"
            src={teacher.photo}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{teacher.name}</h2>
          <p>{teacher.role}</p>
          <p>Subject: {teacher.subject}</p>
          <p>
            Education Qualification: <br /> {teacher.education_qualification}
          </p>
          <p>
            Description: <br></br> {teacher.description}
          </p>
          {/* <div className="card-actions justify-end">
            <div>
              <p>Love this teacher? press heart</p>
            </div>
            <button className="">
              <AiFillHeart className="w-8 h-8 text-pink-800" />
            </button> 
             <button className="">
              <AiOutlineHeart className="w-8 h-8 text-pink-800" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
