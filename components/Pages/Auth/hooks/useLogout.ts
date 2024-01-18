import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../../../../base/store/authStore";
import { supabase } from "../../../../db/superbase";

export const useLogout = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();

  const { mutate, isPending, data, error } = useMutation({
    async mutationFn() {
      const response = await supabase.auth.signOut();

      if (response.error) {
        throw Error(response.error?.message);
      }
    },
    onError(error) {
      toast.error(error.message);
    },

    onSuccess(data) {
      dispatch(logout(null));

      toast.success("Logout Successful");
      push("/auth/login");
    },
  });

  const handleLogout = () => {
    mutate();
  };

  return { handleLogout, isPending, data, error };
};
