import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { FaPlus } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

export default function LeftAccordian() {
  return (
    <Accordion fullWidth showDivider={false}>
      <AccordionItem
        key="1"
        aria-label="Web"
        indicator={<FaPlus color="white" />}
        title={<span className="text-white text-[14px]">Web</span>}
        fullWidth
        className="max-w-[230px] w-[250px]  md:max-w-[150px]  lg:max-w-[210px] md:w-[200px] lg:w-[230px] text-white text-[14px] border-t-[1px] border-solid border-[#262626]"
      >
        {/* {defaultContent} */}
        <div className="flex bg-[#1D1D1D] rounded-lg px-[15px] py-[10px] text-[14px] gap-[5px] items-center border-none">
          <GoHomeFill color="white" className="text-[14px]" /> Home
        </div>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="CMS"
        indicator={<FaPlus color="white" />}
        title={<span className="text-white text-[14px]">CMS</span>}
        fullWidth
        className="max-w-[230px] w-[250px]  md:max-w-[150px]  lg:max-w-[210px] md:w-[200px] lg:w-[230px] text-white text-[14px] border-t-[1px] border-solid border-[#262626]"
      >
        <div className="flex bg-[#1D1D1D] text-white rounded-lg px-[15px] py-[10px] text-[14px] gap-[5px] items-center  border-none">
          Cms
        </div>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Canvas"
        indicator={<FaPlus color="white" />}
        title={<span className="text-white text-[14px]">Canvas</span>}
        fullWidth
        className="max-w-[230px] w-[250px]  md:max-w-[150px]  lg:max-w-[210px] md:w-[200px] lg:w-[230px] text-white text-[14px] border-t-[1px] border-solid border-[#262626]"
      >
        <div className="flex bg-[#1D1D1D] text-white rounded-lg px-[15px] py-[10px] text-[14px] gap-[5px] items-center border-none">
          Canvas
        </div>
      </AccordionItem>
    </Accordion>
  );
}
