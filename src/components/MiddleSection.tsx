import Image from "next/image";

import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import TableWrapper from "@/components/ui/TableWrapper";

import { CircleAlert, ArrowRight } from "lucide-react";
import data from "@/data";

const MiddleSection = () => {
  return (
    <div>
      {/* orange buttons */}
      <div className="mb-5 flex">
        <Button className="flex items-center text-orange-500 px-3 py-1 border-t-2 border-l-2 border-b-2 border-gray-200 font-semibold rounded-l-md bg-white gap-2 hover:bg-orange-50 transition-all delay-75">
          <div className="flex justify-center items-center">
            <CircleAlert size={20} />
          </div>
          Not Confident
        </Button>
        <Button className="flex items-center text-orange-500 px-3 py-1 border-2 border-gray-200 font-semibold rounded-r-md bg-white gap-1 hover:bg-orange-50 transition-all delay-75">
          Human Help
          <div className="flex justify-center items-center">
            <ArrowRight size={20} />
          </div>
        </Button>
      </div>

      {/* instructions section */}
      <div className="flex mb-5 justify-start items-center gap-4">
        <div>
          <Image
            src="/noxudata_logo.jpeg"
            width={40}
            height={40}
            alt="Picture of a person"
            className="rounded-full"
          />
        </div>
        <span>
          To find out how many accounts you have, you can use the following
          query:
        </span>
      </div>

      {/* table section */}
      <div className="pl-14">
        <TableWrapper>
          <Table data={data} />
        </TableWrapper>
      </div>
    </div>
  );
};

export default MiddleSection;
