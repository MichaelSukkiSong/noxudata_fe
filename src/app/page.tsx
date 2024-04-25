"use client";

import HeaderSection from "@/components/HeaderSection";
import MiddleSection from "@/components/MiddleSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center bg-slate-100 overflow-hidden">
      {/* header section */}
      <div className="bg-white h-[104px] flex items-center justify-center">
        <HeaderSection />
      </div>

      {/* middle section */}
      <div className="flex flex-col justify-center items-center h-[516px] ">
        <MiddleSection />
      </div>

      {/* footer section */}
      <div className="bg-white h-[144px] flex flex-col justify-center items-center ">
        <FooterSection />
      </div>
    </main>
  );
}
