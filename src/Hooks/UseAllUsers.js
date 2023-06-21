import { useQuery } from "@tanstack/react-query";

const UseAllUsers = () => {
  const {
    data: users = [],
    refetch,
    isloading: loading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users`);
      return res.json();
    },
  });
  return [users, refetch, loading];
};

export default UseAllUsers;
