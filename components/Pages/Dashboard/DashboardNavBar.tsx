import { useSelector } from "react-redux";
import { selectUser } from "../../../base/store/authStore";
import { Button } from "../../UI/Button";
import { Container } from "../../UI/Container";
import { useLogout } from "../Auth/hooks/useLogout";

export const DashboardNavBar = () => {
  const user = useSelector(selectUser);
  const { handleLogout, isPending } = useLogout();

  return (
    <div className='border shadow-sm'>
      <Container className='py-6 flex justify-between items-center flex-wrap gap-4'>
        <h1 className='text-xl lg:text-3xl'>
          Welcome {user?.user_metadata.firstName} {user?.user_metadata.lastName}
        </h1>

        <Button
          onClick={() => {
            handleLogout();
          }}
          isLoading={isPending}
          className='border-red-600 border text-red-600 font-semibold rounded-md px-12'
        >
          Logout
        </Button>
      </Container>
    </div>
  );
};
