import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  const dateString = post.createdAt;
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleString();
  return (
    <Link to={`/posts/${post._id}`}>
      <div className="w-[100%] px-4 pt-8 pb-4">
        <img className="h-[220px]" src={post.photo} alt="" />
        <h3 className="font-bold text-[18px] py-5 text-[#666666]">
          {post.title}
        </h3>
        <p className="text-[#666666] text-[13px]">
          Posted on <span className="pl-2 font-semibold">{formattedDate}</span>
        </p>
        <p className="text-[14px] mt-5">
          {post.description.length > 190
            ? post.description.slice(0, 190) + `....See More`
            : post.description}
        </p>
      </div>
    </Link>
  );
};

export default SinglePost;
