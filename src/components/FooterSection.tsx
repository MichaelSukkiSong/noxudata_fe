import Button from "@/components/ui/Button";
import Chat from "@/components/ui/Chat";

const FooterSection = () => {
  return (
    <div className="flex flex-col md:w-[850px] w-[600px]">
      <div className="flex gap-4 justify-start mb-4">
        <Button className="text-sm border-gray-200 border-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-all delay-75">
          Suggest question 1
        </Button>
        <Button className="text-sm border-gray-200 border-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-all delay-75">
          Suggest question 2
        </Button>
        <Button className="text-sm border-gray-200 border-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-all delay-75">
          Suggest question 3
        </Button>
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
};

export default FooterSection;
