import Pattern from "./Pattern";
function Footer() {
  return (
    <div className="w-full px-[10px] md:px-[2rem] pt-[3rem] pb-[1rem]">
      <div className="grid grid-cols-2 gap-[1rem]">
        <hr className="w-full h-[3px] bg-white border-none block opacity-60" />
        <hr className="w-full h-[3px] bg-white border-none block opacity-60" />
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:items-start sm:justify-between gap-[1rem] mt-[2rem]">
        <h1 className="text-[20px] font-[700] uppercase text-white">gantry</h1>
        <div className="">
          <h1 className="text-[20px] font-[700] text-white">
            Get started Today
          </h1>
          <span className="text-[18px] font-[700] text-white">gantry.io</span>
        </div>
        <button className="text-[16px] text-white font-[600] border-[2px] border-white px-[20px] py-[5px] rounded-full">
          gantry.io
        </button>
      </div>
    </div>
  );
}

export default Footer;
