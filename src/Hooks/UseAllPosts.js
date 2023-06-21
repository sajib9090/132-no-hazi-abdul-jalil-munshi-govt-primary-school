import { useQuery } from "@tanstack/react-query";

const UseAllPosts = () => {
  const {
    data: allPosts = [],
    refetch,
    isloading: loading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
      return res.json();
    },
  });
  return [allPosts, refetch, loading];
};

export default UseAllPosts;
