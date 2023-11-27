"use client";
import React from "react";
import Header from "../../Header/Header";
import LeftSidebar from "../../LeftSidebar/LeftSidebar";
import RightSidebar from "../../RightSidebar/RightSidebar";
import { useState } from "react";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
const Dashboard = () => {
  const [showLeftNavList, setShowLeftNavList] = useState(false);
  const [showRightNavList, setShowRightNavList] = useState(false);
  const handleShowNavList = () => {
    setShowLeftNavList((prev) => !prev);
    setShowRightNavList(false);
  };
  const handleShowRightNavList = () => {
    setShowRightNavList((prev) => !prev);
    setShowLeftNavList(false);
  };

  return (
    <div className="dark">
      <Header />
      <div className="flex bg-[#1D1D1D] min-h-[90vh]">
        <LeftSidebar
          show={showLeftNavList}
          onClose={(show) => {
            setShowLeftNavList(show);
          }}
        />
        <div className="w-full md:w-[54%]">
          {/*  Menu */}
          <div className="flex justify-between w-[90%] mx-auto">
            {!showLeftNavList && (
              <span
                className="bg-[#333333] p-[10px] rounded-full   mt-[20px] block md:hidden"
                onClick={handleShowNavList}
              >
                {<BiMenuAltLeft color="white" />}
              </span>
            )}
            {!showRightNavList && (
              <span
                className="bg-[#333333] p-[10px] rounded-full  ml-[20px] mt-[20px] block md:hidden"
                onClick={handleShowRightNavList}
              >
                {<BiMenuAltRight color="white" />}
              </span>
            )}
          </div>
        </div>
        <RightSidebar
          show={showRightNavList}
          onClose={(show) => {
            setShowRightNavList(show);
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
