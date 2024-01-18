import Link from "next/link";
import { FormProvider } from "react-hook-form";
import { useFormManager } from "../../../../hooks/useFormManager";
import { Button } from "../../../UI/Button";
import { Input } from "../../../UI/Input";
import { PasswordInput } from "../../../UI/PasswordInput";
import { useRegister } from "../hooks/useRegister";
import { registerValidator } from "./registerValidator";

export const Register = () => {
  const { methods, handleSubmit } = useFormManager(registerValidator);
  const { handleRegister, isPending } = useRegister();

  return (
    <div className='flex flex-col px-8 items-center justify-center min-h-screen'>
      <div className='w-full max-w-md mx-auto px-8 py-6 bg-white rounded-md shadow-md '>
        <h2 className='text-2xl font-semibold text-center text-gray-700 '>Sign Up</h2>
        <p className='text-sm text-center text-gray-500 '>Create your account</p>
        <FormProvider {...methods}>
          <form className='mt-8 space-y-6' onSubmit={handleSubmit(handleRegister)}>
            <div className='space-y-1'>
              <label className='text-sm font-medium text-gray-700 ' htmlFor='first_name'>
                First Name
              </label>
              <Input
                className=''
                name='first_name'
                id='first_name'
                placeholder='John Doe'
                required
                type='text'
              />
            </div>

            <div className='space-y-1'>
              <label className='text-sm font-medium text-gray-700 ' htmlFor='last_name'>
                Last Name
              </label>
              <Input className='' name='last_name' id='last_name' placeholder='John Doe' required />
            </div>

            <div className='space-y-1'>
              <label className='text-sm font-medium text-gray-700 ' htmlFor='email'>
                Email
              </label>
              <Input
                className=''
                name='email'
                id='email'
                placeholder='john@example.com'
                required
                type='email'
              />
            </div>

            <div className='space-y-1'>
              <label className='text-sm font-medium text-gray-700 ' htmlFor='password'>
                Password
              </label>
              <PasswordInput
                name='password'
                id='password'
                placeholder='********'
                required
                type='password'
              />
            </div>

            <div>
              <Button
                className='w-full px-4 py-3 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/80'
                type='submit'
                disabled={!methods.formState.isValid}
                isLoading={isPending}
              >
                Register
              </Button>
            </div>
          </form>
        </FormProvider>

        <div className='mt-4 text-sm'>
          Or{" "}
          <Link className='text-primary underline italic' href={"/auth/login"}>
            Login
          </Link>{" "}
          to If you have an account
        </div>
      </div>
    </div>
  );
};
