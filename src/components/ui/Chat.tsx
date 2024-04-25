import { MessageCircle, ChevronsUpDown, Send } from "lucide-react";

const Chat = () => {
  return (
    <div className="flex md:gap-4 gap-2 cursor-pointer">
      <div className=" w-[760px] flex justify-between items-center border border-gray-300 rounded-md ">
        <div className="border-r-2 h-full  flex justify-center items-center px-3 gap-2">
          <div>
            <MessageCircle />
          </div>
          <span>Chat</span>
          <div className="text-gray-400">
            <ChevronsUpDown size={15} />
          </div>
        </div>
        <div className=""></div>
        <div className="flex justify-between w-full">
          <input
            className="pl-4 w-full outline-none"
            placeholder="Start a new chat"
          />

          <div className="pr-2.5 text-gray-400">
            <Send />
          </div>
        </div>
      </div>
      <div className="md:w-[90px] w-[120px] border border-red-500 rounded-md px-3 py-2 text-red-500 text-sm flex justify-center items-center hover:bg-red-50 transition-all delay-75">
        End Chat
      </div>
    </div>
  );
};

export default Chat;
