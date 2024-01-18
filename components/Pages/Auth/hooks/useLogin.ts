import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { supabase } from "../../../../db/superbase";

export const useLogin = () => {
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
      toast.success("Registration Complete");
    },
  });

  const handleLogin = (data: any) => {
    mutate(data);
  };

  return { handleLogin, isPending, data, error };
};
