import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAccessToken } from "../../base/store/authStore";
import SpinnerIcon from "../Icons/SpinnerIcon";

export const AuthenticatedLayout = ({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const accessToken = useSelector(selectAccessToken);
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!accessToken) {
      dispatch(logout(null));
      push("/auth/login");
    } else {
      setToken(accessToken);
    }
  }, [accessToken]);

  return (
    <div>
      {token ? (
        children
      ) : (
        <div className='min-h-screen flex justify-center items-center'>
          <SpinnerIcon className='w-16 h-16 animate-spin' />
        </div>
      )}
    </div>
  );
};
