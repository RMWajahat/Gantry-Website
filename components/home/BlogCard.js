import Image from "next/image";
function BlogCard({ data }) {
  const { image, title, date } = data;
  return (
    <div className="w-full max-w-[300px] flex flex-col mx-auto gap-[10px] cursor-pointer group">
      <div className="">
        <Image
          src={image}
          width={280}
          height={280}
          alt=""
          className="w-[300px] h-[300px]"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <h1 className="text-[20px] font-[700] text-white leading-6 group-hover:underline">
          {title}
        </h1>
        <p className="text-[16px] font-[500] text-white">{date}</p>
      </div>
    </div>
  );
}

export default BlogCard;
