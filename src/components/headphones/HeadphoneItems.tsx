import Image from "next/image";
import Link from "next/link";
import React from "react";
import XX99MarkII from "../../../public/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import XX99MarkI from "../../../public/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import XX59 from "../../../public/assets/product-xx59-headphones/desktop/image-product.jpg";

const headphoneItems = [
  {
    id: 1,
    name: "XX99 MARK II HEADPHONES",
    image: XX99MarkII,
    link: "#",
    desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    newproduct: true,
    reverse: false,
  },
  {
    id: 2,
    name: "XX99 MARK I HEADPHONES",
    image: XX99MarkI,
    link: "#",
    desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    newproduct: false,
    reverse: true,
  },
  {
    id: 3,
    name: "XX59 HEADPHONES",
    image: XX59,
    link: "#",
    desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    newproduct: false,
    reverse: false,
  },
];

const HeadphoneItems = () => {
  return (
    <>
      {headphoneItems.map((item) => (
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

export default HeadphoneItems;
