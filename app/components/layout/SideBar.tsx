import ChatPreview from "../ui/ChatPreview";
import Profile from "../ui/Profile";
import SearchBar from "../ui/SearchBar";
import ChatHeader from "./ChatHeader";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <ChatHeader />
        <SearchBar />
        <ChatPreview />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default SideBar;
