import Image from "next/image";
import React from "react";
import HeroImg from "@/assets/home/desktop/image-hero.jpg";
import Link from "next/link";

const Hero = (): JSX.Element => {
  return (
    <div className="bg-[#191919]">
      <div className="relative max-w-[1110px] min-h-[632px] mx-auto text-white text-center flex h-full">
        {/* Hero Image */}
        <div className="bg-hero-img absolute bg-no-repeat bg-cover bg-right w-full h-full top-[-80px] right-[-132px]"></div>

        {/* Hero Content */}
        <div className="flex flex-col justify-center gap-8 max-w-[398px] z-10 text-left">
          <h2 className="text-sm leading-normal tracking-[10px] opacity-50">NEW PRODUCT</h2>
          <h1 className="text-[56px] leading-[58px] tracking-[2px] font-bold">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-md leading-[25px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="#">
            <button className="font-bold text-[13px] trading-[1px] inline-block px-9 py-3.5 bg-button-primary text-white rounded-sm hover:bg-button-secondary transition duration-300 ease-in-out">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
