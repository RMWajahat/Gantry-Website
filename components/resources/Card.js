import Image from "next/image";
import { FiShare2 } from "react-icons/fi";
function Card({ data }) {
  const { title, view, image } = data;

  return (
    <div className="flex flex-col gap-[10px] w-full sm:w-[300px] cursor-pointer">
      <div className="">
        <Image
          src={image}
          width={300}
          height={200}
          alt=""
          className="w-full h-[200px]"
        />
      </div>
      <h1 className="text-[18px] font-[600] leading-5">{title}</h1>
      <div className="flex items-start justify-between">
        <p className="text-[14px] font-[600] opacity-70">{view}</p>
        <FiShare2 />
      </div>
    </div>
  );
}

export default Card;
