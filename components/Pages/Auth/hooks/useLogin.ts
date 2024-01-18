import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAccessToken, setUser } from "../../../../base/store/authStore";
import { supabase } from "../../../../db/superbase";

export const useLogin = () => {
  const dispatch = useDispatch();

  const { mutate, isPending, data, error } = useMutation({
    async mutationFn(data: any) {
      const response = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (response.error) {
        throw Error(response.error?.message);
      }

      // then store the use int the database
      return response.data;
    },
    onError(error) {
      toast.error(error.message);
    },

    onSuccess(data) {
      dispatch(
        setAccessToken({ token: data.session.access_token, maxAge: data.session.expires_in })
      );
      dispatch(setUser(data.user));

      toast.success("Login Successful");
    },
  });

  const handleLogin = (data: any) => {
    mutate(data);
  };

  return { handleLogin, isPending, data, error };
};
