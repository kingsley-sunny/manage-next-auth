import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { supabase } from "../../../../db/superbase";

export const useRegister = () => {
  const { mutate, isPending, data, error } = useMutation({
    async mutationFn(data: any) {
      const response = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            firstName: data.first_name,
            lastName: data.last_name,
          },
        },
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

  const handleRegister = (data: any) => {
    mutate(data);
  };

  return { handleRegister, isPending, data, error };
};
