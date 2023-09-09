import BestGear from "@/components/feature/BestGear";
import FeatureItems from "@/components/feature/FeatureItems";
import HeadphoneItems from "@/components/headphones/HeadphoneItems";
import React from "react";

const Headphones = () => {
  return (
    <div>
      {/* TITLE */}
      <div className="bg-[#191919]">
        <div className="max-w-[1110px] h-[240px] mx-auto flex text-center justify-center items-center">
          <h1 className="text-white font-bold text-[40px] leading-[44px] tracking-[1.43px]">
            HEADPHONES
          </h1>
        </div>
      </div>

      {/* ITEMS */}
      <HeadphoneItems />

      {/* FEATURED ITEMS */}
      <div className="pt-[160px] pb-[160px]">
        <FeatureItems />
      </div>

      {/* BESTGEAR */}
      <div className="pb-[160px]">
        <BestGear />
      </div>
    </div>
  );
};

export default Headphones;
