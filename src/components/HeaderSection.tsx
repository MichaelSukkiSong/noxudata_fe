import Image from "next/image";

const HeaderSection = () => {
  return (
    <div className="flex flex-col md:w-[850px] w-[500px]">
      <div className="flex gap-3 items-center text-black">
        <div>
          <Image
            src="/profile_picture.jpeg"
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
