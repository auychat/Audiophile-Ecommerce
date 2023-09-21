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
import { useCart } from "@/context/CartContext";

// Define the shape of the cart item
interface ICartItem {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  quantity: number;
}

interface pageProps {
  params: { itemslug: string };
}

const ProductItemsDetail: React.FC<pageProps> = ({ params }) => {
  const { state, dispatch } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  const [cart, setCart] = React.useState<ICartItem[]>([]);

  // Get the product data from the slug
  const data = productsData.find((product) => product.slug === params.itemslug);
  // console.log(params.itemslug);

  const handleAddToCart = () => {
    const cartItem: ICartItem = {
      id: data?.id || 0,
      imgUrl: data?.image?.mobile || "",
      name: data?.name || "",
      price: data?.price || 0,
      quantity: quantity,
    };

    // Deprecated setCart but for test only
    // setCart((prevCart) => [...prevCart, cartItem]);

    // Dispatch the "ADD_TO_CART" action to add the item to the cart
    dispatch({ type: "ADD_TO_CART", payload: cartItem });

    setQuantity(1);
  };

  // Deprecated this useEffect but for test only
  // React.useEffect(() => {
  //   console.log("Updated cart from useEffect", cart);
  // }, [cart]);

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
    <div className="max-w-[1110px] mx-auto flex flex-col xs:w-[91.75%] sm:w-[91.5%] md:w-[91.5%] lg:w-[91.5%]">
      <div>
        <button type="button" onClick={handleGoback}>
          <h5 className="font-medium leading-[25px] opacity-50 pt-[77px] hover:opacity-100 hover:font-bold hover:text-[#D87D4A] transition-opacity duration-300 xs:pt-4 sm:pt-8 md:pt-8 lg:pt-12">
            Go Back
          </h5>
        </button>
      </div>

      <div
        key={data.id}
        className=" flex flex-col gap-[10rem] pt-[56px] xs:pt-8 xs:gap-[6rem] sm:gap-[7.5rem] md:gap-[7.5rem] lg:gap-[7.5rem]"
      >
        {/* Fisrt Product Section */}
        <div className="flex flex-row gap-[125px] xs:flex-col xs:gap-8 sm:gap-[68px] md:gap-[68px] lg:gap-68px">
          {/* Product Image*/}
          <ProductImage data={data} />
          {/*Title, Description, Price*/}
          <div className="w-[445.5px] h-[407px] pt-[165px] flex flex-col gap-8 justify-center xs:w-full sm:max-w-[339.5px] sm:pt-16 md:pt-16">
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
        <div className="pb-[160px] xs:pb-[120px] xs:pt-[24px] sm:pb-[120px] md:pb-[120px]">
          <BestGear />
        </div>
      </div>
    </div>
  );
};

export default ProductItemsDetail;
