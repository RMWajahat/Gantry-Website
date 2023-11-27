import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { useRef } from "react";
import { ImCross } from "react-icons/im";
function Header() {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <div className="w-full flex items-center justify-between px-[10px] md:px-[2rem] py-[1.5rem] h-[80px]">
      <div className="text-[22px] font-[600] text-[#ffff] uppercase tracking-wider">
        <Link href="/">gantry</Link>
      </div>
      <div className="navigation" ref={menuRef} onClick={toggleMenu}>
        <div className="flex justify-between gap-[4rem] items-center menu bg-black">
          <ImCross className="w-[20px] h-[20px] lg:hidden text-white absolute top-[2rem] left-[2rem]" />
          <Link href="/">
            <li className="text-[18px] font-[600] text-[#ffff] list-none lg:list-disc">
              Product
            </li>
          </Link>
          <Link href="/">
            <li className="text-[18px] font-[600] text-[#ffff] list-none lg:list-disc">
              Solutions
            </li>
          </Link>
          <Link href="/resources">
            <li className="text-[18px] font-[600] text-[#ffff] list-none lg:list-disc">
              Resources
            </li>
          </Link>
          <Link href="/company">
            <li className="text-[18px] font-[600] text-[#ffff] list-none lg:list-disc">
              Company
            </li>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-[1rem]">
        <button className="text-center rounded-full bg-[#fff] w-fit h-fit text-[#000] text-[14px] font-[500] px-[1.5rem] py-[10px]">
          Get in touch
        </button>
        <span className="block lg:hidden" onClick={toggleMenu}>
          <BiMenu className="w-[35px] h-[35px] text-white cursor-pointer" />
        </span>
      </div>
    </div>
  );
}

export default Header;
