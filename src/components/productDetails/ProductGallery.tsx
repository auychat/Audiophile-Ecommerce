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

const ProductGallery: React.FC<ProductProps> = ({ data }) => {
  return (
    <div className="flex flex-row gap-[30px] xs:flex-col">
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
          className="rounded-lg h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
