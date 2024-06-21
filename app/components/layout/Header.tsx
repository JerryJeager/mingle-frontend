import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center  bg-dark1 px-[10%] lg:px-[20%] py-6 border-b border-b-[#282828] shadow-lg">
      <div>
        <h1 className="text-white font-black text-3xl">
          <span className="text-yellow">M</span>ingle
        </h1>
      </div>
      <div>
        <Link href={"/auth"}>
          <button className="text-white bg-yellow py-2 px-4 rounded-md">Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
