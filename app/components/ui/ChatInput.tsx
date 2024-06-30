"use client"
import { FormEvent } from "react";
import { IoSend } from "react-icons/io5";
const ChatInput = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit} action="" className="flex gap-2">
      <input
        type="text"
        className="w-full py-2 px-4 rounded-md outline-none bg-black text-white caret-yellow"
        placeholder="Message"
      />
      <button className="bg-black p-4 rounded-full flex justify-center items-center">
        <IoSend className="text-yellow" />
      </button>
    </form>
  );
};

export default ChatInput;
