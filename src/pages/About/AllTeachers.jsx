import { Link } from "react-router-dom";

const AllTeachers = ({ user }) => {
  return (
    <Link to={`/about/teacherDetails/${user._id}`}>
      <div className="container bg-blue-100 h-[300px]">
        <img className="mx-auto h-[200px]" src={user.photo} alt="" />
        <div className="">
          <div className="">
            <div className="text-center">
              <h3 className="font-bold">{user.name}</h3>
              <p className="font-light mt-2">{user.subject}</p>
              <p className="font-light mt-2">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllTeachers;
