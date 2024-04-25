import Image from "next/image";

const HeaderSection = () => {
  return (
    <div className="flex flex-col md:w-[850px] w-[500px]">
      <div className="flex gap-[16px] items-center text-black">
        <div>
          <Image
            src="/1b25ee1372c134a5a04c9f4e466a960d.jpeg"
            width={40}
            height={40}
            alt="Picture of a person"
            className="rounded-full"
          />
        </div>
        <span>List my top 10 accounts</span>
      </div>
    </div>
  );
};

export default HeaderSection;
