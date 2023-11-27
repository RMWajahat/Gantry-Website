import React from "react";
import Header from "@/components/update-resources/Header";
import ResourcesTabs from "@/components/update-resources/ResourcesTabs";
import BlackPattern from "@/components/BlackPattern";

const page = () => {
  return (
    <>
      <Header />
      <div className="mx-[10px] md:mx-[2rem] border-t-[2px] border-solid border-gray-400 my-[20px]">
        <h1 className="text-[30px] text-black my-[25px] font-medium">
          Updates & research
        </h1>
        <ResourcesTabs />
        <div className="bg-white w-full pt-[3rem] pb-[1rem]">
          <div className="grid grid-cols-2 gap-[1rem] px-[10px] md:px-[2rem]">
            <hr className="w-full h-[3px] bg-black border-none block opacity-60" />
            <hr className="w-full h-[3px] bg-black border-none block opacity-60" />
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-between gap-[1rem] mt-[2rem] px-[10px] md:px-[2rem]">
            <h1 className="text-[20px] font-[700] uppercase">gantry</h1>
            <div className="">
              <h1 className="text-[20px] font-[700] ">Get started Today</h1>
              <span className="text-[18px] font-[700] ">gantry.io</span>
            </div>
            <button className="text-[16px] font-[600] border-[2px] border-black px-[20px] py-[5px] rounded-full">
              gantry.io
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden mt-[1rem]">
        <div className="flex mx-auto overflow-hidden">
          <div className="flex overflow-hidden animate-loop-scroll">
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
          </div>
          <div
            className="flex overflow-hidden animate-loop-scroll"
            aria-hidden={true}
          >
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
            <BlackPattern />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
