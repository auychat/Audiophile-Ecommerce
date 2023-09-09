import Image from "next/image";
import React from "react";
import BestGearImg from "../../../public/assets/shared/desktop/image-best-gear.jpg";

const BestGear = () => {
  return (
    <div className="max-w-[1110px] h-[588px] mx-auto flex flex-row justify-between gap-8 rounded-lg">
      <div className="max-w-[445px] gap-8 flex flex-col justify-center">
        <h1 className="font-bold text-[40px] leading-[44px] tracking-[1.43px]">
          BRINGING YOU THE <strong className="text-[#D87D4A]">BEST</strong> AUDIO GEAR
        </h1>
        <p className="text-[15px] leading-[25px] opacity-50 font-medium">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div>
        <Image src={BestGearImg} alt="Best Audio Gear" className="rounded-lg" />
      </div>
    </div>
  );
};

export default BestGear;
