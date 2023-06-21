import UseAllUsers from "../../Hooks/UseAllUsers";
import "../Home/Hero.css";
import AllTeachers from "./AllTeachers";

const Teachers = () => {
  const [users] = UseAllUsers();
  const teachers = users.filter((user) => user.role === "teacher");
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
      <div className="grid md:grid-cols-4 gap-4">
        {teachers?.map((user) => (
          <AllTeachers key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Teachers;
