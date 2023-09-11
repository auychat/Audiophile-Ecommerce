"use client";

import React, { useState } from "react";
import Image from "next/image";
import { productsData } from "@/pages/api/json/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import FeatureItems from "@/components/feature/FeatureItems";
import BestGear from "@/components/feature/BestGear";

type CartItem = {
  productId: number;
  productName: string;
  quantity: number;
};

const Page = ({ params }: { params: { slug: string } }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [cart, setCart] = React.useState<CartItem[]>([]);

  const data = productsData.find((product) => product.slug === params.slug);

  const handleAddToCart = () => {
    // console.log("cart", cart);
    const cartItem: CartItem = {
      productId: data?.id || 0,
      productName: data?.name || "",
      quantity: quantity,
    };
    // console.log("Adding to cart",cartItem);

    // setCart([...cart, cartItem]);
    setCart((prevCart) => [...prevCart, cartItem]);
    console.log("Updated cart from normal log", cart);

    setQuantity(1);
  };

  React.useEffect(() => {
    console.log("Updated cart from useEffect", cart);
  }, [cart]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-[1110px] mx-auto flex flex-col">
      <Link href="/headphones">
        <h5 className="font-medium leading-[25px] opacity-50 pt-[77px]">
          Go Back
        </h5>
      </Link>

      <div key={data.id} className=" flex flex-col gap-[10rem]">
        {/* Fisrt Product Section */}
        <div className="flex flex-row gap-[125px]">
          {/* Product Image*/}
          <div className="relative w-[540px] h-[560px]">
            <Image
              src={data.image.desktop}
              alt={data.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill={true}
              className=" rounded-lg object-contain object-center"
            />
          </div>
          {/*Title, Description, Price*/}
          <div className="w-[445.5px] h-[407px] flex flex-col gap-8 justify-center">
            {data.new && (
              <h2 className="text-[#D87D4A] text-[14px] font-normal tracking-[10px]">
                NEW PRODUCT
              </h2>
            )}
            <h1 className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px]">
              {data.name}
            </h1>
            <p className="text-[15px] leading-[25px] opacity-50 font-medium">
              {data.description}
            </p>
            <h3 className="font-bold tracking-[1.29px]">
              ${data.price.toLocaleString()}
            </h3>

            {/*Quantity, Add to cart button*/}
            <div className="flex flex-row gap-[14px]">
              <div className="flex flex-row justify-evenly items-center bg-[#F1F1F1] rounded-lg w-[120px] h-[48px]">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-8 h-full text-[13px] font-bold tracking-[1px] opacity-25  hover:opacity-100 hover:text-[#D87D4A] hover:text-[18px]"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="h-full w-8 text-center text-[13px] font-bold tracking-[1px] outline-none bg-transparent"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-8 h-full text-[13px] font-bold tracking-[1px] opacity-25 hover:opacity-100 hover:text-[#D87D4A] hover:text-[18px]"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="font-bold text-[13px] trading-[1px] inline-block px-9 py-3.5 bg-button-primary text-white rounded-sm hover:bg-button-secondary transition duration-300 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* Second Product Features Section */}
        <div className="flex flex-row gap-[125px]">
          {/* Features */}
          <div className="flex flex-col gap-8 w-[635px] h-full">
            <h1 className="text-[32px] font-bold leading-[36px] tracking-[1.14px]">
              FEATURES
            </h1>
            <p className="text-[15px] leading-[25px] font-medium opacity-50">
              {data.features}
            </p>
          </div>
          {/* In the box */}
          <div className="flex flex-col gap-8 ">
            <h1 className="text-[32px] font-bold leading-[36px] tracking-[1.14px]">
              IN THE BOX
            </h1>
            <ul>
              {data.includes.map((include, index) => (
                <li key={index} className="flex flex-row gap-5">
                  <span className="text-[#D87D4A] text-[15px] leading-[25px] font-bold">
                    {include.quantity}x
                  </span>
                  <p className="text-[15px] leading-[25px] font-medium opacity-50">
                    {include.item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Third Product Picture Section */}
        <div className="flex flex-row gap-[30px]">
          <div className="flex flex-col gap-8">
            <div>
              <Image
                src={data.gallery.first.desktop}
                alt={data.name}
                width={445}
                height={280}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src={data.gallery.second.desktop}
                alt={data.name}
                width={445}
                height={280}
                className="rounded-lg"
              />
            </div>
          </div>
          <div>
            <Image
              src={data.gallery.third.desktop}
              alt={data.name}
              width={635}
              height={592}
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Fourth You may also like Section */}
        <div className="flex flex-col gap-[64px] items-center">
          <h1 className="text-[32px] font-bold leading-[36px] tracking-[1.14px]">
            YOU MAY ALSO LIKE
          </h1>

          <div className="flex flex-row gap-[30px]">
            {data.others.map((item, index) => (
              <div
                className="flex flex-col gap-[40px] items-center"
                key={index}
              >
                <Image
                  src={item.image.desktop}
                  alt={item.name}
                  width={350}
                  height={318}
                  className="rounded-lg"
                />
                <h2 className="text-[24px] font-bold tracking-[1.71px]">
                  {item.name}
                </h2>
                <Link href={`${item.slug}`}>
                  <button className="font-bold text-[13px] trading-[1px] inline-block px-9 py-3.5 bg-button-primary text-white rounded-sm hover:bg-button-secondary transition duration-300 ease-in-out">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Fifth Feature Items Section */}
        <FeatureItems />

        {/* Sixth Best Gear Section */}
        <div className="pb-[160px]">
          <BestGear />
        </div>
      </div>
    </div>
  );
};

export default Page;
