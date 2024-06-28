"use client";
import { useRouter } from "next/navigation";
import { getCookie } from "../actions/storeCookie";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import { getBaseUrl } from "../utils/getBaseUrl";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import Image from "next/image"

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<null | User>(null);
  const getUser = async () => {
    let accessToken: RequestCookie | undefined;
    let res: AxiosResponse<any, any> | null = null;
    try {
      accessToken = await getCookie("access_token");
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
      <div>Dashboard</div>
      {user && (
        <>
          <p>Email: {user.email}</p>
          <p>Id: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Auth Type: {user.auth_type}</p>
          {user.picture && <Image alt="profile photo" width={150} height={150} className="rounded-full" src={user.picture} />}
        </>
      )}
    </>
  );
};

export default Dashboard;
