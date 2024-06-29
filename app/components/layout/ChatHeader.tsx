import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";

const ChatHeader = () => {
  return (
    <>
      <header className="flex w-full justify-between items-center  bg-dark1 pb-4 border-b-2 border-b-[#282828] ">
        <div className="flex items-center flex-col">
          <Link href={"/"}>
            <h1 className="text-white font-black text-3xl">
              <span className="text-yellow">M</span>ingle
            </h1>
            <p className="text-white opacity-80 text-xs">V-1.01</p>
          </Link>
        </div>
        <div className="flex gap-6 text-white">
          <FaPlus />
          <IoFilter />
        </div>
      </header>
    </>
  );
};

export default ChatHeader;
