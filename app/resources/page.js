"use client";

import Link from "next/link";
import { Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShare2, FiMinusCircle } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import Head from "next/head";
import Header from "@/components/resources/Header";
import { useState } from "react";
import Image from "next/image";
import Card from "@/components/resources/Card";
import { cultureData } from "../../data/BlogData";
import BlackPattern from "@/components/BlackPattern";

// import animation
import ResourceTransition from "./resourceTransition";



function Resources() {
  const [btn, setBtn] = useState("news");

  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        />
      </Head>
      <ResourceTransition/>
      <div className="bg-[#e2bcfa]">
        <div className="w-full bg-[#e2bcfa] min-h-screen flex flex-col mx-auto overflow-hidden">
          <Header />
          <div className="pt-[7rem] text-[16px] font-[600] uppercase flex items-center mb-[1rem] px-[10px] md:px-[2rem]">
            <li className="">featured article</li>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 px-[10px] md:px-[2rem]">
            <div className="w-full flex flex-col gap-3 col-span-2">
              <h1 className="text-[#020001] text-[44px] font-[600] leading-[40px] lg:pr-[10rem]">
                How to measure language model performance
              </h1>
            </div>
            <div className="w-full flex flex-col gap-3 col-span-1 mt-[2rem] md:mt-0">
              <p className="text-black text-[14px] font-[500] text-justify w-full md:max-w-[350px]">
                Part of an ongoing series highlighting insights from papers that
                have contributed to the development of best practices for
                production ML
              </p>
              <div className="flex">
                <button className="bg-black text-white w-full rounded-full px-2 py-[10px] text-[14px] font-[400] text-opacity-[95%]">
                  Subscribe to our newletter
                </button>
              </div>
            </div>
          </div>
          <hr className="bg-black w-[95%] mx-auto h-[2px] opacity-80 my-[2rem] mt-[4rem] shadow-none" />
          <div className="w-full px-[10px] md:px-[2rem] flex flex-col md:flex-row justify-between gap-[2rem]">
            <div className="flex justify-between md:w-3/3 gap-3 lg:w-2/3 flex-wrap">
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-[600]">Author:</h3>
                <div className="flex gap-3 flex-wrap">
                  <button
                    className="px-3 py-1 border-[2px] border-[#000] rounded-3xl font-[500] text-[16px]"
                    style={{ border: "2px solid black;border-radius:100px" }}
                  >
                    Klrest Agarwal
                  </button>
                  <button
                    className="px-3 py-1 border-[2px] border-[#000] rounded-3xl font-[500] text-[16px]"
                    style={{ border: "2px solid black;border-radius:100px" }}
                  >
                    March 14, 2023
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-[600]">Topics:</h3>
                <div className="flex gap-3 flex-wrap">
                  <button
                    className="px-3 py-1 border-[2px] border-[#000] rounded-3xl font-[500] text-[16px]"
                    style={{ border: "2px solid black;border-radius:100px" }}
                  >
                    Papers to know
                  </button>
                  <button
                    className="px-3 py-1 border-[2px] border-[#000] rounded-3xl font-[500] text-[16px]"
                    style={{ border: "2px solid black;border-radius:100px" }}
                  >
                    Production Machine learning
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 flex-wrap md:w-3/3 lg:w-1/3">
              <div>
                <h3 className="text-[16px] font-[600]">Share</h3>
              </div>
              <div>
                <ul className="flex gap-3">
                  <li>
                    <Link href="" className="underline text-[16px] font-[600]">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="underline text-[16px] font-[600]">
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="underline text-[16px] font-[600]">
                      Youtube
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col overflow-hidde mt-[2rem]">
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
              </div>
            </div>

            <div className="flex mx-auto overflow-hidden">
              <div className="flex overflow-hidden animate-loop-scroll-reverse">
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
                className="flex overflow-hidden animate-loop-scroll-reverse"
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
              </div>
            </div>
          </div>

          {/* ======================= Blog content ================== */}
          <div className="bg-[#fffefa] py-[3rem] px-[10px] md:px-[2rem]">
            <hr className="h-[2.5px] opacity-50 bg-black flex mx-auto" />
            <div className="flex flex-col sm:flex-row items-center py-[10px]">
              <div className="flex gap-[1rem] items-center">
                <GiHamburgerMenu className="w-[25px] h-[25px] cursor-pointer" />
                <h1 className="text-[16px] font-[600]">More Sections</h1>
              </div>
              <div className="flex items-center mx-auto gap-[2rem] flex-wrap">
                <button
                  onClick={() => setBtn("news")}
                  className={`text-[16px] font-[600] py-1 ${
                    btn === "news" && "border-2 border-black px-3 rounded-full"
                  }`}
                >
                  News
                </button>

                <button
                  onClick={() => setBtn("opinion")}
                  className={`text-[16px] font-[600] py-1 ${
                    btn === "opinion" &&
                    "border-2 border-black px-3 rounded-full"
                  }`}
                >
                  Opinion
                </button>
                <button
                  onClick={() => setBtn("sport")}
                  className={`text-[16px] font-[600] py-1 ${
                    btn === "sport" && "border-2 border-black px-3 rounded-full"
                  }`}
                >
                  Sport
                </button>
                <button
                  onClick={() => setBtn("culture")}
                  className={`text-[16px] font-[600] py-1 ${
                    btn === "culture" &&
                    "border-2 border-black px-3 rounded-full"
                  }`}
                >
                  Culture
                </button>
                <button
                  onClick={() => setBtn("lifestyle")}
                  className={`text-[16px] font-[600] py-1 ${
                    btn === "lifestyle" &&
                    "border-2 border-black px-3 rounded-full"
                  }`}
                >
                  Lifestyle
                </button>
              </div>
            </div>
            <hr className="h-[2.5px] opacity-50 bg-black flex mx-auto" />
            {btn === "news" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-start md:place-items-end gap-[2rem] mt-[2rem]">
                <div className="flex flex-col gap-[10px]">
                  <li className="text-[14px] font-[600] list-none py-[5px] px-[10px] rounded-full bg-black text-white text-center">
                    All news
                  </li>
                  <li className="text-[16px] font-[600] list-none">UK</li>
                  <li className="text-[16px] font-[600] list-none">
                    Coronavirus
                  </li>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <li className="text-[16px] font-[600] list-none">Climate</li>
                  <li className="text-[16px] font-[600] list-none">Crisis</li>
                  <li className="text-[16px] font-[600] list-none">
                    Environment
                  </li>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <li className="text-[16px] font-[600] list-none">Tech</li>
                  <li className="text-[16px] font-[600] list-none">Business</li>
                  <li className="text-[16px] font-[600] list-none">
                    Obituaries
                  </li>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <li className="text-[16px] font-[600] list-none">Science</li>
                  <li className="text-[16px] font-[600] list-none">
                    Global Development
                  </li>
                  <li className="text-[16px] font-[600] list-none">Football</li>
                </div>
              </div>
            )}
            <div className="pt-[3rem] pb-[10px] flex flex-col sm:flex-row items-center">
              <div className="flex gap-[5px] items-center">
                <button className="text-[16px] font-[600] text-[#df624f]">
                  Trending
                </button>
                <button className="text-[16px] font-[600] px-[8px] border-l-[2px] border-black">
                  Latest
                </button>
              </div>
              <div className="text-[44px] font-[600] italic opacity-80 flex mx-auto">
                Headline news
              </div>
            </div>
            <hr className="h-[3px] opacity-50 bg-black flex mx-auto" />
            <div className="">
              <div className="mt-[3rem]">
                <Image
                  src="/ResImages/blog.jpg"
                  width={1440}
                  height={700}
                  alt=""
                  className="w-full"
                />
              </div>
              <div className="mt-[1rem]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[1rem]">
                    <button className="border-[2px] border-black rounded-full py-[4px] px-[10px] text-[14px] font-[600]">
                      Business
                    </button>
                    <button className="bg-[#df624f] rounded-full py-[6px] px-[10px] text-[14px] font-[600] text-white">
                      Top News
                    </button>
                  </div>
                  <FiShare2 className="w-[25px] h-[25px]" />
                </div>
                <div className="flex items-start justify-between gap-[1rem] mt-[1rem]">
                  <h1 className="text-[26px] font-[600] w-full md:w-[60%] leading-7">
                    Asia-Pacific markets rise after Wall Street saw gains on
                    optimism led by regional banks
                  </h1>
                  <div className="py-[5px] px-[20px] rounded-full bg-black">
                    <MdArrowOutward className="w-[25px] h-[25px] text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-[1rem]">
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src="/ResImages/b1.jpg"
                      width={30}
                      height={30}
                      alt=""
                      className="rounded-full w-[30px] h-[30px]"
                    />
                    <p className="text-[16px] font-[600]">By Jan Multer</p>
                  </div>
                  <div className="text-[16px] font-[600] opacity-60">
                    125k views . 20m ago
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-[2rem] gap-[1rem]">
              <div className="">
                <div className="">
                  <Image
                    src="/ResImages/b5.jpg"
                    width={500}
                    height={300}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="mt-[1rem]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[1rem]">
                      <button className="border-[2px] border-black rounded-full py-[4px] px-[10px] text-[14px] font-[600]">
                        Business
                      </button>
                      <button className="bg-[#df624f] rounded-full py-[6px] px-[10px] text-[14px] font-[600] text-white">
                        Top News
                      </button>
                    </div>
                    <FiShare2 className="w-[25px] h-[25px]" />
                  </div>
                  <div className="flex items-start justify-between gap-[1rem] mt-[1rem]">
                    <h1 className="text-[24px] font-[600] w-full leading-6">
                      Asia-Pacific markets rise after Wall Street saw gains on
                      optimism led by regional banks
                    </h1>
                    <div className="py-[5px] px-[20px] rounded-full bg-black">
                      <MdArrowOutward className="w-[25px] h-[25px] text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-[1rem]">
                    <div className="flex items-center gap-[10px]">
                      <Image
                        src="/ResImages/b1.jpg"
                        width={30}
                        height={30}
                        alt=""
                        className="rounded-full w-[30px] h-[30px]"
                      />
                      <p className="text-[16px] font-[600]">By Jan Multer</p>
                    </div>
                    <div className="text-[16px] font-[600] opacity-60">
                      125k views . 20m ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[1rem]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                  <div className="">
                    <Image
                      src="/ResImages/b1.jpg"
                      width={400}
                      height={300}
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <button className="border-[2px] w-fit border-black rounded-full py-[4px] px-[10px] text-[14px] font-[600]">
                      Business
                    </button>
                    <h1 className="text-[18px] font-[600] leading-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim harum voluptatum magni.
                    </h1>
                    <div className="flex items-start justify-between">
                      <p className="text-[14px] font-[600] opacity-70">
                        125k views 20m ago
                      </p>
                      <FiShare2 />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                  <div className="">
                    <Image
                      src="/ResImages/b2.jpg"
                      width={400}
                      height={300}
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <button className="border-[2px] w-fit border-black rounded-full py-[4px] px-[10px] text-[14px] font-[600]">
                      Business
                    </button>
                    <h1 className="text-[18px] font-[600] leading-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim harum voluptatum magni.
                    </h1>
                    <div className="flex items-start justify-between">
                      <p className="text-[14px] font-[600] opacity-70">
                        125k views 20m ago
                      </p>
                      <FiShare2 />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                  <div className="">
                    <Image
                      src="/ResImages/b3.jpg"
                      width={400}
                      height={300}
                      alt=""
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <button className="border-[2px] w-fit border-black rounded-full py-[4px] px-[10px] text-[14px] font-[600]">
                      Business
                    </button>
                    <h1 className="text-[18px] font-[600] leading-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Enim harum voluptatum magni.
                    </h1>
                    <div className="flex items-start justify-between">
                      <p className="text-[14px] font-[600] opacity-70">
                        125k views 20m ago
                      </p>
                      <FiShare2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex my-[2rem] mx-auto border-[2px] w-fit border-black rounded-full py-[4px] px-[10px] text-[14px] font-[600]">
              See more
            </button>

            {/* ================ Opinion section ================ */}
            <div className="">
              <div className="flex items-center justify-between">
                <h1 className="text-[32px] font-[700] italic opacity-80">
                  Opinion
                </h1>
                <FiMinusCircle className="h-[30px] w-[30px] opacity-60" />
              </div>
              <hr className="h-[2.5px] opacity-50 bg-black flex mx-auto my-[20px]" />
              <div className="grid grid-cols-1 md:grid-cols-4 md:gap-[1rem]">
                <div className="col-span-1 flex flex-col gap-[10px]">
                  <div className="">
                    <Image
                      src="/ResImages/b4.jpg"
                      width={200}
                      height={400}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <h1 className="text-[18px] font-[600] leading-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur aspernatur mollitia architecto unde maiores
                    fugit!
                  </h1>
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] font-[500] text-[#df624f]">
                      Lorem ipsum dolor sit amet.
                    </p>
                    <Image
                      src="/ResImages/b7.jpg"
                      width={30}
                      height={30}
                      alt=""
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex flex-col-reverse md:flex-col gap-[10px] my-[1rem] md:my-0">
                  <h1 className="text-[18px] font-[600] leading-5">
                    <span className="text-[60px] font-[700]">❝</span> Lorem
                    ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur aspernatur mollitia architecto unde maiores
                    fugit!
                  </h1>
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] font-[500] text-[#df624f]">
                      Lorem ipsum dolor sit amet.
                    </p>
                    <Image
                      src="/ResImages/b7.jpg"
                      width={30}
                      height={30}
                      alt=""
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/ResImages/b4.jpg"
                      width={200}
                      height={400}
                      alt=""
                      className="w-full"
                    />
                    <div className=" bg-white p-[10px] rounded-full absolute bottom-[1rem] right-[1rem]">
                      <MdArrowOutward />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-[10px]">
                  <div className="">
                    <Image
                      src="/ResImages/b4.jpg"
                      width={200}
                      height={400}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <h1 className="text-[18px] font-[600] leading-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur aspernatur mollitia architecto unde maiores
                    fugit!
                  </h1>
                  <div className="flex justify-between items-center">
                    <p className="text-[16px] font-[500] text-[#df624f]">
                      Lorem ipsum dolor sit amet.
                    </p>
                    <Image
                      src="/ResImages/b7.jpg"
                      width={30}
                      height={30}
                      alt=""
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </div>
                </div>
              </div>
              <button className="flex my-[2rem] mx-auto border-[2px] w-fit border-black rounded-full py-[4px] px-[10px] text-[14px] font-[600]">
                See more
              </button>
            </div>

            {/* =========== Culture section ============= */}
            <div className="">
              <div className="flex items-center justify-between">
                <h1 className="text-[32px] text-center flex justify-center mx-auto font-[700] italic opacity-80">
                  Culture
                </h1>
                <FiMinusCircle className="h-[30px] w-[30px] opacity-60" />
              </div>
              <hr className="h-[2.5px] opacity-50 bg-black flex mx-auto my-[20px]" />
              <div className="flex flex-wrap justify-center items-center gap-[1rem] mt-[2rem]">
                {cultureData.map((data, index) => (
                  <Fragment key={data.id}>
                    <Card data={data} />
                    {index === 1 && (
                      <div className="w-[300px] h-[300px] rounded-full">
                        <Image
                          src="/ResImages/bb.jpg"
                          width={300}
                          height={300}
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white w-full pt-[3rem] pb-[1rem]">
            <div className="grid grid-cols-2 gap-[1rem] px-[10px] md:px-[2rem]">
              <hr className="w-full h-[3px] bg-black border-none block opacity-60" />
              <hr className="w-full h-[3px] bg-black border-none block opacity-60" />
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-between gap-[1rem] mt-[2rem] px-[10px] md:px-[2rem]">
              <h1 className="text-[20px] font-[700] uppercase">
                gantry
              </h1>
              <div className="">
                <h1 className="text-[20px] font-[700] ">
                  Get started Today
                </h1>
                <span className="text-[18px] font-[700] ">
                  gantry.io
                </span>
              </div>
              <button className="text-[16px] font-[600] border-[2px] border-black px-[20px] py-[5px] rounded-full">
                gantry.io
              </button>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resources;
