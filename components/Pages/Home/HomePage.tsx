import Link from "next/link";
import { Container } from "../../UI/Container";

export const HomePage = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center py-12 md:py-24 lg:py-32'>
      <Container className=''>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <h1 className='text-4xl font-bold text-primary tracking-tighter sm:text-5xl md:text-6xl'>
            Welcome to Our Platform
          </h1>
          <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed '>
            We provide the best services for your needs. Join us today and experience the
            difference.
          </p>
          <div className='flex flex-col gap-2 sm:flex-row'>
            <Link
              className='inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-secondary shadow'
              href='/auth/login'
            >
              Login
            </Link>

            <Link
              className='inline-flex h-10 items-center justify-center rounded-md border border-primary text-primary px-8 text-sm font-medium shadow-sm'
              href='/auth/register'
            >
              Register
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
