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
    <div className="relative max-w-[1110px] mx-auto flex flex-row justify-between items-center gap-7 min-h-[572px] h-full">
      {ItemsData.map((item) => (
        <div
          key={item.id}
          className="bg-[#F1F1F1] flex flex-col items-center text-center gap-4 p-4 min-w-[350px] min-h-[204px] rounded-md relative"
        >
          <div className="absolute w-[50%] h-[50%] top-[-65px] min-h-[180px]">
            <Image
              src={item.image}
              alt={item.title}
              className="w-[75%] h-[75%]"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <h1 className="font-bold mt-24">{item.title}</h1>
          <Link href={item.link}>
            <div className="flex flex-row gap-2 items-center">
              <p className="text-[13px] font-bold opacity-50 tracking-[1px]">
                SHOP
              </p>
              <Image src={RightArrow} alt="right arrow icon" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeatureItems;
