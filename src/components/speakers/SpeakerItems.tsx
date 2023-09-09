import React from "react";
import ZX9Img from "../../../public/assets/product-zx9-speaker/desktop/image-product.jpg";
import ZX7Img from "../../../public/assets/product-zx7-speaker/desktop/image-product.jpg";
import Link from "next/link";
import Image from "next/image";

const speakersItems = [
  {
    id: 1,
    name: "ZX9 Speaker",
    desc: "Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image: ZX9Img,
    link: "#",
    newproduct: true,
    reverse: false,
  },
  {
    id: 2,
    name: "ZX7 Speaker",
    desc: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    image: ZX7Img,
    link: "#",
    newproduct: false,
    reverse: true,
  },
];

const SpeakerItems = () => {
  return (
    <>
      {speakersItems.map((item) => (
        <div
          key={item.id}
          className={`max-w-[1110px] min-h-[560px] mx-auto pt-[10rem] flex flex-row ${
            item.reverse && "flex-row-reverse"
          } gap-[125px] justify-center items-center`}
        >
          <Image
            src={item.image}
            alt={item.name}
            // width={540}
            // height={560}
            sizes="100vw"
            className="w-[540px] h-[560px] rounded-lg"
          />

          <div className="max-w-[445px] h-full gap-8 flex flex-col justify-center">
            {item.newproduct && (
              <h2 className="text-[#D87D4A] text-[14px] font-normal tracking-[10px]">
                NEW PRODUCT
              </h2>
            )}
            <h1 className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px]">
              {item.name}
            </h1>
            <p className="text-[15px] leading-[25px] opacity-50 font-medium">
              {item.desc}
            </p>
            <Link href="#">
              <button className="font-bold text-[13px] trading-[1px] inline-block px-9 py-3.5 bg-button-primary text-white rounded-sm hover:bg-button-secondary transition duration-300 ease-in-out">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpeakerItems;
