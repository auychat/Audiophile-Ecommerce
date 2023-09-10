import React from "react";
import Image from "next/image";
import { productsData } from "@/pages/api/json/data";
import { notFound } from "next/navigation";

const page = ({ params }: { params: { slug: string } }) => {
  const data = productsData.find((product) => product.slug === params.slug);

  if (!data) {
    return notFound();
  }

  return (
    <div>
      {productsData.map((product) => (
        <div key={product.id} className=" flex flex-col">
          <div className="relative h-[480px] w-[360px] gap-8">
            <Image
              src={product.image.desktop}
              alt={product.name}
              // width={300}
              // height={300}
              fill={true}
              className="w-[300px] h-[300px] rounded-lg object-contain object-center"
            />
          </div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
