import { useQuery } from "@tanstack/react-query";

import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./UseAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = UseAxiosSecure();

  const { data: isAdmin = [], isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("res from axios", res.data);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
