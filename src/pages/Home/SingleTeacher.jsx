import { Link } from "react-router-dom";

const SingleTeacher = ({ teacher }) => {
  return (
    <Link to={`/about/teacherDetails/${teacher._id}`}>
      <div className="container bg-white h-[300px]">
        <img className="mx-auto h-[200px]" src={teacher.photo} alt="" />
        <div className="">
          <div className="">
            <div className="text-center">
              <h3 className="font-bold">{teacher.name}</h3>
              <p className="font-light mt-2">{teacher.subject}</p>
              <p className="font-light mt-2">{teacher.role}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleTeacher;
