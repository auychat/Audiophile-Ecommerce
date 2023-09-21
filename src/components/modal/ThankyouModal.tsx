import Image from "next/image";
import React from "react";
import confirmIcon from "../../../public/assets/checkout/icon-order-confirmation.svg";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface ThankyouModalProps {
  grandTotal: number;
}

const ThankyouModal: React.FC<ThankyouModalProps> = ({ grandTotal }) => {
  const { state, dispatch } = useCart();
  const [showAllItems, setShowAllItems] = React.useState(false);

  // Calculate the total number of different items in the cart
  const totalDiffItems = state.cart.length;
  const moreOtherItems = totalDiffItems - 1;

  // Clear the cart when clicking the "BACK TO HOME" button
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className="fixed inset-0 z-50 w-full max-h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity overflow-x-hidden overflow-y-auto">
      <div className="relative w-[540px] max-h-full xs:max-w-[327px] sm:min-w-[440px] ">
        <div className="relative bg-white p-12 rounded-lg shadow-lg flex flex-col gap-8 xs:p-8">
          <Image
            src={confirmIcon}
            alt="Confirmation Icon"
            width={64}
            height={64}
          />

          <h1 className="text-[32px] font-bold leading-[36px] traking-[1.14] xs:text-[24px] xs:leading-[28px] xs:tracking-[0.86px]">
            THANK YOU <br />
            FOR YOUR ORDER
          </h1>

          <p className="text-[15px] leading-[25px] font-medium opacity-50">
            You will receive an email confirmation shortly.
          </p>

          {/* Summary Cart Items && Grand Total */}
          <div className="flex flex-row w-[444px] min-h-[140px] h-full xs:flex-col xs:max-w-[263px]">
            {/* Left Group */}
            <div className="flex flex-col gap-3 w-[246px] p-6 bg-[#F1F1F1] rounded-l-lg xs:rounded-b-none xs:rounded-t-lg xs:w-full">
              {/* Partition 1-1 : Cart Item Show All Items = True */}
              {showAllItems &&
                state.cart.map((item) => (
                  <div
                    className="flex flex-row items-start justify-between"
                    key={item.id}
                  >
                    <div className="flex flex-row gap-4 w-auto h-auto">
                      <Image
                        src={item.imgUrl}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-lg max-w-[50px] max-h-[50px]"
                      />
                      <div>
                        <h5 className="text-[15px] font-bold leading-[25px]">
                          {item.name}
                        </h5>
                        <p className="text-[14px] leading-[25px] font-bold opacity-50">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Summary */}
                    <div className="flex">
                      {/* Show Number */}
                      <p className="text-[15px] leading-[25px] font-bold opacity-50">
                        X{item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              {/* End of partition 1-1 */}

              {/* Partition 1-2 : Cart Item Show All Items = False */}
              {!showAllItems && state.cart.length > 0 && (
                <div className="flex flex-row items-start justify-between">
                  <div className="flex flex-row gap-4 w-auto h-auto">
                    <Image
                      src={state.cart[0].imgUrl}
                      alt={state.cart[0].name}
                      width={50}
                      height={50}
                      className="rounded-lg max-w-[50px] max-h-[50px]"
                    />
                    <div>
                      <h5 className="text-[15px] font-bold leading-[25px]">
                        {state.cart[0].name}
                      </h5>
                      <p className="text-[14px] leading-[25px] font-bold opacity-50">
                        $ {state.cart[0].price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Summary */}
                  <div className="flex">
                    {/* Show Number */}
                    <p className="text-[15px] leading-[25px] font-bold opacity-50">
                      X{state.cart[0].quantity}
                    </p>
                  </div>
                </div>
              )}
              {/* End of partition 1-2 */}

              {/* Partition 2: Horizontal Divider*/}
              <hr className="w-[198px] mx-auto" />

              {/* Partition 3: Additional Items*/}
              {showAllItems ? (
                <div className="flex items-center justify-center">
                  <button onClick={() => setShowAllItems(!showAllItems)}>
                    <p className="text-[12px] font-bold tracking-[-0.21px] opacity-50">
                      View less
                    </p>
                  </button>
                </div>
              ) : moreOtherItems > 0 ? (
                <div className="flex items-center justify-center">
                  <button onClick={() => setShowAllItems(!showAllItems)}>
                    <p className="text-[12px] font-bold tracking-[-0.21px] opacity-50">
                      {moreOtherItems === 1
                        ? `and ${moreOtherItems} other item`
                        : `and ${moreOtherItems} other items`}
                    </p>
                  </button>
                </div>
              ) : moreOtherItems > 1 ? (
                <div className="flex items-center justify-center">
                  <button onClick={() => setShowAllItems(!showAllItems)}>
                    <p className="text-[12px] font-bold tracking-[-0.21px] opacity-50">
                      and {moreOtherItems} other items
                    </p>
                  </button>
                </div>
              ) : null}
            </div>
            {/* End of Left Group */}

            {/* Grand Total (Right Group) */}
            <div className="bg-black w-[198px] rounded-r-lg flex flex-col items-start justify-end pb-10 pl-8 xs:pb-0 xs:justify-center xs:min-h-[92px] xs:w-full xs:rounded-t-none xs:rounded-b-lg">
              <p className="text-[15px] leading-[25px] text-white font-medium opacity-50">
                GRAND TOTAL
              </p>
              <p className="text-[18px] font-bold text-white ">
                $ {grandTotal.toLocaleString()}
              </p>
            </div>
          </div>
          {/* BACK TO HOME BUTTON*/}
          <div className="mt-[14px]">
            <Link href="/">
              <button
                type="button"
                onClick={handleClearCart}
                className="bg-[#D87D4A] text-white font-bold text-[13px] tracking-[1px] inline-block w-full py-3.5 rounded-sm hover:bg-[#FBAF85] transition duration-300 ease-in-out"
              >
                BACK TO HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouModal;
