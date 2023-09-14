import React from "react";

interface QuantityInputProps {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onSetQuantity: (value: number) => void;
  onAddToCart: () => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  quantity,
  onDecrement,
  onIncrement,
  onSetQuantity,
  onAddToCart,
}) => {
  return (
    <div className="flex flex-row gap-[14px]">
      <div className="flex flex-row justify-evenly items-center bg-[#F1F1F1] rounded-lg w-[120px] h-[48px]">
        <button
          type="button"
          onClick={onDecrement}
          className="w-8 h-full text-[13px] font-bold tracking-[1px] opacity-25  hover:opacity-100 hover:text-[#D87D4A] hover:text-[18px]"
        >
          -
        </button>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => onSetQuantity(parseInt(e.target.value))}
          className="h-full w-8 text-center text-[13px] font-bold tracking-[1px] border-none outline-none bg-transparent"
        />
        <button
          type="button"
          onClick={onIncrement}
          className="w-8 h-full text-[13px] font-bold tracking-[1px] opacity-25 hover:opacity-100 hover:text-[#D87D4A] hover:text-[18px]"
        >
          +
        </button>
      </div>
      <button
        onClick={onAddToCart}
        className="font-bold text-[13px] trading-[1px] inline-block px-9 py-3.5 bg-button-primary text-white rounded-sm hover:bg-button-secondary transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default QuantityInput;
