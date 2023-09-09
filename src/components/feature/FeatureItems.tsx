import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadPhonesImg from "../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersImg from "../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphonesImg from "../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import RightArrow from "../../../public/assets/shared/desktop/icon-arrow-right.svg";

const ItemsData = [
  { id: 1, image: HeadPhonesImg, title: "HEADPHONES", link: "#" },
  { id: 2, image: SpeakersImg, title: "SPEAKERS", link: "#" },
  { id: 3, image: EarphonesImg, title: "EARPHONES", link: "#" },
];

const FeatureItems = () => {
  return (
    <div className="relative max-w-[1110px] mx-auto h-[284px] flex flex-row justify-between items-end gap-7">
      {ItemsData.map((item) => (
        <div
          key={item.id}
          className="bg-[#F1F1F1] flex flex-col items-center text-center justify-center gap-4 p-4 w-[350px] h-[204px] rounded-md relative"
        >
          <div className="absolute w-[50%] h-[50%] top-[-65px] min-h-[180px]">
            <Image
              src={item.image}
              alt={item.title}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              // layout="responsive"
            />
          </div>
          <div className="flex flex-col gap-4 text-center items-center mt-[82px]">
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
