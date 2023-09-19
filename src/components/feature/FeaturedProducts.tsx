import Image from "next/image";
import Link from "next/link";
import React from "react";
import ZX9Img from "../../../public/assets/home/desktop/image-speaker-zx9.png";
import ZX7Img from "../../../public/assets/home/desktop/image-speaker-zx7.jpg";
import ZX7TabletImg from "../../../public/assets/home/tablet/image-speaker-zx7.jpg";
import ZX7MobileImg from "../../../public/assets/home/mobile/image-speaker-zx7.jpg";
import YX1Img from "../../../public/assets/home/desktop/image-earphones-yx1.jpg";
import YX1TabletImg from "../../../public/assets/home/tablet/image-earphones-yx1.jpg";

const FeaturedProducts = () => {
  return (
    <div className="relative max-w-[1110px] mx-auto flex flex-col gap-12 xs:w-[91.5%] xs:gap-6 sm:w-[91.75%] md:w-[91.75%] lg:w-[91.75%]">
      {/* ZX9 SPEAKER */}
      <div className="relative flex flex-row h-[560px] justify-evenly items-center bg-[#D87D4A] rounded-lg overflow-hidden xs:flex-col xs:justify-start xs:h-full xs:min-h-[600px] sm:flex-col sm:h-full sm:min-h-[720px] md:flex-col md:h-full md:min-h-[720px]">
        {/* ZX9 SPEAKER Circle Background */}
        <div className="absolute bg-pattern-circles bg-no-repeat bg-auto w-full h-[110%] top-[-32px] left-[-150px] xs:bg-contain xs:bg-center xs:top-[-29%] xs:left-[-35%] xs:w-[170%] xs:object-center sm:bg-contain sm:bg-center sm:object-center sm:w-[300%] sm:top-[-30%] sm:left-[-100%] md:bg-contain md:bg-center md:object-center md:w-[300%] md:top-[-30%] md:left-[-100%]"></div>

        {/* ZX9 SPEAKER Image */}
        <div className="z-10 mt-24 xs:mt-10 sm:mt-0 md:mt-0">
          <Image
            src={ZX9Img}
            alt="ZX9 SPEAKER"
            width={409}
            className="h-auto xs:w-[172.25px] sm:w-[197px] md:w-[197px]"
          />
        </div>

        {/* ZX9 SPEAKER Content */}
        <div className="flex flex-col justify-center w-[349px] h-[303px] gap-8 z-10 xs:w-[280px] xs:items-center xs:gap-6 xs:mt-5 sm:w-[349px] sm:items-center md:w-[350px] md:items-center">
          <h1 className="text-[56px] leading-[58px] tracking-[2px] font-bold text-white xs:w-[200px] xs:text-[36px] xs:leading-[40px] xs:tracking-[1.29px] xs:text-center sm:text-center md:text-center">
            ZX9 SPEAKER
          </h1>
          <p className="text-[15px] leading-[25px] text-white opacity-75 xs:text-center sm:text-center md:text-center">
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
          {/* Desktop Devices */}
          <Image src={ZX7Img} alt="ZX7 SPEAKER" className="rounded-lg xl:block lg:block md:hidden sm:hidden xs:hidden" />

          {/* Tablet Devices */}
          <Image src={ZX7TabletImg} alt="ZX7 SPEAKER" className="rounded-lg sm:block xs:hidden md:hidden lg:hidden xl:hidden" />

          {/* Mobile Devices */}
          <Image src={ZX7MobileImg} alt="ZX7 SPEAKER" className="rounded-lg xs:block sm:hidden md:hidden lg:hidden xl:hidden" />
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
      <div className="flex flex-row gap-[30px] xs:flex-col sm:gap-3">
        <Image src={YX1Img} alt="YX1 EARPHONES" className="rounded-lg xs:min-h-[200px] xs:hidden sm:hidden md:block lg:block xl:block" />
        <Image src={YX1TabletImg} alt="YX1 EARPHONES" className="rounded-lg sm:block md:hidden lg:hidden xl:hidden xs:min-h-[200px] sm:max-w-[339px] sm:min-h-[320px]" />

        <div className="flex flex-col justify-center gap-8 bg-[#F1F1F1] w-full rounded-lg pl-[95px] xs:pl-6 xs:min-h-[200px]">
          <h2 className="text-[28px] leading-normal tracking-[2px] font-bold text-black">
            YX1 EARPHONES
          </h2>
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
