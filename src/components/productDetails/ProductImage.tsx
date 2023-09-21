import Image from "next/image";
import React from "react";

interface ProductProps {
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
    includes: {quantity: number; item: string}[];
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
  };
}

const ProductImage: React.FC<ProductProps> = ({ data }) => {
  return (
    <div className="relative bg-[#F1F1F1] w-[540px] h-[560px] rounded-lg xs:h-[327px] xs:w-full xs:bg-[#F1F1F1] sm:h-[480px] sm:max-w-[281px] sm:w-full sm:bg-[#F1F1F1] md:h-[480px] md:max-w-[350px] md:w-full md:bg-[#F1F1F1] ">
      <Image
        src={data.image.desktop}
        alt={data.name}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill={true}
        className=" rounded-lg object-contain object-center"
      />
    </div>
  );
};

export default ProductImage;
