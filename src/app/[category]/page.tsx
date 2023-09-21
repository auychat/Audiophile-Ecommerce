import React from "react";
import { productsData } from "@/pages/api/json/data";
import FeatureItems from "@/components/feature/FeatureItems";
import BestGear from "@/components/feature/BestGear";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


interface pageProps {
  params: { category: string };
}

const Category: React.FC<pageProps> = ({ params }) => {
  // Selecting only the category that match the params
  const presentCategory = productsData.filter(
    (product) => product.category === params.category
  );

  // If no products match the category (presentCategory is an empty array), return 404
  if (presentCategory.length === 0) {
    return notFound();
  }

  // Adding reverse property to the present category for alternating the items flex direction
  const addReverse = presentCategory.map((item, index) => {
    let reverse = false;
    if (index % 2 !== 0) {
      reverse = true;
    }
    return { item, index, reverse };
  });

  // Reversing the headphone category array to display the items in reverse order
  const presentCatReverse = addReverse.reverse();
 

  return (
    <div>
      {/* TITLE */}
      <div className="bg-[#191919]">
        <div className="max-w-[1110px] h-[240px] mx-auto flex text-center justify-center items-center xs:h-[102px]">
          <h1 className="text-white font-bold text-[40px] leading-[44px] tracking-[1.43px] xs:text-[28px] xs:tracking-[2px]">
            {params.category.toUpperCase()}
          </h1>
        </div>
      </div>

      {/* ITEMS */}
      <>
        {presentCatReverse.map((product) => (
          <div
            key={product.item.id}
            className={`max-w-[1110px] min-h-[560px] mx-auto pt-[10rem] flex flex-row ${
              product.reverse && "flex-row-reverse"
            } gap-[125px] justify-center items-center xs:w-[91.75%] xs:pt-16 xs:flex-col xs:gap-8 xs:pb-[58px] sm:w-[91.5%] sm:flex-col sm:gap-8 sm:pt-[120px] md:w-[91.5%] md:gap-8 md:pt-[120px] lg:w-[91.5%]`}
          >
            <div className="sm:bg-[#F1F1F1] sm:h-352px sm:w-full sm:rounded-lg">
              <Image
                src={product.item.image.desktop}
                alt={product.item.name}
                width={540}
                height={560}
                // sizes="100vw"
                className="w-auto h-auto rounded-xl xs:max-h-[352px] xs:w-full xs:object-cover sm:max-h-[352px] sm:w-full sm:object-contain md:max-h-[352px] md:min-w-[340px] md:object-contain md:rounded-lg lg:object-cover"
              />
            </div>

            <div className="max-w-[445px] h-full gap-8 flex flex-col justify-center xs:items-center sm:items-center">
              {product.item.new && (
                <h2 className="text-[#D87D4A] text-[14px] font-normal tracking-[10px] xs:text-center">
                  NEW PRODUCT
                </h2>
              )}
              <h1 className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] xs:text-center xs:text-[28px] xs:leading-none xs:tracking-[1px] sm:text-center">
                {product.item.name}
              </h1>
              <p className="text-[15px] leading-[25px] opacity-50 font-medium xs:text-center sm:text-center">
                {product.item.description}
              </p>
              <Link href={`${product.item.category}/${product.item.slug}`}>
                <button className="font-bold text-[13px] trading-[1px] inline-block px-9 py-3.5 bg-button-primary text-white rounded-sm hover:bg-button-secondary transition duration-300 ease-in-out">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        ))}
      </>
      {/* FEATURED ITEMS */}
      <div className="pt-[160px] pb-[160px] xs:pt-[180px] xs:pb-[120px] sm:pt-[120px] sm:pb-[120px] xs:mx-auto xs:w-[91.75%] sm:w-[91.5%] sm:mx-auto md:w-[91.5%] md:mx-auto lg:w-[91.5%] lg:mx-auto">
        <FeatureItems />
      </div>

      {/* BESTGEAR */}
      <div className="pb-[160px] xs:pb-[120px] sm:pb-[120px] xs:mx-auto xs:w-[91.75%] sm:w-[91.5%] sm:mx-auto md:w-[91.5%] md:mx-auto lg:w-[91.5%] lg:mx-auto">
        <BestGear />
      </div>
    </div>
  );
};

export default Category;
