"use client";

import React from "react";
import Footer from "@/components/blogComponents/Footer";
import BlackPattern from "@/components/BlackPattern";
import Header from "@/components/blogComponents/Header";
// import Header from "@/components/update-resources/Header";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { useRef } from "react";
import { ImCross } from "react-icons/im";
const Learning = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <div className="bg-[#F46035] min-h-[400px] w-full max-w-[100vw] overflow-x-hidden">
      <div className="w-full flex items-center justify-between px-[10px] md:px-[2rem] py-[1.5rem] h-[80px]">
        <div className="text-[22px] font-[600] text-[#000000] uppercase tracking-wider">
          <Link href="/">gantry</Link>
        </div>
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="flex justify-between gap-[4rem] items-center bg-red-600 lg:bg-transparent menu">
            <ImCross className="w-[20px] h-[20px] lg:hidden absolute top-[2rem] left-[2rem]" />
            <Link href="/">
              <li className="text-[18px] font-[600] text-[#000000] list-none lg:list-disc">
                Product
              </li>
            </Link>
            <Link href="/">
              <li className="text-[18px] font-[600] :text-[#000000] list-none lg:list-disc">
                Solutions
              </li>
            </Link>
            <Link href="/resources">
              <button className="text-center rounded-full bg-black w-fit h-fit text-white text-[14px] font-[500] px-[1.5rem] py-[10px]">
                Resources
              </button>
            </Link>
            <Link href="/company">
              <li className="text-[18px] font-[600] text-[#000000] list-none lg:list-disc">
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
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xl font-bold bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url(/LearningImages/Learningbackground.png)",
        }}
      >
        <div>
          <p className="pl-[10px]">Continual learning</p>
        </div>
        <div className=" flex pl-[10px]">
          <ul>
            <li>Machine learning</li>
            <li>B2B Solutions</li>
            <li>Developer Platform</li>
            <li>Search Engine</li>
            <li>Safety in AI</li>
            <li>Drift Detedtion</li>
            <li>Model Production</li>
            <li>Model Production</li>
            <li>Large Language Model</li>
            <li>SaaS Solutions</li>
            <li>Feature Store</li>
            <li>Enterprise Software</li>
            <li>Artificial Intelligence</li>
            <li>Deep Learning</li>
            <li>Information Technology</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[100px]">
        <div></div>
        <div>
          <p className="w-[50%] pl-[40px] mx-auto">
            Gantry wants to create a world where technology adapts to people,
            unlocking every individuals potential.
          </p>
        </div>
      </div>
      <div>
        <div className="w-full px-[10px] md:px-[2rem] pt-[3rem] pb-[1rem]">
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
        {/* ================ BlackPattern ================== */}
        <div className="flex flex-col overflow-hidde mt-[2rem]">
          <div className="flex mx-auto overflow-hidden">
            <div className="flex mx-auto overflow-hidden animate-loop-scroll">
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
  );
};

export default Learning;

// "use client";

// import React from "react";
// import Footer from "@/components/blogComponents/Footer";
// // import Header from "@/components/blogComponents/Header";
// import Header from "@/components/blogComponents/Header";

// import BlackPattern from "@/components/blogComponents/BlackPattern";

// const page = () => {
//   return (
//     <div className="bg-red-600 min-h-[400px] w-full pt-5">
//       <Header />
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xl font-bold">
//         <div>
//           <p>Continual learning</p>
//         </div>
//         <div className=" flex flex-col gap-6 items-start p-5">
//           <div className=" flex justify-center">
//             <ul>
//               <li>Machine learning</li>
//               <li>B2B Solutions</li>
//               <li>Developer Platform</li>
//               <li>Search Engine</li>
//               <li>Safety in AI</li>
//               <li>Drift Detedtion</li>
//               <li>Model Production</li>
//               <li>Model Production</li>
//               <li>Large Language Model</li>
//               <li>SaaS Solutions</li>
//               <li>Feature Store</li>
//               <li>Enterprise Software</li>
//               <li>Artificial Intelligence</li>
//               <li>Deep Learning</li>
//               <li>Information Technology</li>
//             </ul>
//           </div>
//           <div>
//             <p className="text-[12px] w-[60%]">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
//               sunt distinctio dolores doloribus mollitia, sapiente praesentium
//               qui ut voluptate aut.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Footer />
//         {/* ================ BlackPattern ================== */}
//         <div className="flex flex-col overflow-hidde mt-[2rem]">
//           <div className="flex mx-auto overflow-hidden">
//             <div className="flex mx-auto overflow-hidden animate-loop-scroll">
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//             </div>
//             <div
//               className="flex overflow-hidden animate-loop-scroll"
//               aria-hidden={true}
//             >
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//               <BlackPattern />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;
