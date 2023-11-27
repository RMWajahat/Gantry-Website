import React from "react";
import { PiAlignLeft, PiAlignLeftSimpleFill } from "react-icons/pi";
import { PiAlignCenterHorizontalSimpleFill } from "react-icons/pi";
import { PiAlignRightSimpleFill } from "react-icons/pi";
import { PiAlignTopSimpleFill } from "react-icons/pi";
import { PiAlignCenterVerticalSimpleFill } from "react-icons/pi";
import { PiAlignBottomSimpleFill } from "react-icons/pi";
import { PiAlignCenterVerticalFill } from "react-icons/pi";
import { PiAlignCenterHorizontalFill } from "react-icons/pi";
import RightAccordian from "../RightAccordian/RightAccordian";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const RightSidebar = ({ show, onClose }) => {
  const [closeRightNavList, setCloseRightNavList] = useState(false);
  const handleCloseNavList = () => {
    setCloseRightNavList(false);
    onClose(false);
  };
  return (
    <>
      <div className="hidden md:block ml-auto w-[20%] bg-black border-t-[1px] border-solid border-[#1D1D1D] min-h-[90vh]">
        <div className="flex flex-col w-[90%] mx-auto py-[30px]">
          <div className="flex gap-[10px] w-full justify-center pb-[10px] border-b-[1px] border-solid border-[#262626]">
            <PiAlignLeftSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
            <PiAlignCenterHorizontalSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
            <PiAlignRightSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
            <PiAlignTopSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
            <PiAlignCenterVerticalSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
            <PiAlignBottomSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
            <PiAlignCenterVerticalFill className="text-[#888888] text-[22px] cursor-pointer" />
            <PiAlignCenterHorizontalFill className="text-[#888888] text-[22px] cursor-pointer" />
          </div>
          <div className="py-[10px] flex flex-col gap-[10px]">
            <h4 className="text-[18px] font-medium text-white">Theme </h4>
            <div className="flex bg-[#1D1D1D] rounded-lg px-[15px] py-[15px] text-[14px] gap-[5px] items-center">
              <div className="flex rounded-lg">
                <span className="bg-white max-w-[25px] w-[30px]  lg:max-w-[40px] cursor-pointer xl:min-w-[40px] 2xl:min-w-[60px]  2xl:w-1/5 3xl:max-w-[57px] h-[30px] rounded-l-md"></span>
                <span className="bg-gray-300 cursor-pointer max-w-[25px] w-[30px] lg:max-w-[40px] xl:min-w-[40px] 2xl:min-w-[60px] 2xl:w-1/5 3xl:max-w-[57px]  h-[30px]"></span>
                <span className="bg-gray-500 cursor-pointer max-w-[25px] w-[30px] lg:max-w-[40px] xl:min-w-[40px] 2xl:min-w-[60px] 2xl:w-1/5 3xl:max-w-[57px] h-[30px]"></span>
                <span className="bg-[#2B2A4C] cursor-pointer max-w-[25px] w-[30px] lg:max-w-[40px] xl:min-w-[40px] 2xl:min-w-[60px] 2xl:w-1/5 3xl:max-w-[57px] h-[30px]"></span>
                <span className="bg-[#9AD0C2] cursor-pointer max-w-[25px] w-[30px] lg:max-w-[40px] xl:min-w-[40px] 2xl:min-w-[60px] 2xl:w-1/5 3xl:max-w-[57px] h-[30px] rounded-r-md"></span>
              </div>
            </div>
            <span className="cursor-pointer flex bg-[#1D1D1D] rounded-lg px-[10px] py-[5px] text-[14px] gap-[5px] items-center text-white justify-center">
              Shuffle
            </span>
          </div>
          <div className="border-t-[1px] border-solid border-[#262626]">
            <RightAccordian />
          </div>
        </div>
      </div>
      {/*     Mobile View */}
      {
        <div
          className={`fixed top-0  right-0 md:hidden w-[300px] h-full bg-black  overflow-hidden transition-transform transform ${
            show ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <span
            className="bg-[#333333] p-[10px] rounded-full  ml-[20px] mt-[20px] block md:hidden absolute -top-[7px] left-[2px] "
            onClick={handleCloseNavList}
          >
            <IoClose color="white" />
          </span>
          <div className="flex flex-col w-[90%] mx-auto py-[30px] my-[30px]">
            <div className="flex gap-[10px] w-full justify-center pb-[10px] border-b-[1px] border-solid border-[#262626]">
              <PiAlignLeftSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
              <PiAlignCenterHorizontalSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
              <PiAlignRightSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
              <PiAlignTopSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
              <PiAlignCenterVerticalSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
              <PiAlignBottomSimpleFill className="text-[#888888] text-[22px] cursor-pointer" />
              <PiAlignCenterVerticalFill className="text-[#888888] text-[22px] cursor-pointer" />
              <PiAlignCenterHorizontalFill className="text-[#888888] text-[22px] cursor-pointer" />
            </div>
            <div className="py-[10px] flex flex-col gap-[10px]">
              <h4 className="text-[18px] font-medium text-white">Theme </h4>
              <div className="flex bg-[#1D1D1D] rounded-lg px-[15px] py-[15px] text-[14px] gap-[5px] items-center">
                <div className="flex rounded-lg cursor-pointer">
                  <span className="bg-white w-[50px] h-[30px] rounded-l-md cursor-pointer"></span>
                  <span className="bg-gray-300 w-[50px]  h-[30px] cursor-pointer"></span>
                  <span className="bg-gray-500 w-[50px] h-[30px] cursor-pointer"></span>
                  <span className="bg-[#2B2A4C] w-[48px] h-[30px] cursor-pointer"></span>
                  <span className="bg-[#9AD0C2] w-[45px] h-[30px] rounded-r-md cursor-pointer"></span>
                </div>
              </div>
              <span className="cursor-pointer flex bg-[#1D1D1D]  rounded-lg px-[10px] py-[5px] text-[14px] gap-[5px] items-center text-white justify-center">
                Shuffle
              </span>
            </div>
            <div className="border-t-[1px] border-solid border-[#262626]">
              <RightAccordian />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default RightSidebar;
