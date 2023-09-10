import Image from "next/image";
import Link from "next/link";
import React from "react";
import { productsData } from "@/pages/api/json/data";

// Selecting only the headphone category
const headPhoneCategory = productsData.filter(
  (product) => product.category === "headphones"
);

// Adding reverse property to the headphone category
const addReverse = headPhoneCategory.map((item, index) => {
  let reverse = false;
  if(index % 2 !== 0) {
    reverse = true;
  }
  return {item, index, reverse};
});

// Reversing the headphone category array to display the items in reverse order
const headPhoneCatReverse = addReverse.reverse();

const HeadphoneItems = () => {
  return (
    <>
      {headPhoneCatReverse.map((product) => (
        <div
          key={product.item.id}
          className={`max-w-[1110px] min-h-[560px] mx-auto pt-[10rem] flex flex-row ${
            product.reverse && "flex-row-reverse"
          } gap-[125px] justify-center items-center`}
        >
          <Image
            src={product.item.image.desktop}
            alt={product.item.name}
            width={540}
            height={560}
            // sizes="100vw"
            className="w-[540px] h-[560px] rounded-lg"
          />

          <div className="max-w-[445px] h-full gap-8 flex flex-col justify-center">
            {product.item.new && (
              <h2 className="text-[#D87D4A] text-[14px] font-normal tracking-[10px]">
                NEW PRODUCT
              </h2>
            )}
            <h1 className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px]">
              {product.item.name}
            </h1>
            <p className="text-[15px] leading-[25px] opacity-50 font-medium">
              {product.item.description}
            </p>
            <Link href={product.item.slug}>
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

export default HeadphoneItems;
