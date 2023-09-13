"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const Summary = () => {
  const { state } = useCart();

  // Calculate the total price of the items in the cart
  const totalPrice = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCost = 50;
  const vat = Math.floor(totalPrice * 0.2);
  const grandTotal = totalPrice + shippingCost + vat;

  return (
    <div className="flex flex-col gap-8">
      {/* Summary Title */}
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-[18px] font-bold tracking-[1.29px]">SUMMARY</h3>
      </div>
      {/* Summary Cart Items */}
      <div>
        <ul className="flex flex-col gap-6">
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
      {/* Summary Cart Total */}
      <div className="flex flex-row justify-between items-center">
        <p className="text-[15px] font-medium leading-[25px] opacity-50">
          Total
        </p>
        <p className="text-[18px] font-bold">$ {totalPrice.toLocaleString()}</p>
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

      {/* Summary Cart GRAND TOTAL */}
      <div className="flex flex-row justify-between items-center">
        <p className="text-[15px] font-medium leading-[25px] opacity-50">
          GRAND TOTAL
        </p>
        <p className="text-[18px] text-[#D87D4A] font-bold">$ {grandTotal.toLocaleString()}</p>
      </div>

      {/* Checkout Button */}
      <div>
        <Link href="#">
          <button
            type="button"
            className="bg-[#D87D4A] text-white font-bold text-[13px] tracking-[1px] inline-block w-full py-3.5 rounded-sm hover:bg-[#FBAF85] transition duration-300 ease-in-out"
          >
            CONTINUE & PAY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
