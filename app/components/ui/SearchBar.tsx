import { IoIosSearch } from "react-icons/io";
const SearchBar = () => {
  return (
    <div className="relative mt-2">
      <input
        type="text"
        className="w-full rounded-lg text-white bg-[#333333] outline-none py-2 pr-2 pl-8"
        placeholder="Search"
      />
      <IoIosSearch className="absolute text-white bottom-3 left-2" />
    </div>
  );
};

export default SearchBar;
