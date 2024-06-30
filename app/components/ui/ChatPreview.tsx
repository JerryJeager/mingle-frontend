import { chats } from "@/app/data/chats";
import ChatCards from "./ChatCards";

const ChatPreview = () => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      {chats.map((chat) => (
        <ChatCards key={chat.username} chat={chat} />
      ))}
    </div>
  );
};

export default ChatPreview;
