import { RiDeleteBack2Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { GrUserAdmin } from "react-icons/gr";
// import { FaUserAlt } from "react-icons/fa";
import UseAllUsers from "../../Hooks/UseAllUsers";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const ManageUsers = () => {
  const [users, refetch, loading] = UseAllUsers();

  //

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make ${user.name} admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              // alert(`${student.name}, is admin now`);
              refetch();
              toast.success(`${user.name}, is admin now`);
            }
          });
      }
    });
  };
  //remove from admin
  const handleRemoveAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove ${user.name} from admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/users/user/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              // alert(`${student.name}, is admin now`);
              refetch();
              toast.success(`${user.name}, is user now`);
            }
          });
      }
    });
  };

  // user delete
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${user.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${user.name} is deleted`, "success");
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#229AE6] bg-opacity-20 max-h-[100%] min-h-[200vh]">
      <div className="justify-between max-w-[62rem] mx-auto mt-10 mb-4 flex items-center">
        <div>
          <h1 className="text-xl md:text-2xl">All Users: {users.length}</h1>
        </div>
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Search here"
            className="py-1 px-2  w-full max-w-[100px] md:max-w-[200px] rounded-l-md"
          />
          <input
            className="bg-[black] text-white py-1 px-2 rounded-r-md"
            type="submit"
            value="search"
          />
        </form>
      </div>

      <div className="flex justify-center">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL</th>
                <th className="text-center">Name</th>
                <th className="text-center">Role</th>
                <th className="text-center">Action</th>
                <th className="text-center">Email</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="space-y-8">
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr className="border-b-2 border-black" key={user._id}>
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.photo} alt={user.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-extralight">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-bold">{user.role}</td>
                  <td className="">
                    <>
                      {user?.role === "admin" ? (
                        <button
                          onClick={() => handleRemoveAdmin(user)}
                          className="btn btn-xs bg-red-500 border-none capitalize w-[140px]"
                        >
                          <GrUserAdmin className="w-3 h-3 mr-1" />
                          Remove Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-xs bg-primary border-none capitalize w-[140px]"
                        >
                          <GrUserAdmin className="w-3 h-3 mr-1" />
                          Make Admin
                        </button>
                      )}
                    </>
                    {/* <button className="btn btn-xs capitalize">
                      <FaUserAlt className="w-3 h-3 mr-1" />
                      User
                    </button> */}
                  </td>
                  <td>{user.email}</td>
                  <th>
                    <Link to={`/dashboard/manageUsers/updateUser/${user._id}`}>
                      <button className="btn btn-ghost btn-xs">
                        <FiEdit className="w-6 h-6 text-blue-700" />
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-xs"
                    >
                      <RiDeleteBack2Fill className="w-6 h-6 text-red-500" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
