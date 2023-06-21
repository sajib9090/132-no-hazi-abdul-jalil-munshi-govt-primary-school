import { useLoaderData } from "react-router-dom";

const DetailsPost = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="card w-[95%] bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={data.photo} alt="Shoes" className="rounded-xl h-[400px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.description}</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default DetailsPost;
