import ActivityIcon from "../../Icons/ActivityIcon";
import CreditCardIcon from "../../Icons/CreditCardIcon";
import UsersIcon from "../../Icons/UsersIcon";
import { Container } from "../../UI/Container";
import { DashboardNavBar } from "./DashboardNavBar";

export const Dashboard = () => {
  return (
    <>
      <DashboardNavBar />

      <Container>
        <div className='flex flex-col w-full min-h-screen'>
          <div className='flex flex-1 flex-col gap-4 py-16 md:gap-8'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              <div className='border p-8 rounded-xl shadow-xl'>
                <div className='flex flex-row items-center justify-between pb-2 space-y-0'>
                  <div className='text-sm font-medium'>User Activity</div>
                  <UsersIcon className='w-4 h-4 text-gray-500' />
                </div>
                <div>
                  <div className='text-2xl font-bold'>+2350</div>
                  <p className='text-xs text-gray-500'>+180.1% from last month</p>
                </div>
              </div>
              <div className='border p-8 rounded-xl shadow-xl'>
                <div className='flex flex-row items-center justify-between pb-2 space-y-0'>
                  <div className='text-sm font-medium'>Sales</div>
                  <CreditCardIcon className='w-4 h-4 text-gray-500' />
                </div>
                <div>
                  <div className='text-2xl font-bold'>+12,234</div>
                  <p className='text-xs text-gray-500'>+19% from last month</p>
                </div>
              </div>
              <div className='border p-8 rounded-xl shadow-xl'>
                <div className='flex flex-row items-center justify-between pb-2 space-y-0'>
                  <div className='text-sm font-medium'>Website Traffic</div>
                  <ActivityIcon className='w-4 h-4 text-gray-500' />
                </div>
                <div>
                  <div className='text-2xl font-bold'>+573</div>
                  <p className='text-xs text-gray-500'>+201 since last hour</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
