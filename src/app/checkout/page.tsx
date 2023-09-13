"use client";

import Summary from "@/components/checkout/Summary";
import React from "react";

const Checkout = () => {
  // Function to go back to the previous page
  const handleGoback = () => {
    window.history.back();
  };

  return (
    <div className="bg-[#F0F0F0]">
      <div className="max-w-[1110px] mx-auto pt-[79px]">
        <button type="button" onClick={handleGoback}>
          <h5 className="font-medium leading-[25px] opacity-50 hover:opacity-100 hover:text-[#D87D4A] hover:font-bold transition-opacity duration-300">
            Go Back
          </h5>
        </button>
      </div>
      <div className="max-w-[1110px] mx-auto flex flex-row justify-between">
        {/* LEFT COMPONENT */}
        <div className="max-w-[730px] bg-white px-12 py-12 rounded-xl mt-[38px] mb-[142px]">
          <h1 className="text-[32px] font-bold leading-9 tracking-[1.14px] mb-[41px]">
            CHECKOUT
          </h1>
          <form>
            {/* BILLING DETAILS */}
            <div className="flex flex-col gap-4 mb-[53px]">
              <h2 className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.93px]">
                Billing Details
              </h2>
              <div className="flex flex-row gap-4 items-center justify-between">
                {/* Name */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="name"
                    className="text-[12px] tracking-[-0.21px] font-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Alexei Ward"
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="email"
                    className="text-[12px] tracking-[-0.21px] font-bold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="alexei@mail.com"
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                  />
                </div>
              </div>
              {/* Phone Number */}
              <div className="flex flex-col gap-2 w-[309px] h-full">
                <label
                  htmlFor="phone"
                  className="text-[12px] tracking-[-0.21px] font-bold"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 202-555-0136"
                  className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                />
              </div>
            </div>{" "}
            {/* End of BILLING DETAILS */}
            {/* SHIPPING INFO */}
            <div className="flex flex-col gap-4  mb-[61px]">
              <h2 className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.93px]">
                SHIPPING INFO
              </h2>
              {/* Address */}
              <div className="flex flex-col gap-2 w-full h-full">
                <label
                  htmlFor="Address"
                  className="text-[12px] tracking-[-0.21px] font-bold"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="1137 Williams Avenue"
                  className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                />
              </div>
              {/* ZipCode & City*/}
              <div className="flex flex-row gap-4 items-center justify-between">
                {/* ZipCode */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="zipcode"
                    className="text-[12px] tracking-[-0.21px] font-bold"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    placeholder="10001"
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="city"
                    className="text-[12px] tracking-[-0.21px] font-bold"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="New York"
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                  />
                </div>
              </div>
              {/* Country */}
              <div className="flex flex-col gap-2 w-[309px] h-full">
                <label
                  htmlFor="country"
                  className="text-[12px] tracking-[-0.21px] font-bold"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="United States"
                  className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                />
              </div>
            </div>
            {/*END OF SHIPPING INFO */}
            {/* PAYMENT DETAILS */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.93px]">
                PAMENT DETAILS
              </h2>
              {/* Payment Method*/}
              <div className="flex flex-row gap-4 justify-between">
                {/* Payment Method */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <p className="text-[12px] tracking-[-0.21px] font-bold">
                    Payment Method
                  </p>
                </div>

                {/* e-Money && Cash on Delivery */}
                <div className="flex flex-col gap-4">
                  {/* e-Money */}
                  <div className="flex flex-row gap-4 items-center w-[309px] h-full border border-[#CFCFCF] px-6 py-[17px] rounded-lg">
                    <input
                      type="radio"
                      id="e-Money"
                      value=""
                      className="form-radio w-5 h-5 text-[#D87D4A] checked:bg-[#D87D4A] checked:border-transparent cursor-pointer"
                    />
                    <label className="text-[12px] tracking-[-0.21px] font-bold">
                      e-Money
                    </label>
                  </div>
                  {/* Cash on Delivery */}
                  <div className="flex flex-row gap-4 items-center w-[309px] h-full border border-[#CFCFCF] px-6 py-[17px] rounded-lg">
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      value=""
                      className="form-radio w-5 h-5 text-[#D87D4A] checked:bg-[#D87D4A] checked:border-transparent cursor-pointer"
                    />
                    <label className="text-[12px] tracking-[-0.21px] font-bold">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>
              {/* e-Money Number && e-Money PIN */}
              <div className="flex flex-row gap-4 items-center justify-between">
                {/* e-Money Number */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="e-MoneyNumber"
                    className="text-[12px] tracking-[-0.21px] font-bold"
                  >
                    e-Money Number
                  </label>
                  <input
                    type="number"
                    id="e-MoneyNumber"
                    placeholder="238521993"
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                  />
                </div>

                {/* e-Money PIN */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="e-MoneyPIN"
                    className="text-[12px] tracking-[-0.21px] font-bold"
                  >
                    e-Money PIN
                  </label>
                  <input
                    type="number"
                    id="e-MoneyPIN"
                    placeholder="6891"
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* RIGHT COMPONENT */}
        <div className="max-w-[350px] w-full h-full bg-white px-8 py-8 rounded-xl mt-[38px]">
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
