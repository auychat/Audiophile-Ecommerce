import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadPhonesImg from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import RightArrow from "../../../public/assets/shared/desktop/icon-arrow-right.svg";

const ItemsData = [
  { id: 1, image: HeadPhonesImg, title: "HEADPHONES", link: "/headphones" },
  { id: 2, image: SpeakersImg, title: "SPEAKERS", link: "/speakers" },
  { id: 3, image: EarphonesImg, title: "EARPHONES", link: "/earphones" },
];

const FeatureItems = () => {
  return (
    <div className="relative max-w-[1110px] mx-auto h-[284px] flex flex-row justify-between items-end gap-16 sm:h-[217px] sm:w-[91.75%] sm:gap-3 xs:w-full xs:h-full xs:flex-col xs:items-center xs:gap-[68px] md:w-[91.75%] lg:w-[91.75%]">
      {ItemsData.map((item) => (
        <div
          key={item.id}
          className="bg-[#F1F1F1] flex flex-col items-center gap-4 w-[350px] h-[204px] rounded-md sm:w-[223px] sm:h-[165px] xs:relative  xs:w-full xs:h-[165px]"
        >
          <div className="absolute top-[0px] w-[220px] h-auto sm:w-[165px] xs:top-[-50px] xs:max-h-[155px] xs:max-w-[155px] ">
            <Image
              src={item.image}
              alt={item.title}
              // sizes="100vw"
              className="w-auto h-auto "
            />
          </div>
          {/* Category Navigation */}
          <div className="relative flex flex-col gap-4 text-center items-center mt-[113px] sm:mt-[85px] xs:mt-[80px]">
            <h1 className="font-bold">{item.title}</h1>
            <Link href={item.link}>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-[13px] font-bold opacity-50 tracking-[1px] hover:text-[#D87D4A] hover:font-bold transition-colors duration-300">
                  SHOP
                </p>
                <Image src={RightArrow} alt="right arrow icon" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureItems;
