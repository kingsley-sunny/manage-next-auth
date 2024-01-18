import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as zod from "zod";

const schema = zod.object({
  name: zod.string().min(1, { message: "Required" }),
  age: zod.number().min(10),
});

export const useFormManager = (validator: zod.infer<any>) => {
  const methods = useForm({
    shouldUseNativeValidation: false,
    shouldUnregister: true,
    resolver: validator ? zodResolver(validator) : undefined,
    mode: "all",
  });

  const { control, handleSubmit, reset, register, resetField } = methods;
  const isValidationPassed = methods.formState.isValid;

  return { methods, control, handleSubmit, reset, register, resetField, isValidationPassed };
};
