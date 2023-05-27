import React, { useEffect, useState } from "react";
import "../Home/Hero.css";
import AllTeachers from "./AllTeachers";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Teachers = () => {
  const teachers = useLoaderData();

  const [allTeachers, setAllTeachers] = useState(teachers);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/teachers`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllTeachers(data);
  //     });
  // }, []);

  // console.log(allTeachers);

  console.log(allTeachers);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://132-no-hazi-abdul-jalil-munshi-govt-prim-folisonjayson-gmailcom.vercel.app/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const remaining = allTeachers?.filter(
              (teacher) => teacher._id != _id
            );
            setAllTeachers(remaining);
          });
      }
    });
  };
  return (
    <div className="mt-36 mb-28 px-5">
      <div className="text-center">
        <h2 className="text-[#666666] text-4xl font-bold">Teachers</h2>
        <p className="dividerr mx-auto"></p>
        <p className="text-[#666666] font-light py-6 text-[14px]">
          Duis vel erat quis justo vehicula vulputate sit amet nec nisi. Fusce a
          venenatis arcu.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {allTeachers &&
          allTeachers.map((teacher) => (
            <AllTeachers
              key={teacher._id}
              teacher={teacher}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default Teachers;
