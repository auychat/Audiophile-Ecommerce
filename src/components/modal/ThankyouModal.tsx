import Image from "next/image";
import React from "react";
import confirmIcon from "../../../public/assets/checkout/icon-order-confirmation.svg";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface ThankyouModalProps {
  grandTotal: number;
}

const ThankyouModal: React.FC<ThankyouModalProps> = ({ grandTotal }) => {
  const { state } = useCart();

  // Calculate the total number of different items in the cart
  const totalDiffItems = state.cart.length;

  return (
    <div className="fixed inset-0 z-50 w-full max-h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity overflow-x-hidden overflow-y-auto">
      <div className="relative w-[540px] max-h-full ">
        <div className="relative bg-white p-12 rounded-lg shadow-lg flex flex-col gap-8">
          <Image
            src={confirmIcon}
            alt="Confirmation Icon"
            width={64}
            height={64}
          />

          <h1 className="text-[32px] font-bold leading-[36px] traking-[1.14]">
            THANK YOU <br />
            FOR YOUR ORDER
          </h1>

          <p className="text-[15px] leading-[25px] font-medium opacity-50">
            You will receive an email confirmation shortly.
          </p>

          {/* Summary Cart Items && Grand Total */}
          <div className="flex flex-row w-[444px] h-[140px]">
            {/* Left Group */}
            <div className="flex flex-col gap-3 w-[246px] p-6 bg-[#F1F1F1] rounded-l-lg">
              {/* Partition 1: Cart Item */}
              <div className="flex flex-row items-start justify-between ">
                <div className="flex flex-row gap-4 w-auto h-auto">
                  <Image
                    src={state.cart[0].imgUrl}
                    alt={state.cart[0].name}
                    width={50}
                    height={50}
                    className="rounded-lg"
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
              {/* End of partition 1 */}

              {/* Partition 2: Horizontal Divider*/}
              <hr className="w-[198px] mx-auto" />

              {/* Partition 3: Additional Items*/}
              <div className="flex items-center justify-center">
                <p className="text-[12px] font-bold tracking-[-0.21px] opacity-50">
                  and 2 other item(s)
                </p>
              </div>
            </div>
            {/* End of Left Group */}

            {/* Grand Total (Right Group) */}
            <div className="bg-black w-[198px] rounded-r-lg flex flex-col items-start justify-center pl-8">
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
