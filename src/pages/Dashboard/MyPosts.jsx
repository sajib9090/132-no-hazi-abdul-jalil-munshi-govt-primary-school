import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";
import useAuth from "../../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyPosts = () => {
  const { user, loading } = useAuth();

  const { data: allPosts = [], refetch } = useQuery(
    ["posts/teachers"],
    async () => {
      if (user) {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/posts/teachers/${user.email}`
        );
        return res.json();
      }
      return [];
    }
  );
  // console.log(allPosts);
  const approvedPosts = allPosts.filter((post) => post.status === "approved");
  const pendingPosts = allPosts.filter((post) => post.status === "pending");
  const deniedPosts = allPosts.filter((post) => post.status === "denied");

  const [expandedPostIds, setExpandedPostIds] = useState([]);

  const toggleExpand = (postId) => {
    if (expandedPostIds.includes(postId)) {
      setExpandedPostIds(expandedPostIds.filter((id) => id !== postId));
    } else {
      setExpandedPostIds([...expandedPostIds, postId]);
    }
  };

  const isExpanded = (postId) => {
    return expandedPostIds.includes(postId);
  };

  const handleDelete = (post) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${post.title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/posts/teachers/${post._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", `${post.title} is deleted`, "success");
            }
          });
      }
    });
  };
  return (
    <>
      <div className="mt-4 md:mt-12">
        <div className="flex flex-col md:flex-row md:justify-between max-w-3xl mx-auto px-4 md:px-0 mb-6">
          <h1 className="text-xl font-semibold">
            All Posts: {allPosts.length}
          </h1>
          <h1 className="text-xl font-semibold">
            Approved Posts: {approvedPosts.length}
          </h1>
          <h1 className="text-xl font-semibold">
            Pending Posts: {pendingPosts.length}
          </h1>
          <h1 className="text-xl font-semibold">
            Denied Posts: {deniedPosts.length}
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL</th>
                  <th className="text-center">Title</th>
                  <th className="text-center">Feedback</th>
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
                            {post.title.length > 10
                              ? post.title.slice(0, 10) + "..."
                              : post.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-thin w-[200px]">
                      {post?.reason?.length > 10 ? (
                        <>
                          {isExpanded(post._id) ? (
                            post.reason
                          ) : (
                            <>
                              {post.reason.slice(0, 10)}...
                              <button
                                className="text-blue-500 underline ml-2"
                                onClick={() => toggleExpand(post._id)}
                              >
                                See more
                              </button>
                            </>
                          )}
                          {post.reason.length > 10 && isExpanded(post._id) && (
                            <button
                              className="text-blue-500 underline ml-2"
                              onClick={() => toggleExpand(post._id)}
                            >
                              See less
                            </button>
                          )}
                        </>
                      ) : (
                        post.reason
                      )}
                    </td>
                    <td className="">{post.status}</td>
                    <td></td>
                    <th className="">
                      <button
                        onClick={() => handleDelete(post)}
                        className="btn btn-xs bg-orange-600 border-none w-[100px]"
                      >
                        <BsFillTrashFill className="w-3 h-3" /> Delete
                      </button>
                    </th>
                    <th>
                      {/* <Link
                        to={`/dashboard/managePosts/detailsPost/${post._id}`}
                      >
                        <button className="bg-black text-white px-2 py-1 rounded-md">
                          Details
                        </button>
                      </Link> */}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPosts;
