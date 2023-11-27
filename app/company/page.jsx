"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { useRef } from "react";
import { ImCross } from "react-icons/im";

import HeroImg from "../../public/blogImages/HeroImg.png";
import Footer from "@/components/blogComponents/Footer";
import Pattern from "@/components/blogComponents/Pattern";
// import Header from "@/components/blogComponents/Header";

import CompanyTransition from "./tocompanyTransition";


const Company = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <>
      <CompanyTransition/>
      <div className="w-full flex items-center justify-between px-[10px] md:px-[2rem] py-[1.5rem] h-[80px] bg-[#3c0001] ">
        <div className="text-[22px] font-[600] text-white uppercase tracking-wider">
          <Link href="/">gantry</Link>
        </div>
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="flex justify-between gap-[4rem] items-center bg-[#3c0001] lg:bg-[#3c0001] menu">
            <ImCross className="w-[20px] h-[20px] lg:hidden  text-white absolute top-[2rem] left-[2rem]" />
            <Link href="/">
              <li className="text-[18px] font-[600] text-white  list-none lg:list-disc">
                Product
              </li>
            </Link>
            <Link href="/">
              <li className="text-[18px] font-[600] text-white list-none lg:list-disc">
                Solutions
              </li>
            </Link>
            <Link href="/resources">
              <li className="text-[18px] font-[600]  text-white list-none lg:list-disc">
                Resources
              </li>
            </Link>
            <Link href="/company">
              <button className="text-center rounded-full bg-white w-fit h-fit text-black text-[14px] font-[500] px-[1.5rem] py-[10px]">
                Company
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-[1rem]">
          <button className="text-center rounded-full bg-white w-fit h-fit text-black text-[14px] font-[500] px-[1.5rem] py-[10px]">
            Get in touch
          </button>
          <span className="block lg:hidden" onClick={toggleMenu}>
            <BiMenu className="w-[35px] h-[35px] text-white cursor-pointer" />
          </span>
        </div>
      </div>
      <div className="bg-[#3c0001] min-h-[200px]">
        <div className="pt-[10rem] mx-auto flex items-start flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-2/4 flex justify-start">
            <h1 className="text-[#fa4c27] text-[3rem] font-bold p-6">
              About Gantry
            </h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/4 p-4">
            <p className="text-white text-[12px] w-[80%] md:w-4/4 lg:w-3/4 xl:w-2/4 mx-auto">
              Introducing gantry: The tool to iterate on machine
              learning-powered products. Training an ML model is easier than
              ever, but building an ML-powered product is not. ML-powered
              products need their own dedicated tooling stack.
            </p>
          </div>
        </div>
        {/* ================ pattern ================== */}
        <div className="flex flex-col overflow-hidden">
          <div className="flex mx-auto overflow-hidden">
            <div className="flex overflow-hidden animate-loop-scroll">
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
            <div
              className="flex overflow-hidden animate-loop-scroll"
              aria-hidden={true}
            >
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
          </div>

          <div className="flex mx-auto overflow-hidden">
            <div className="flex overflow-hidden animate-loop-scroll-reverse">
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
            <div
              className="flex overflow-hidden animate-loop-scroll-reverse"
              aria-hidden={true}
            >
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <div className="w-[80%] lg:max-w-[1200px] lg:w-[1200px] lg-[h-600px] mx-auto bg-cover bg-center min-h-[500px] flex items-center relative px-0">
          <Image
            src={HeroImg}
            objectFit="cover"
            objectPosition="center center"
            fill
            priority
            alt="Hero Img"
            className="absolute w-full h-full"
          />
        </div>
      </div>

      {/*  */}
      <div className="flex flex-wrap pt-[20px] container">
        {/* Left Section */}
        <div className="w-full md:w-3/3 lg:w-1/3 xl:w-2/4 p-4 flex flex-col justify-start gap-3">
          <hr className="h-1 bg-black w-3/4" />
          <div className="w-[80%]">
            <h3 className="text-xl font-bold">About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              omnis vitae consequatur explicabo, tempore dignissimos?
            </p>
          </div>
          <hr className="h-1 bg-black w-3/4" />
          <div className="flex flex-col w-[70%]">
            <h3 className="text-xl font-bold">Industries</h3>
            <div className="flex flex-wrap gap-2">
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Artificial Intelligence
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Developer Platform
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Enterprise Software
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Information Technology
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Search Engine
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold">Location</h3>
            <p>Canada, Canada, Canada</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Models in production</h3>
            <p>14+</p>
          </div>
          <div className="w-[80%]">
            <h3 className="text-xl font-bold">Uses cases</h3>

            <ul className="pl-10 list-disc">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
                exercitationem!
              </li>
              <li>Lorem ipsum dolor sit amet consectetur exercitationem!</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing,
                exercitationem!
              </li>
              <li>Lorem ipsum dolor sit amet, exercitationem!</li>
            </ul>
          </div>
          <div className="w-[70%]">
            <h3 className="text-xl font-bold">From Stack</h3>
            <div className="flex flex-wrap gap-2">
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Javascript
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                React
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Typescript
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Google drive
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Next
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Redux
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Tailwind
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                SCASS
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Github
              </button>
              <button
                className="p-2"
                style={{ border: "1px solid black;border-radius:100px" }}
              >
                Python
              </button>
              <button
                className="px-3"
                style={{
                  border: "1px solid black;border-radius:100px;",
                }}
              >
                Web
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/4 p-4 ">
          <div className="p-6 rounded-lg w-[90%] flex flex-col gap-2">
            <h3 className="text-xl font-bold">
              A conversation with Karous Sariola of Coveo
            </h3>
            <p className="text-gray-800">
              Welcome to Production ML Papers to know, a series from Gantry
              highlighting papers we think have been important to the evolving
              practice of production ML We have covered a few papers already in
              our newsletter, Continuel learning, and on Twitter. Due to the
              positive reception we decided to turn these into blog posts.
            </p>
          </div>
          <div className="border-l-[2px] border-solid border-black px-6 w-[90%] font-bold flex flex-col gap-3">
            <p>
              If you want a single machine learning model that can solve a
              variety of image classification tasks, uou might look to an
              open-vocabulary model like CLIP.
            </p>
            <p>
              CLIP achieves near-state-of-the-art zero-shot performance on
              certain classification tasks, but not all (e.g., not even MNIST).
              Ideally, we would be able to use a small amount of data to adapt
              the model to new tasks we encounter them.
            </p>
            <p>
              But naively fine-tuning it to improve performance on a new task
              leads performance degradation on older ones(The catastrophic
              forgetting problem).
            </p>
            <p>
              Todays paper purposes a solution, based on the idea model
              patching.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="bg-white w-full px-[10px] md:px-[2rem] pt-[3rem] pb-[1rem]">
          <div className="grid grid-cols-2 gap-[1rem]">
            <hr className="w-full h-[3px] bg-black border-none block opacity-60" />
            <hr className="w-full h-[3px] bg-black border-none block opacity-60" />
          </div>
          <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-between gap-[1rem] mt-[2rem]">
            <h1 className="text-[20px] font-[700] uppercase text-black">
              gantry
            </h1>
            <div className="">
              <h1 className="text-[20px] font-[700] text-black">
                Get started Today
              </h1>
              <span className="text-[18px] font-[700] text-black">
                gantry.io
              </span>
            </div>
            <button className="text-[16px] text-black font-[600] border-[2px] border-black px-[20px] py-[5px] rounded-full">
              gantry.io
            </button>
          </div>
        </div>
        {/* ================ pattern ================== */}
        <div className="flex flex-col overflow-hidden  mb-0">
          <div className="flex mx-auto overflow-hidden">
            <div className="flex mx-auto overflow-hidden animate-loop-scroll">
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
            <div
              className="flex overflow-hidden animate-loop-scroll"
              aria-hidden={true}
            >
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
              <Pattern />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;