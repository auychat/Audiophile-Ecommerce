import { productsData } from "@/pages/api/json/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductSuggestProps {
  data: {
    id: number;
    slug: string;
    name: string;
    image: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
    category: string;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: { quantity: number; item: string }[];
    gallery: {
      first: {
        desktop: string;
        mobile: string;
        tablet: string;
      };
      second: {
        desktop: string;
        mobile: string;
        tablet: string;
      };
      third: {
        desktop: string;
        mobile: string;
        tablet: string;
      };
    };
    others: {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    }[];
  };
}

const ProductSuggest: React.FC<ProductSuggestProps> = ({ data }) => {
  const sugestedProducts = data.others;

  return (
    <div className="flex flex-col gap-[64px]  xs:gap-12">
      <h1 className="text-center text-[32px] font-bold leading-[36px] tracking-[1.14px] xs:text-[24px] xs:leading-[36px] xs:tracking:[0.86px]">
        YOU MAY ALSO LIKE
      </h1>

      <div className="flex flex-row gap-[30px] xs:flex-col">
        {sugestedProducts.map((item, index) => {
          // Find the product that match the slug of the current item for get exact category link
          const product = productsData.find(
            (product) => product.slug === item.slug
          );

          if (product) {
            return (
              <div
                className="flex flex-col gap-[40px] items-center xs:gap-8"
                key={index}
              >
                <div className="rounded-lg xs:min-h-[120px] xs:w-full xs:h-full xs:bg-[#F1F1F1] xs:relative xs:flex xs:items-center xs:justify-center">
                  <Image
                    src={item.image.desktop}
                    alt={item.name}
                    width={350}
                    height={318}
                    className="rounded-lg xs:max-h-[120px] xs:object-cover xs:absolute xs:w-[55%] xs:origin-center"
                  />
                </div>
                <h2 className="text-[24px] font-bold tracking-[1.71px]">
                  {item.name}
                </h2>

                <Link href={`/${product.category}/${item.slug}`}>
                  <button className="font-bold text-[13px] trading-[1px] inline-block px-9 py-3.5 bg-button-primary text-white rounded-sm hover:bg-button-secondary transition duration-300 ease-in-out">
                    SEE PRODUCT
                  </button>
                </Link>
              </div>
            );
          } else {
            return null; // If no product found, return null
          }
        })}
      </div>
    </div>
  );
};

export default ProductSuggest;
