import ChatInput from "@/app/components/ui/ChatInput";
import ContactHeader from "@/app/components/ui/ContactHeader";

const ChatMenu = () => {
  return (
    <div className="fixed top-0 left-0 sm:static bg-[#121212] rounded-r-xl w-full h-full text-white p-4 flex flex-col justify-between">
        <ContactHeader />
        <ChatInput />
    </div>
  );
};

export default ChatMenu;
