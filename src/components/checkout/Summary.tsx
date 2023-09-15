"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import ThankyouModal from "../modal/ThankyouModal";

interface SummaryProps {
  onSubmit?: () => void;
  paymentButton: string;
}

const Summary: React.FC<SummaryProps> = ({ onSubmit, paymentButton }) => {
  const { state } = useCart();

  // Calculate the total price of the items in the cart
  const totalPrice = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCost = 50;
  const vat = Math.floor(totalPrice * 0.2);
  const grandTotal = totalPrice + shippingCost + vat;

  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Function to open the modal
  const openCartModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle the payment button text
  const paymentButtonTextHandler = () => {
    if(paymentButton === "Continue"){
      return "CONTINUE"
    }

    if(paymentButton === "Pay"){
      return "CONTINUE & PAY"
    }
  }
  return (
    <div className="flex flex-col gap-8">
      {/* Summary Title */}
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-[18px] font-bold tracking-[1.29px]">SUMMARY</h3>
      </div>
      {/* Summary Cart Items */}
      <div className="flex flex-row gap-4">
        <ul className="flex flex-col gap-6 w-full">
          {state.cart.map((item) => (
            <li
              key={item.id}
              className="flex flex-row justify-between h-[64px]"
            >
              <div className="flex flex-row gap-4 w-auto h-auto">
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-lg"
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
            </li>
          ))}
        </ul>
      </div>
      <div>
        {/* Summary Cart Total */}
        <div className="flex flex-row justify-between items-center">
          <p className="text-[15px] font-medium leading-[25px] opacity-50">
            TOTAL
          </p>
          <p className="text-[18px] font-bold">
            $ {totalPrice.toLocaleString()}
          </p>
        </div>

        {/* Summary Cart SHIPPING */}
        <div className="flex flex-row justify-between items-center">
          <p className="text-[15px] font-medium leading-[25px] opacity-50">
            SHIPPING
          </p>
          <p className="text-[18px] font-bold">
            $ {shippingCost.toLocaleString()}
          </p>
        </div>

        {/* Summary Cart VAT (INCLUDED) */}
        <div className="flex flex-row justify-between items-center">
          <p className="text-[15px] font-medium leading-[25px] opacity-50">
            VAT (INCLUDED)
          </p>
          <p className="text-[18px] font-bold">$ {vat.toLocaleString()}</p>
        </div>
      </div>

      {/* Summary Cart GRAND TOTAL */}
      <div className="flex flex-row justify-between items-center">
        <p className="text-[15px] font-medium leading-[25px] opacity-50">
          GRAND TOTAL
        </p>
        <p className="text-[18px] text-[#D87D4A] font-bold">
          $ {grandTotal.toLocaleString()}
        </p>
      </div>

      {/* CONTINUE & PAY BUTTON */}
      <div>
        <Link href="#">
          <button
            type="button"
            onClick={() => {
              if(paymentButton === "Pay") {openCartModal()};
              onSubmit?.();
            }}
            className="bg-[#D87D4A] text-white font-bold text-[13px] tracking-[1px] inline-block w-full py-3.5 rounded-sm hover:bg-[#FBAF85] transition duration-300 ease-in-out"
          >
            {paymentButtonTextHandler()}
          </button>
        </Link>
      </div>
      {/* Render the modal if the isModalOpen is true */}
      {isModalOpen && <ThankyouModal grandTotal={grandTotal} />}
    </div>
  );
};

export default Summary;
