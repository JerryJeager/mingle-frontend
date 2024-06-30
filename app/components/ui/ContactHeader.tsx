"use client";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import { IoArrowBackSharp } from "react-icons/io5";
import Link from "next/link";
import { useParams } from "next/navigation";
import { chats } from "@/app/data/chats";
const ContactHeader = () => {
  const params = useParams<{ id: string }>();
  const contact = chats.filter((c) => c.id == params.id);

  return (
    <div className="w-full border-b-2 border-b-dark1 pb-4 flex justify-between text-white ">
      <div className="flex gap-2 items-center">
        <Link href={"/chat"}>
          <IoArrowBackSharp />
        </Link>
        <div>
          <CgProfile className="text-2xl rounded-full " />
        </div>
        <div>
          <h3 className="font-bold">@{contact && contact[0].username}</h3>
        </div>
      </div>
      <div className=" flex gap-4 items-center">
        <IoSearchOutline />
        <GoInfo />
      </div>
    </div>
  );
};

export default ContactHeader;
