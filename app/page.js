"use client";

import { useState, useEffect } from "react";
import BlogCard from "@/components/home/BlogCard";
import Header from "@/components/home/Header";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { researchData, projectsData, productData } from "../data/BlogData";
import Pattern from "@/components/home/Pattern";
import Footer from "@/components/Footer";
import Circular from "@/components/home/Circular";
import SemiCircle from "@/components/home/SemiCircle";

import HomeTransition from "@/components/hometransition/homeTransition";


export default function Home() {
  const [showCircular, setShowCircular] = useState(true);
  const [showFirstAnimation, setShowFirstAnimation] = useState(false);

  useEffect(() => {
    const circularTimeout = setTimeout(() => {
      setShowCircular(!showCircular);
    }, 10000);

    return () => {
      clearTimeout(circularTimeout);
    };
  }, [showCircular]);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setShowFirstAnimation(!showFirstAnimation);
    }, 10000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [showFirstAnimation]);

  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        />
      </Head>
      <HomeTransition/>
      <div className="bg-[#000000]">
        <div className="bg-[#000000] w-full min-h-screen flex flex-col mx-auto overflow-hidden">
        
          <Header />
          <div
            className={`w-full pt-[5rem] opacity-80 ${
              showFirstAnimation ? "fade-in" : "fade-out"
            }`}
          >
            {showCircular ? (
              <div
                className={`opacity-80 ${
                  showFirstAnimation ? "fade-in" : "fade-out"
                }`}
              >
                <Circular />
              </div>
            ) : (
              <div
                className={`opacity-80 ${
                  showFirstAnimation ? "fade-in" : "fade-out"
                }`}
              >
                <SemiCircle />
              </div>
            )}
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-[1rem] px-[10px] absolute top-[18rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-[#fff] text-[#000] rounded-full px-[20px] py-[7px] w-fit text-[12px] font-[600] uppercase text-center">
              the continuous ML improvement platform
            </div>
            <div className="flex flex-col justify-between items-center gap-[20px]">
              <h1 className="text-[#fff] text-[44px] font-[500] text-center leading-[45px]">
                Helping teams build distinctive
              </h1>
              <span className="text-[#fff] text-[44px] font-[500] opacity-60 mt-[-15px] text-center leading-[45px]">
                AI applications, together
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-[1.5rem] px-[10px] md:px-[2rem] my-[4rem] cursor-pointer">
            <p className="text-[#fff] text-[16px] font-[400]">
              Gantry{"'"}s platform helps teams turn state-of-the-art <br />
              AI research into applications and that are unique to you, <br />
              your team, your data, and your users.
            </p>
            <div className="flex items-center w-fit gap-[1rem] border-[2px] border-white rounded-full px-[12px] py-[8px]">
              <div className="w-[25px] h-[25px] rounded-full bg-[#fff] flex items-center justify-center">
                <TbPlayerPlayFilled className="text-black w-[18px] h-[18px]" />
              </div>
              <p className="text-[12px] font-[400] uppercase text-[#fff]">
                watch demo video
              </p>
            </div>
          </div>

          {/* ================ pattern ================== */}
          <div className="flex flex-col overflow-hidde">
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
                <Pattern />
                <Pattern />
                <Pattern />
              </div>
            </div>
          </div>

          <hr className="h-[2px] w-[98%] bg-white my-[2rem] mx-auto" />
          <div className="px-[10px]">
            <div className="flex items-center justify-between">
              <h1 className="text-[38px] font-[500] text-white leading-9">
                Latest updates
              </h1>
              <p className="text-[18px] font-[500] text-white underline hover:no-underline cursor-pointer">
                View all updates
              </p>
            </div>
            <div className="flex flex-wrap justify-between gap-[1rem] px-[10px] my-[2rem]">
              {projectsData.map((data) => (
                <BlogCard key={data.id} data={data} />
              ))}
            </div>
          </div>
          <hr className="h-[2px] w-[98%] bg-white my-[2rem] mx-auto" />
          <div className="flex flex-col gap-[4rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem] px-[10px]">
              <h1 className="text-[38px] font-[500] text-white leading-9">
                Safety & responsibility
              </h1>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[24px] font-[500] text-white leading-6">
                  Our work to create safe and beneficial AI requires a deep
                  understanding of the potential risks and benefits, as well as
                  careful consideration of the impact.
                </p>
                <span className="text-[18px] font-[500] text-white underline hover:no-underline cursor-pointer">
                  Learn about safety
                </span>
              </div>
            </div>
            <div className="">
              <Image
                src="/HomeImages/responsibility.jpg"
                width={1000}
                height={500}
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
          <hr className="h-[2px] w-[98%] bg-white mb-[2rem] mt-[5rem] mx-auto" />
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem] px-[10px]">
              <h1 className="text-[38px] font-[500] text-white leading-9">
                Research
              </h1>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[24px] font-[500] text-white leading-6">
                  We research generative models and how to align them with human
                  values.
                </p>
                <span className="text-[18px] font-[500] text-white underline hover:no-underline cursor-pointer">
                  Learn about our research
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-[1rem] px-[10px] my-[4rem]">
              {researchData.map((data) => (
                <BlogCard key={data.id} data={data} />
              ))}
            </div>
          </div>
          <hr className="h-[2px] w-[98%] bg-white my-[2rem] mx-auto" />
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem] px-[10px]">
              <h1 className="text-[38px] font-[500] text-white leading-9">
                Products
              </h1>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[24px] font-[500] text-white leading-6">
                  Our API platform offers our latest models and guides for
                  safety best practices.
                </p>
                <span className="text-[18px] font-[500] text-white underline hover:no-underline cursor-pointer">
                  Explore our products
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-[1rem] px-[10px] my-[4rem]">
              {productData.map((data) => (
                <BlogCard key={data.id} data={data} />
              ))}
            </div>
          </div>
          <hr className="h-[2px] w-[98%] bg-white my-[1rem] mx-auto" />
          <div className="flex flex-col gap-[4rem]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem] px-[10px]">
              <h1 className="text-[38px] font-[500] text-white leading-9">
                Careers at OpenAI
              </h1>
              <div className="flex flex-col gap-[20px]">
                <p className="text-[24px] font-[500] text-white leading-6">
                  Developing safe and beneficial AI requires people from a wide
                  range of disciplines and backgrounds.
                </p>
                <span className="text-[18px] font-[500] text-white underline hover:no-underline cursor-pointer">
                  View careers
                </span>
              </div>
            </div>
            <div className="">
              <Image
                src="/HomeImages/careers.jpg"
                width={1000}
                height={500}
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
          <hr className="h-[2px] w-[98%] bg-white my-[1rem] mt-[5rem] mb-[1rem] mx-auto opacity-30" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] px-[10px] pb-[3rem]">
            <div className="">
              <h1 className="text-[38px] font-[500] text-white leading-9 mb-[1rem]">
                ❝I encourage my team to keep learning. Ideas in different topics
                or fields can often inspire new ideas and broaden the potential
                solution space.❞
              </h1>
              <p className="text-[18px] font-[600] text-white">Lilian Weng</p>
              <p className="text-[18px] font-[400] text-white mt-[-5px]">
                Applied AI at OpenAI
              </p>
            </div>
            <div className="">
              <Image
                src="/HomeImages/qoute.jpg"
                width={500}
                height={500}
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
          <Footer />
          <div className="flex flex-col overflow-hidden mt-[2rem]">
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
          </div>
        </div>
      </div>
    </Fragment>
  );
}
