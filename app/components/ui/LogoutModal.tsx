import { Dispatch, SetStateAction } from "react";
import Spinner from "./Spinner";

type LogoutProps = {
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  handleLogout: () => Promise<void>;
  isLogoutLoading: boolean;
};

const LogoutModal = ({
  isModalActive,
  setIsModalActive,
  handleLogout,
  isLogoutLoading,
}: LogoutProps) => {
  return (
    <>
      {isModalActive && (
        <div className="w-full h-full bg-[#333333] bg-opacity-10 shadow-lg backdrop-blur-sm absolute flex justify-center items-center top-0 right-0">
          <div className="bg-[#121212] p-8 z-10  rounded-md shadow-md text-white">
            <p>Are you sure you want to logout?</p>
            <div className="mt-4 flex justify-center items-center w-full gap-4">
              <button
                onClick={() => setIsModalActive(false)}
                className="bg-dark1 rounded-md p-2"
              >
                Cancel
              </button>
              {!isLogoutLoading && (
                <button
                  onClick={handleLogout}
                  className="bg-red-600 rounded-md p-2"
                >
                  Logout
                </button>
              )}
              {isLogoutLoading && (
                <button className="bg-red-600 rounded-md w-[80px] px-2 py-1">
                  <Spinner bg="white" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutModal;
