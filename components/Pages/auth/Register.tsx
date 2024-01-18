import Link from "next/link";
import { Button } from "../../UI/Button";
import { Input } from "../../UI/Input";
import { PasswordInput } from "../../UI/PasswordInput";

export const Register = () => {
  return (
    <div className='flex flex-col px-8 items-center justify-center min-h-screen'>
      <div className='w-full max-w-md mx-auto px-8 py-6 bg-white rounded-md shadow-md '>
        <h2 className='text-2xl font-semibold text-center text-gray-700 '>Sign Up</h2>
        <p className='text-sm text-center text-gray-500 '>Create your account</p>
        <div className='mt-8 space-y-6'>
          <div className='space-y-1'>
            <label className='text-sm font-medium text-gray-700 ' htmlFor='fullname'>
              Full Name
            </label>
            <Input className='' id='fullname' placeholder='John Doe' required type='text' />
          </div>
          <div className='space-y-1'>
            <label className='text-sm font-medium text-gray-700 ' htmlFor='email'>
              Email
            </label>
            <Input className='' id='email' placeholder='john@example.com' required type='email' />
          </div>
          <div className='space-y-1'>
            <label className='text-sm font-medium text-gray-700 ' htmlFor='password'>
              Password
            </label>
            <PasswordInput id='password' placeholder='********' required type='password' />
          </div>
          <div>
            <Button
              className='w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500'
              type='submit'
            >
              Sign Up
            </Button>
          </div>
        </div>

        <div className='mt-4 text-sm'>
          Or{" "}
          <Link className='text-blue-600 underline italic' href={"/auth/login"}>
            Login
          </Link>{" "}
          to If you have an account
        </div>
      </div>
    </div>
  );
};
