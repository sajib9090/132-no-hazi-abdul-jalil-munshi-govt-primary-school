import React, { useContext } from "react";
import { FaBeer } from "react-icons/fa";
import "../Home/Hero.css";
import { AuthContext } from "../../providers/AuthProvider";

const AllTeachers = ({ teacher, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const { name, photo, title, _id, email, education, subject } = teacher;
  return (
    <div className="containerr bg-[]">
      <img className="mx-auto imagee" src={photo} alt="" />
      <div className="overlayy">
        <div className="textt">
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="font-light mt-2">{title}</p>
            <p className="font-light mt-2">{subject}</p>
            <p className="font-light mt-2">{email}</p>
            <p className="font-light mt-4">{education}</p>
          </div>
          {user?.email == "nispapdevilsajib@gmail.com" ||
          user?.email == "ahasunahamad@gmail.com" ||
          user?.email == "rakibojha99@gmail.com" ? (
            <div className="flex flex-col items-center">
              <button onClick={() => handleDelete(_id)}>
                <img
                  className="h-6 my-6"
                  src="https://i.ibb.co/6DhNSZL/delete-icon-13.png"
                  alt=""
                />
              </button>
            </div>
          ) : (
            ""
          )}
          {/* <div className="flex flex-col items-center">
            <button onClick={() => handleDelete(_id)}>
              <img
                className="h-6 my-6"
                src="https://i.ibb.co/6DhNSZL/delete-icon-13.png"
                alt=""
              />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
