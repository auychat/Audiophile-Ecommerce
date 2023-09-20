import React from "react";
import Link from "next/link";

const Hero = (): JSX.Element => {
  return (
    <div className="bg-[#191919]">
      <div className="relative max-w-[1110px] min-h-[632px] mx-auto text-white text-center flex flex-col justify-center items-center h-full overflow-hidden xs:w-[91.5%] xs:min-h-[503px] sm:w-[91.75%] md:w-[91.75%] md:items-start md:min-h-[552px] lg:w-[91.75%] lg:items-start lg:min-h-[582px] xl:items-start">
        {/* Hero Image */}
          <div className="bg-hero-img-desktop absolute bg-no-repeat bg-cover bg-center w-full h-full xl:bg-right xl:w-full xl:h-[115%] xl:top-[-95px] xl:right-[-132px] lg:top-[-95px] lg:h-[115%] md:h-[110%] md:top-[-75px] sm:bg-hero-img-tablet sm:bg-center sm:w-full sm:h-[110%] sm:top-[-75px] xs:bg-hero-img-mobile xs:bg-center xs:top-[-90px] xs:right-[0px] xs:w-full xs:h-[115%]"></div>

        {/* Hero Content */}
        <div className="flex flex-col gap-8 max-w-[398px] z-10 text-left md:w-[91.75%] sm:w-[91.75%] xs:items-center xs:max-w-[328px] xs:gap-6 sm:items-center sm:gap-7">
          <h2 className="text-sm leading-normal tracking-[10px] opacity-50">
            NEW PRODUCT
          </h2>
          <h1 className="text-[56px] leading-[58px] tracking-[2px] font-bold xs:text-[36px] xs:leading-[40px] xs:tracking-[1.29px] xs:text-center sm:text-center">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-md leading-[25px] xs:text-center sm:text-center sm:w-[350px] sm:text-[15px] sm:leading-[25px] sm:font-medium sm:opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link href="/headphones/xx99-mark-two-headphones">
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
