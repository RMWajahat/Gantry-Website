"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import LeftAccordian from "../LeftAccordian/LeftAccordian";
import { useState } from "react";
const LeftSidebar = ({ show, onClose }) => {
  const [closeLeftNavList, setCloseLeftNavList] = useState(false);
  const handleCloseNavList = () => {
    setCloseLeftNavList(false);
    onClose(false);
  };

  return (
    <>
      <div className="hidden md:block  w-[20%] bg-black border-t-[1px] border-solid border-[#1D1D1D] min-h-[90vh]">
        <div className="flex flex-col w-[95%] mx-auto py-[30px]">
          <div className="flex w-full flex-col items-center">
            <Tabs
              aria-label="Options"
              className="w-[85%]  sm:w-full  xl:w-[95%]"
            >
              <Tab key="pages" title="Pages">
                <div className=" w-[80%]  lg:w-[90%]">
                  <LeftAccordian />
                </div>
              </Tab>
              <Tab key="layer" title="Layers">
                <Card>
                  <CardBody>Layers</CardBody>
                </Card>
              </Tab>
              <Tab key="assets" title="Assets">
                <Card>
                  <CardBody>Assets</CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      {
        <div
          className={`fixed z-[100] top-0  left-0 md:hidden w-[300px] h-screen bg-black  overflow-hidden transition-transform transform ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <span
            className="bg-[#333333] p-[10px] rounded-full  ml-[20px] mt-[20px] block md:hidden absolute -top-[7px] right-1 "
            onClick={handleCloseNavList}
          >
            <IoClose color="white" />
          </span>
          <div className="flex flex-col w-[95%] mx-auto py-[30px] my-[30px]">
            <div className="flex  flex-col items-center  w-[280px]  ">
              <Tabs aria-label="Options" className="w-[95%]">
                <Tab key="pages" title="Pages">
                  <div className="border-t-[1px] border-solid border-[#262626] ">
                    <LeftAccordian />
                  </div>
                </Tab>
                <Tab key="layer" title="Layers">
                  <div className="border-t-[1px] border-solid border-[#262626]  px-[5px] ">
                    <div className="flex bg-[#1D1D1D] text-white rounded-lg px-[15px] py-[10px] text-[14px] gap-[5px] items-center">
                      Layers
                    </div>
                  </div>
                </Tab>
                <Tab key="assets" title="Assets">
                  <Card>
                    <CardBody>Assets</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default LeftSidebar;
