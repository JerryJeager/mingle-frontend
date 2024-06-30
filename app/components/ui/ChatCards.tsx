import { ChatPreview } from "@/app/types/chat";
import Link from "next/link";
import { CgProfile } from "react-icons/cg"
import { HiDotsVertical } from "react-icons/hi";

const ChatCards = ({chat}: {chat: ChatPreview}) => {
  return (
    <Link href={`/chat/${chat.id}`} className="cursor-pointer hover:bg-[#121212] rounded-lg w-full flex justify-between items-center p-2">
        <div className="flex gap-2">
            <div>
                <CgProfile className="text-2xl rounded-full text-white" />
            </div>
            <div className="text-white">
                <h3 className="font-bold">@{chat.username}</h3>
                <p className="opacity-55 line-clamp-1">{chat.messagePreview}</p>
            </div>
        </div>
        <div>
            <HiDotsVertical className="text-white" />
        </div>
    </Link>
  )
}

export default ChatCards