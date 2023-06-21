import UseAllPosts from "../../Hooks/UseAllPosts";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ManagePosts = () => {
  const [allPosts, refetch] = UseAllPosts();
  const pendingPosts = allPosts.filter((post) => post.status === "pending");
  const approvedPosts = allPosts.filter((post) => post.status === "approved");
  const deniedPosts = allPosts.filter((post) => post.status === "denied");

  const handleMakeApproved = (post) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to approve ${post.title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              // alert(`${student.name}, is admin now`);
              refetch();
              toast.success(`${post.title}, is approved now`);
            }
          });
      }
    });
  };

  const handleMakeDenied = (post) => {
    Swal.fire({
      title: "Are you sure?",
      html: `
        <input type="text" id="reasonInput" class="swal2-input" placeholder="Reason">
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const reason = document.getElementById("reasonInput").value;

        fetch(`${import.meta.env.VITE_API_URL}/posts/post/${post._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reason }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire(
                "Denied!",
                `${post.title} is denied with reason: ${reason}`,
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="bg-[#229AE6] bg-opacity-20 max-h-[100%] min-h-[200vh]">
      <div className="justify-between max-w-[50rem] mx-auto mt-10 mb-4 flex items-center">
        <div>
          <h1 className="text-xl md:text-2xl">
            Pending Posts: {pendingPosts.length}
          </h1>
          <h1 className="text-xl md:text-2xl">
            Approved Posts: {approvedPosts.length}
          </h1>
          <h1 className="text-xl md:text-2xl">
            Denied Posts: {deniedPosts.length}
          </h1>
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
                <th className="text-center">Title</th>
                <th className="text-center">Email</th>
                <th className="text-center">Status</th>
                <th className="text-center"></th>
                <th className="text-center">Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="space-y-8">
              {/* row 1 */}
              {allPosts?.map((post, index) => (
                <tr className="border-b-2 border-black" key={post._id}>
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={post.photo} alt={post.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-extralight max-w-[200px]">
                          {post.title.length > 20
                            ? post.title.slice(0, 20) + "..."
                            : post.title}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-thin ">
                    {post.email.length > 12
                      ? post.email.slice(0, 12) + "..."
                      : post.email}
                  </td>
                  <td className="">{post.status}</td>
                  <td></td>
                  <th className="">
                    <>
                      {post?.status === "approved" ? (
                        <button
                          onClick={() => handleMakeDenied(post)}
                          className="btn btn-xs bg-orange-600 border-none w-[100px]"
                        >
                          Denied
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeApproved(post)}
                          className="btn btn-xs bg-green-600 border-none w-[100px]"
                        >
                          Approved
                        </button>
                      )}
                    </>
                  </th>
                  <th>
                    <Link to={`/dashboard/managePosts/detailsPost/${post._id}`}>
                      <button className="bg-black text-white px-2 py-1 rounded-md">
                        Details
                      </button>
                    </Link>
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

export default ManagePosts;
