import uniqid from "uniqid";
import { ChevronsUpDown } from "lucide-react";
import { RowData, Tableprops } from "@/utils/types";

const Table = ({ data }: Tableprops) => {
  const renderedRows = data.map((row: RowData) => {
    return (
      <tr className="border-b" key={uniqid()}>
        <td className="py-1.5 pl-4 font-normal text-black">{row.ID}</td>
        <td className="py-1.5 pl-4 font-normal text-black">{row.Name}</td>
        <td className="py-1.5 pl-4 font-normal text-black">{row.Industry}</td>
        <td className="py-1.5 pl-4 font-normal text-black">{row.City}</td>
        <td className="py-1.5 pl-4 font-normal text-black">{row.State}</td>
        <td className="py-1.5 pl-4 font-normal text-black">{row.Segment}</td>
        <td className="py-1.5 pl-4 font-normal text-black">{row.OwnerID}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2 w-full">
      <thead>
        <tr className="border-b-2">
          <th className="py-2 pl-1 font-normal">
            <div className="flex justify-start pl-2">
              <ChevronsUpDown size={15} className="cursor-pointer" />
            </div>
          </th>
          <th className="py-2 pl-1 font-normal">
            <div className="flex gap-2 pl-3">
              <span>Name</span>
              <div className="flex justify-center items-center">
                <ChevronsUpDown size={15} className="cursor-pointer" />
              </div>
            </div>
          </th>
          <th className="py-2 pl-1 font-normal">Industry</th>
          <th className="py-2 pl-1 font-normal">
            <div className="flex gap-2 pl-3">
              <span>City</span>
              <div className="flex justify-center items-center">
                <ChevronsUpDown size={15} className="cursor-pointer" />
              </div>
            </div>
          </th>
          <th className="py-2 pl-1 font-normal">
            <div className="flex gap-2 pl-3">
              <span>State</span>
              <div className="flex justify-center items-center">
                <ChevronsUpDown size={15} className="cursor-pointer" />
              </div>
            </div>
          </th>
          <th className="py-2 pl-1 font-normal">Segment</th>
          <th className="py-2 pl-1 font-normal">
            <div className="flex gap-2 pl-3">
              <span>Owner ID</span>
              <div className="flex justify-center items-center">
                <ChevronsUpDown size={15} className="cursor-pointer" />
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
