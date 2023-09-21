import Image from "next/image";
import React from "react";
import BestGearImg from "../../../public/assets/shared/desktop/image-best-gear.jpg";
import BestGearTabletImg from "../../../public/assets/shared/tablet/image-best-gear.jpg";

const BestGear = () => {
  return (
    <div className="max-w-[1110px] h-[588px] mx-auto flex flex-row justify-between gap-8 rounded-lg xs:flex-col-reverse xs:h-[698px] xs:w-[100%] sm:flex-col-reverse sm:h-full sm:items-center md:flex-col-reverse md:h-full md:items-center md:w-[100%] lg:w-[100%]">
      <div className="max-w-[445px] gap-8 flex flex-col justify-center sm:max-w-[573px] md:max-w-[75%]">
        <h1 className="font-bold text-[40px] leading-[44px] tracking-[1.43px] xs:text-[28px] xs:tracking-[1px] xs:text-center sm:text-center md:text-center">
          BRINGING YOU THE <strong className="text-[#D87D4A]">BEST</strong> AUDIO GEAR
        </h1>
        <p className="text-[15px] leading-[25px] opacity-50 font-medium xs:text-center sm:text-center md:text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div className="relative overflow-hidden xs:min-h-[300px] sm:h-[300px] sm:w-full md:h-[375px] md:w-full h-full w-full">
        <Image src={BestGearImg} alt="Best Audio Gear" className="object-cover xs:block xs:object-cover rounded-lg sm:hidden md:hidden lg:block xl:block" />
        <Image src={BestGearTabletImg} alt="Best Audio Gear" className="rounded-lg sm:block sm:object-cover md:block xs:hidden  lg:hidden xl:hidden" />
      </div>
    </div>
  );
};

export default BestGear;
