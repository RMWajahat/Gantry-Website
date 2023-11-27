"use client";

import React from "react";
import Image from "next/image";

import { BiMenu } from "react-icons/bi";
import { useRef } from "react";
import { ImCross } from "react-icons/im";

import TabCmp from "@/components/blogComponents/tabs/pages";
import DallTab from "@/components/blogComponents/tabs/DallTab";
import WhisperTab from "@/components/blogComponents/tabs/WhisperTab";

import ResourceHero from "../../public/blogImages/ResourceHero.png";
import ResourceLaptop from "../../public/blogImages/ResourceLaptop.png";
import Iceland from "../../public/blogImages/iceland.jpg";
import ResourceStripe from "../../public/blogImages/ResourceStripe.png";

import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";

import Link from "next/link";
import Footer from "@/components/blogComponents/Footer";
import Pattern from "@/components/blogComponents/Pattern";
import Head from "next/head";
import BlackPattern from "@/components/BlackPattern";
// import Header from "@/components/blogComponents/Header";

const BlogResources = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <>
      <Head>
        {/* Import Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;500&family=Roboto+Slab&display=swap"
        />
      </Head>
      <div className=" w-full bg-[#01efff] min-h-[200px] flex flex-col gap-3">
        <div className="w-full flex items-center justify-between px-[10px] md:px-[2rem] py-[1.5rem] h-[80px]">
          <div className="text-[22px] font-[600] text-[#000000] uppercase tracking-wider">
            <Link href="/">gantry</Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="flex justify-between gap-[4rem] items-center">
              <ImCross className="w-[20px] h-[20px] lg:hidden  text-white absolute top-[2rem] left-[2rem]" />
              <Link href="/">
                <li className="text-[18px] font-[600] text-white lg:text-[#000000] list-none lg:list-disc">
                  Product
                </li>
              </Link>
              <Link href="/">
                <li className="text-[18px] font-[600] text-white lg:text-[#000000] list-none lg:list-disc">
                  Solutions
                </li>
              </Link>
              <Link href="/resources">
                <button className="text-center rounded-full bg-black w-fit h-fit text-white text-[14px] font-[500] px-[1.5rem] py-[10px]">
                  Resources
                </button>
              </Link>
              <Link href="/company">
                <li className="text-[18px] font-[600] text-white lg:text-[#000000] list-none lg:list-disc">
                  Company
                </li>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-[1rem]">
            <button className="text-center rounded-full bg-black w-fit h-fit text-white text-[14px] font-[500] px-[1.5rem] py-[10px]">
              Get in touch
            </button>
            <span className="block lg:hidden" onClick={toggleMenu}>
              <BiMenu className="w-[35px] h-[35px] text-black cursor-pointer" />
            </span>
          </div>
        </div>
        <div className="pt-[10rem] mx-auto w-[95%] flex items-start flex-wrap py-5">
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/4 flex flex-col gap-3 pt-0 px-4">
            <div className="flex gap-2 items-center">
              <FaDotCircle /> BLOG
            </div>
            <h1 className="text-[#020001] text-4xl font-bold ">
              How do people actually operationalize ML in 2022?
            </h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/4 flex flex-col gap-3">
            <p className="text-black text-[12px] md:w-4/4 lg:w-3/4 xl:w-2/4 mx-auto">
              Introducing gantry: The tool to iterate on machine
              learning-powered products. Training an ML model is easier than
              ever, but building an ML-powered product is not. ML-powered
              products need their own dedicated tooling stack.
            </p>
            <div className="md:w-4/4 lg:w-3/4 xl:w-2/4 mx-auto">
              <button className="btn bg-black text-white w-full rounded-2xl px-2 py-2">
                Subscribe to our newletter
              </button>
            </div>
          </div>
        </div>
        <hr className="bg-black w-[95%] mx-auto h-[2px] shadow-none" />
        <div className="w-[95%] mx-auto flex justify-between flex-wrap">
          <div className="flex justify-between md:w-3/3 gap-3 lg:w-2/3 flex-wrap">
            <div className="flex flex-col gap-2">
              <h3>Author:</h3>
              <div className="flex gap-3">
                <button
                  className="btn px-3 py-1 rounded-3xl text-sm"
                  style={{ border: "2px solid black", borderRadius: "100px" }}
                >
                  Josh Tobin
                </button>
                <button
                  className="btn px-3 py-1 rounded-3xl text-sm"
                  style={{ border: "2px solid black", borderRadius: "100px" }}
                >
                  March 07, 2023
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Topics:</h3>
              <div className="flex gap-3">
                <button
                  className="btn px-3 py-1 rounded-3xl text-[12px] md:text-sm"
                  style={{ border: "2px solid black;border-radius:100px" }}
                >
                  Papers to know
                </button>
                <button
                  className="btn px-1 py-0 md:py-1 rounded-3xl text-[12px] md:text-sm"
                  style={{ border: "2px solid black;border-radius:100px" }}
                >
                  Production Machine learning
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 flex-wrap md:w-3/3 lg:w-1/3 sm:mt-20px">
            <div>
              <h3>Share</h3>
            </div>
            <div>
              <ul className="flex gap-3">
                <li>
                  <a href="" className="underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="" className="underline">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="" className="underline">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
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
      {/*  */}
      <div className="py-[6rem] w-full bg-[#0000ff] min-h-[200px] flex flex-col gap-3">
        <div className="mx-auto w-[95%] flex items-start flex-wrap py-5">
          <div className="w-full md:w-1/2 lg:w-2/4 xl:w-2/4 flex flex-col pt-0 sm:px-4">
            <h1
              className="text-[white] min-h-[150px] text-4xl xsm:text-5xl lg:text-7xl"
              style={{ fontFamily: "Libre Franklin, sans-serif" }}
            >
              Transforming work and creativity with AI
            </h1>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/4 flex flex-col gap-5">
            <p className="text-white text-xl md:w-4/4 lg:w-3/4 xl:w-3/4 mx-auto">
              Our API platform offers our latest models and guides for safety
              best practices.
            </p>
            <div className="md:w-4/4 lg:w-3/4 xl:w-3/4 mx-auto flex gap-2">
              <button
                className="btn rounded px-2 py-1 text-white flex gap-2 items-center"
                style={{ border: "1px solid white" }}
              >
                Get Started <MdOutlineArrowOutward />
              </button>
              <button className="btn underline text-white flex gap-2 items-center">
                For developers <FaArrowDown />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] lg:max-w-[1200px] lg:w-[1200px] lg-[h-600px] mx-auto bg-cover bg-center min-h-[500px] flex items-center relative px-0">
          <Image
            src={ResourceHero}
            objectFit="cover"
            objectPosition="center center"
            fill
            priority
            alt="Background Image"
            className="absolute w-full h-full"
          />
        </div>
      </div>
      {/*  */}
      <div className="w-full py-[20px] min-h-[100px] mt-[30px] flex flex-col gap-3">
        <hr className="w-[98%] bg-black h-[2px] mx-auto" />
        <div className="w-[98%] mx-auto min-h-[150px] mt-[20px]">
          <h1 className="text-5xl" style={{ fontFamily: "Roboto Slab, serif" }}>
            Models
          </h1>
        </div>
        <hr className="w-[98%] bg-black h-[1px] mx-auto" />
      </div>
      <div className="min-h-[150px] flex w-[98%] mx-auto flex-wrap">
        <div className="md:w-2/2 lg:w-1/2">
          <h1 className="text-4xl font-bold">GPT</h1>
        </div>
        <div className="md:w-2/2 lg:w-1/2 flex flex-col gap-2 min-h-[150px]">
          <p className="text-xl">
            GPT-4 is OpenAI&rsquo;s most advanced system, producing safer and
            more useful responses.
          </p>
          <Link href="" className="underline">
            Learn-about GPT-4
          </Link>
        </div>
        <div>
          <TabCmp />
        </div>
      </div>
      <div className=" bg-[#28044A] min-h-[150px] flex w-full px-3 mx-auto flex-wrap text-[#7CF178]">
        <hr className="bg-green-800 w-[98%] mx-auto h-[1px] mt-[100px] shadow-none" />
        <div className="min-h-[150px] flex w-[100%] mx-auto flex-wrap mt-5">
          <div className="md:w-2/2 lg:w-1/2">
            <h1 className="text-4xl font-bold">DALL-E</h1>
          </div>
          <div className="md:w-2/2 lg:w-1/2 flex flex-col gap-2 min-h-[150px]">
            <p className="text-xl">
              DALL·E is an AI system that can create realistic images and art
              from a description in natural language
            </p>
            <Link href="" className="underline">
              Learn-about DALL-E
            </Link>
          </div>
          <div>
            <DallTab />
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" bg-[#51DA4C] min-h-[150px] flex w-full px-3 mx-auto flex-wrap text-black">
        <hr className="bg-black w-[98%] mx-auto h-[1px] mt-[100px] shadow-none" />
        <div className="min-h-[150px] flex w-[98%] mx-auto flex-wrap mt-5">
          <div className="md:w-2/2 lg:w-1/2">
            <h1 className="text-4xl font-bold">Whisper</h1>
          </div>
          <div className="md:w-2/2 lg:w-1/2 flex flex-col gap-2 min-h-[150px]">
            <p className="text-xl">
              GPT-4 is OpenAI&rsquo;s most advanced system, producing safer and
              more useful responses.
            </p>
            <Link href="" className="underline">
              Learn-about GPT-4
            </Link>
          </div>
          <div>
            <WhisperTab />
          </div>
        </div>
      </div>
      <div className="min-h-[200px] bg-black flex flex-col gap-5 w-full mx-auto py-7">
        <div className="w-[95%] mx-auto flex flex-col gap-4">
          <hr className="w-full bg-white mx-auto h-[1px] mt-[100px]" />
          <h1
            className="text-5xl text-white"
            style={{ fontFamily: "Roboto Slab, serif" }}
          >
            Made for developers
          </h1>
        </div>
        <div className="flex flex-wrap md:gap-0 gap-5 min-h-[200px] text-white p-5">
          <div className="w-full sm:w-2/2 md:w-1/2 flex flex-col gap-3 pl-3">
            <p className="text-xl md:w-[60%]">
              Developers can start building with a just simple API call
            </p>
            <div className="flex flex-col gap-3">
              <Link href="" className="underline flex gap-2 items-center">
                Get started <MdOutlineArrowOutward />
              </Link>
              <Link href="" className="underline flex gap-2 items-center">
                Read documentation <MdOutlineArrowOutward />
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-2/2 md:w-1/2">
            <div
              className="w-full md:w-[80%] min-h-[200px] mx-auto p-3"
              style={{ border: "1px solid white" }}
            >
              <p>
                <span>completion = openai.ChatCompletion.create&#40;</span>{" "}
                <br />
                <span className="ml-[10px]">
                  model={" "}
                  <span className="text-[#51DA4C]">
                    &#34;gpt-3.5-turbo&#34;{" "}
                  </span>
                  ,
                </span>{" "}
                <br />
                <span className="ml-[10px]"> messages=&#91;</span> <br />
                <span className="ml-[15px]">
                  &#123;{" "}
                  <span className="text-[#51DA4C]">
                    &#34;role&#34; &#58; &#34;system&#34;, &#34;content&#34;
                    &#58; &#34;You are a helpful assistant.&#34;
                  </span>{" "}
                  &#125;,
                </span>{" "}
                <br />
                <span>
                  &#123;{" "}
                  <span className="text-[#51DA4C]">
                    &#34;role&#34; &#58; &#34;user&#34;, &#34;content&#34; &#58;
                    &#34;What are some famous astronomical observatories?&#34;{" "}
                  </span>
                  &#125;
                </span>{" "}
                <br />
                <span className="ml-10px">&#93;</span> <br />
                <span>&#41;</span> <br />
              </p>
            </div>
          </div>
        </div>

        <div className="text-white grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-5 my-[50px]">
          <div
            className="w-full min-h-[300px] flex flex-col justify-between p-3"
            style={{ border: "1px solid white" }}
          >
            <div className="flex justify-between text-3xl font-bold">
              <h2>Chat</h2>
              <MdOutlineArrowOutward />
            </div>
            <div>
              <p className="text-xl">
                Developers can use GPT-3 to build interactive chatbots and
                virtual assistants that can carry out conversations in a natural
                and engaging manner.
              </p>
            </div>
          </div>
          <div
            className="w-full min-h-[300px] flex flex-col justify-between p-3"
            style={{ border: "1px solid white" }}
          >
            <div className="flex justify-between text-3xl font-bold">
              <h2>Embedding</h2>
              <MdOutlineArrowOutward />
            </div>
            <div>
              <p className="text-xl">
                With GPT-3, developers can generate embeddings that can be used
                for tasks like text classification, search, and clustering.
              </p>
            </div>
          </div>
          <div
            className="w-full min-h-[300px] flex flex-col justify-between p-3"
            style={{ border: "1px solid white" }}
          >
            <div className="flex justify-between text-3xl font-bold">
              <h2>Analysis</h2>
              <MdOutlineArrowOutward />
            </div>
            <div>
              <p className="text-xl">
                Developers can use GPT-3 to summarize, synthesize, and answer
                questions about large amounts of text.
              </p>
            </div>
          </div>
          <div
            className="w-full min-h-[300px] flex flex-col justify-between p-3"
            style={{ border: "1px solid white" }}
          >
            <div className="flex justify-between text-3xl font-bold">
              <h2>Fine-tuning</h2>
              <MdOutlineArrowOutward />
            </div>
            <div>
              <p className="text-xl">
                Developers can fine-tune GPT-3 on a specific task or domain, by
                training it on custom data, to improve its performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[300px] flex flex-col gap-4 py-5">
        <hr className="h-[1px] mx-auto bg-black w-[98%] mt-[60px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 w-[98%] mx-auto">
          <div className="min-h-200px w-[70%] flex flex-col gap-5">
            <h1 className="text-5xl">Ensuring responsible use of our models</h1>
            <p>
              We help developers use best practices and provide tools such as
              free content filtering, end-user monitoring to prevent misuse, and
              specialized endpoints to scope API usage.
            </p>
            <Link href="" className="underline">
              View product saftey standards
            </Link>
          </div>
          <div className="min-h-200px">
            <Image
              src={ResourceLaptop}
              height={400}
              width={600}
              alt="Laptop img"
            />
          </div>
        </div>
        <hr className="h-[2px] mx-auto bg-black w-[98%] mt-[40px]" />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between w-[98%] mx-auto">
            <h2 className="text-5xl">Built with openAI</h2>
            <Link href="" className="underline">
              view all customer stories
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[98%] mx-auto mt-[70px]">
            <div className="min-h-200px flex flex-col gap-2">
              <Image src={Iceland} height={400} width={600} alt="Iceland img" />
              <div>
                <Link href="" className="hover:underline font-bold text-xl">
                  Government of Iceland
                </Link>
                <p className="text-black">
                  How Iceland is using GPT-4 to preserve its language
                </p>
              </div>
            </div>
            <div className="min-h-200px flex flex-col gap-2">
              <Image
                src={ResourceStripe}
                height={400}
                width={600}
                alt="Stripe img"
              />
              <div>
                <Link href="" className="hover:underline font-bold text-xl">
                  Stripe
                </Link>
                <p className="text-black">
                  Stripe leverages GPT-4 to streamline user experience and
                  combat fraud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
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
    </>
  );
};

export default BlogResources;
