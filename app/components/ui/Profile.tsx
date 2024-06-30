"use client";
import { deleteCookie, getCookie } from "@/app/actions/storeCookie";
import { User } from "@/app/types/user";
import { getBaseUrl } from "@/app/utils/getBaseUrl";
import axios, { AxiosResponse } from "axios";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { MdOutlineLogout } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import LogoutModal from "./LogoutModal";

const Profile = () => {
  const [user, setUser] = useState<null | User>(null);
  const [isModalActive, setIsModalActive] = useState(false)
  const [isLogoutLoading, setIsLogoutLoading] = useState(false)
  let router = useRouter();
  const handleLogout = async () => {
    setIsLogoutLoading(true)
    await deleteCookie("mingle_token")
    await deleteCookie("mingle_user_id")
    setIsLogoutLoading(false)
    router.push("/auth/login")
  }
  let modalProps = {handleLogout, setIsModalActive, isModalActive, isLogoutLoading}
  const getUser = async () => {
    let accessToken: RequestCookie | undefined;
    let res: AxiosResponse<any, any> | null = null;
    try {
      accessToken = await getCookie("mingle_token");
      if (!accessToken) {
        router.push("/auth/login");
      }
      res = await axios.get(`${getBaseUrl()}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken?.value}`,
        },
      });
      if (res && res.status == 200) {
        setUser(res.data);
      }
    } catch (error) {
      router.push("/auth/login");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <section className="flex w-full justify-between items-center  bg-dark1 pt-4 border-t-2 border-t-[#282828] ">
        <div className="flex gap-2  items-center">
          {" "}
          <div>
            {user && user.picture && (
              <Image
                src={user.picture}
                alt="profile-photo"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            {user && !user.picture && (
              <CgProfile className="text-2xl rounded-full text-white" />
            )}
          </div>
          <div className="text-white">
            <p className="opacity-80 font-bold">@{user && user.username}</p>
            <p className="opacity-60 text-xs">{user && user.email}</p>
          </div>
        </div>
        <div className="flex gap-6 text-white">
          <button onClick={() => setIsModalActive(prev => !prev)}>
            <MdOutlineLogout />
          </button>
          <IoSettingsSharp />
        </div>
      </section>
      <LogoutModal {...modalProps} />
    </>
  );
};

export default Profile;
