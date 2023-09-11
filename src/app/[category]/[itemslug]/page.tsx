"use client";
import React from "react";
import { productsData } from "@/pages/api/json/data";
import { notFound } from "next/navigation";
import FeatureItems from "@/components/feature/FeatureItems";
import BestGear from "@/components/feature/BestGear";
import ProductImage from "@/components/productDetails/ProductImage";
import ProductDetails from "@/components/productDetails/ProductDetails";
import QuantityInput from "@/components/productDetails/QuantityInput";
import ProductFeatures from "@/components/productDetails/ProductFeatures";
import ProductGallery from "@/components/productDetails/ProductGallery";
import ProductSuggest from "@/components/productDetails/ProductSuggest";

type CartItem = {
  productId: number;
  productName: string;
  quantity: number;
};

interface pageProps {
  params: { itemslug: string };
}

const ProductItemsDetail: React.FC<pageProps> = ({ params }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [cart, setCart] = React.useState<CartItem[]>([]);

  const data = productsData.find((product) => product.slug === params.itemslug);
  console.log(params.itemslug);

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      productId: data?.id || 0,
      productName: data?.name || "",
      quantity: quantity,
    };

    setCart((prevCart) => [...prevCart, cartItem]);

    setQuantity(1);
  };

  // For test only
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

  const handleGoback = () => {
    window.history.back();
  };

  // If no data, return 404 page
  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-[1110px] mx-auto flex flex-col">
      <div>
        <button type="button" onClick={handleGoback}>
          <h5 className="font-medium leading-[25px] opacity-50 pt-[77px] hover:opacity-100 hover:font-bold transition-opacity duration-300">
            Go Back
          </h5>
        </button>
      </div>

      <div key={data.id} className=" flex flex-col gap-[10rem] pt-[56px]">
        {/* Fisrt Product Section */}
        <div className="flex flex-row gap-[125px]">
          {/* Product Image*/}
          <ProductImage data={data} />
          {/*Title, Description, Price*/}
          <div className="w-[445.5px] h-[407px] flex flex-col gap-8 justify-center">
            <ProductDetails data={data} />
            {/*Quantity, Add to cart button*/}
            <QuantityInput
              quantity={quantity}
              onDecrement={handleDecrement}
              onIncrement={handleIncrement}
              onSetQuantity={setQuantity}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>

        {/* Second Product Features & In the box Section */}
        <ProductFeatures data={data} />

        {/* Third Product Gallery Section */}
        <ProductGallery data={data} />

        {/* Fourth You may also like Section */}
        <ProductSuggest data={data} />

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

export default ProductItemsDetail;
