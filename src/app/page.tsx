"use client";

import HeaderSection from "@/components/HeaderSection";
import MiddleSection from "@/components/MiddleSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-between bg-blue-50 overflow-hidden">
      {/* header section */}
      <div className="bg-white h-40 flex items-center justify-center">
        <HeaderSection />
      </div>

      {/* middle section */}
      <div className="flex flex-col justify-center items-center h-full">
        <MiddleSection />
      </div>

      {/* footer section */}
      <div className="bg-white h-40 flex flex-col justify-center items-center ">
        <FooterSection />
      </div>
    </main>
  );
}
