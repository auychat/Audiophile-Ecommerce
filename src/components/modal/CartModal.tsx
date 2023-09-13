import React from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface CartModalProps {
  closeModal: () => void;
}

const CartModal = ({ closeModal }: CartModalProps) => {
  const { state, dispatch } = useCart();
  console.log("state.cart", state.cart);

  // Calculate the total number of different items in the cart
  const totalDiffItems = state.cart.length;

  // Calculate the total price of the items in the cart
  const totalPrice = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Function to increment the quantity of the item in the cart
  // Payload is the index of the item in the cart or the item id
  const handleIncrement = (index: number) => {
    const newCart = [...state.cart];
    dispatch({ type: "INCREMENT_QUANTITY", payload: index });
  };

  // Function to decrement the quantity of the item in the cart
  // Payload is the index of the item in the cart or the item id
  const handleDecrement = (index: number) => {
    const newCart = [...state.cart];
    dispatch({ type: "DECREMENT_QUANTITY", payload: index });
  };

  // Function to Remove all items in the cart
  const handleRemoveAll = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    // Render the modal if the isModalOpen is true
    <div className="fixed inset-0 z-50 w-full max-h-full flex pt-[129px] pl-[898px] bg-black bg-opacity-50 transition-opacity overflow-x-hidden overflow-y-auto">
      <div className="relative w-[377px] max-h-full">
        <div className="relative bg-white p-8 rounded-lg shadow-lg">
          <button
            type="button"
            className="absolute top-0 right-0 transform translate-x-2/4 -translate-y-2/4 w-8 h-8 font-bold bg-gray-100 rounded-full p-2 text-gray-800 hover:text-[#D87D4A] flex items-center justify-center"
            onClick={closeModal}
          >
            X
          </button>
          <div className="flex flex-col gap-8">
            {/* Cart Title */}
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-[18px] font-bold tracking-[1.29px]">
                CART ({totalDiffItems})
              </h3>
              <button type="button" onClick={handleRemoveAll}>
                <h4 className="text-[15px] leading-[25px] font-medium text underline hover:text-[#D87D4A]">
                  Remove all
                </h4>
              </button>
            </div>
            {/* Cart Items */}
            <div>
              <ul className="flex flex-col gap-6">
                {state.cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-row items-center justify-between h-[64px]"
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
                        <p className="text-[14px] font-bold opacity-50">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Input */}
                    <div>
                      <div className="flex flex-row justify-evenly items-center bg-[#F1F1F1] rounded-sm w-[96px] h-[32px]">
                        {/* - Button */}
                        <button
                          type="button"
                          onClick={() => handleDecrement(item.id)}
                          className="w-8 h-full text-[13px] font-bold tracking-[1px] opacity-25  hover:opacity-100 hover:text-[#D87D4A] hover:text-[18px]"
                        >
                          -
                        </button>
                        {/* Show Number */}
                        <p>{item.quantity}</p>
                        {/* + Button */}
                        <button
                          type="button"
                          onClick={() => handleIncrement(item.id)}
                          className="w-8 h-full text-[13px] font-bold tracking-[1px] opacity-25 hover:opacity-100 hover:text-[#D87D4A] hover:text-[18px]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Cart Total */}
            <div className="flex flex-row justify-between items-center">
              <p className="text-[15px] font-medium leading-[25px] opacity-50">
                Total
              </p>
              <p className="text-[18px] font-bold">
                $ {totalPrice.toLocaleString()}
              </p>
            </div>

            {/* Checkout Button */}
            <div>
              <button
                type="button"
                className="bg-[#D87D4A] text-white font-bold text-[13px] tracking-[1px] inline-block w-full py-3.5 rounded-sm hover:bg-[#FBAF85] transition duration-300 ease-in-out"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
