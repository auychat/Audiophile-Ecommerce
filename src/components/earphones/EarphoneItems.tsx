import React from "react";
import Image from "next/image";
import Link from "next/link";
import YX1Earphones from "../../../public/assets/product-yx1-earphones/desktop/image-product.jpg";

const earphoneItems = [
  {
    id: 1,
    name: "YX1 WIRELESS EARPHONES",
    image: YX1Earphones,
    link: "#",
    desc: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    newproduct: true,
    reverse: false,
  },
];

const EarphoneItems = () => {
  return (
    <>
      {earphoneItems.map((item) => (
        <div
          key={item.id}
          className={`max-w-[1110px] min-h-[560px] mx-auto pt-[10rem] flex flex-row ${
            item.reverse && "flex-row-reverse"
          } gap-[125px] justify-center items-center`}
        >
          <Image
            src={item.image}
            alt={item.name}
            width={540}
            height={560}
            className="rounded-lg"
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

export default EarphoneItems;
