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
  };
}

const ProductDetails: React.FC<ProductProps> = ({ data }) => {
  return (
    <>
      {data.new && (
        <h2 className="text-[#D87D4A] text-[14px] font-normal tracking-[10px]">
          NEW PRODUCT
        </h2>
      )}
      <h1 className="text-black font-bold text-[40px] leading-[44px] tracking-[1.43px] xs:text-[28px] xs:leading-normal xs:tracking-[1px]">
        {data.name}
      </h1>
      <p className="text-[15px] leading-[25px] opacity-50 font-medium">
        {data.description}
      </p>
      <h3 className="font-bold tracking-[1.29px]">
        ${data.price.toLocaleString()}
      </h3>
    </>
  );
};

export default ProductDetails;
