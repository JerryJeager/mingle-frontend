"use client";
import { useRouter } from "next/navigation";
import { getCookie } from "../actions/storeCookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types/user";
import { getBaseUrl } from "../utils/getBaseUrl";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<null | User>(null);
  const getUser = async () => {
    let accessToken = await getCookie("access_token");
    if (!accessToken) {
      router.push("/auth/login");
    }
    let res = await axios.get(`${getBaseUrl()}/user`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // console.log(res)

    if (res.status == 401) {
      router.push("/auth/login");
    }

    if (res.status == 200) {
      setUser(res.data);
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
          <p>{user.email}</p>
          <p>{user.id}</p>
          <p>{user.username}</p>
          <p>{user.auth_type}</p>
        </>
      )}
    </>
  );
};

export default Dashboard;
