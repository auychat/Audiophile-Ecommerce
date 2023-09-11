import Image from "next/image";
import Link from "next/link";
import React from "react";
import ZX9Img from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import ZX7Img from "../../../public/assets/home/desktop/image-speaker-zx7.jpg";
import YX1Img from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";

const FeaturedProducts = () => {
  return (
    <div className="relative max-w-[1110px] mx-auto flex flex-col gap-12 ">
      {/* ZX9 SPEAKER */}
      <div className="relative flex flex-row h-[560px] justify-evenly items-center bg-[#D87D4A] rounded-lg overflow-hidden">
        {/* ZX9 SPEAKER Circle Background */}
        <div className="absolute bg-pattern-circles bg-no-repeat bg-auto w-full h-[110%] top-[-32px] left-[-150px]"></div>

        {/* ZX9 SPEAKER Circle Image */}
        <div className="z-10 mt-24">
          <Image src={ZX9Img} alt="ZX9 SPEAKER" width={409} className="h-auto" />
        </div>

        {/* ZX9 SPEAKER Content */}
        <div className="flex flex-col justify-center w-[349px] h-[303px] gap-8 z-10">
          <h1 className="text-[56px] leading-[58px] tracking-[2px] font-bold text-white">
            ZX9 SPEAKER
          </h1>
          <p className="text-[15px] leading-[25px] text-white opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/speakers/zx9-speaker">
            <button className="font-bold text-[13px] tracking-[1px] inline-block px-9 py-3.5 bg-black text-white rounded-sm hover:bg-[#4C4C4C] transition duration-300 ease-in-out">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      {/* ZX7 SPEAKER */}
      <div className="relative flex flex-row">
        <div className="width-full object-cover">
          <Image src={ZX7Img} alt="ZX7 SPEAKER" className="rounded-lg" />
        </div>
        <div className="flex flex-col justify-center gap-8 absolute top-[30%] left-[10%]">
          <h2 className="text-[28px] leading-normal tracking-[2px] font-bold text-black">
            ZX7 SPEAKER
          </h2>
          <Link href="/speakers/zx7-speaker">
            <button className="font-bold text-[13px] tracking-[1px] inline-block px-9 py-3.5 border-[1px] border-black bg-none text-black rounded-sm hover:bg-black hover:text-white transition duration-300 ease-in-out">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>

      {/* YX1 EARPHONES */}
      <div className="flex flex-row gap-[30px]  ">
        <Image src={YX1Img} alt="YX1 EARPHONES" className="rounded-lg" />

        <div className="flex flex-col justify-center gap-8 bg-[#F1F1F1] w-full rounded-lg pl-[95px]">
          <h2 className="text-[28px] leading-normal tracking-[2px] font-bold text-black">YX1 EARPHONES</h2>
          <Link href="/earphones/yx1-earphones">
            <button className="font-bold text-[13px] tracking-[1px] inline-block px-9 py-3.5 border-[1px] border-black bg-none text-black rounded-sm hover:bg-black hover:text-white transition duration-300 ease-in-out">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
