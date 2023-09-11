import React from 'react'

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

const ProductFeatures: React.FC<ProductProps> = ({data}) => {
  return (
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
  )
}

export default ProductFeatures