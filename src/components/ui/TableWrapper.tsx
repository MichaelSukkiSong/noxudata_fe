import { ReactNode } from "react";
import Button from "./Button";
import { CircleAlert, X } from "lucide-react";

interface TableWrapperProps {
  children?: ReactNode;
}

const TableWrapper = ({ children }: TableWrapperProps) => {
  return (
    <div className="border-2 border-gray-200 rounded-2xl bg-white text-gray-500 md:w-[800px] w-[600px] mb-4">
      {/* table section */}
      {children}

      {/* instructions section */}
      <div className="flex gap-2 text-gray-500 font-semibold justify-between items-center bg-gray-50 p-2">
        <div className="flex gap-2 ">
          <div className=" flex justify-center items-center">
            <CircleAlert size={20} />
          </div>
          <span>Only X rows are shown. View full list for more</span>
        </div>
        <div className="text-gray-400 cursor-pointer hover:text-gray-500">
          <X size={18} />
        </div>
      </div>

      {/* buttons section */}
      <div className="flex gap-3 p-3 text-black">
        <Button className="text-sm border-gray-200 border-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-all delay-75">
          Show Full List
        </Button>
        <Button className="text-sm border-gray-200 border-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-all delay-75">
          Show Query
        </Button>
        <Button className="text-sm border-gray-200 border-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-all delay-75">
          Show Chart
        </Button>
        <Button className="text-sm border-gray-200 border-2 px-3 py-2 rounded-md hover:bg-gray-50 transition-all delay-75">
          Pin to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default TableWrapper;
