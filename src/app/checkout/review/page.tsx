"use client";

import Image from "next/image";
import React from "react";
import cashOnDeliveryIcon from "../../../../public/assets/checkout/icon-cash-on-delivery.svg";
import Summary from "@/components/checkout/Summary";

const OrderReview = () => {
  // Get the data from the session storage
  const checkoutFormDataString = sessionStorage.getItem("checkoutFormData");

  // Declare the variables
  let name,
    email,
    phone,
    address,
    zipcode,
    city,
    country,
    paymentMethod,
    isEMoney,
    eMoneyNumber,
    eMoneyPIN;

  // Parse the data to JSON
  if (checkoutFormDataString !== null) {
    const checkoutFormData = JSON.parse(checkoutFormDataString);

    // Destructure the data
    ({
      name,
      email,
      phone,
      address,
      zipcode,
      city,
      country,
      paymentMethod,
      isEMoney,
      eMoneyNumber,
      eMoneyPIN,
    } = checkoutFormData);
  } else {
    console.error("No checkout data found in session storage");
  }

  const [submitResult, setSubmitResult] = React.useState("pending");

  const handleSubmit = async () => {
    const getSessionStorageData = sessionStorage.getItem("checkoutFormData");
    let checkoutFormData: {
      name: string;
      email: string;
      phone: string;
      address: string;
      zipcode: string;
      city: string;
      country: string;
      paymentMethod: string;
      isEMoney: boolean;
      eMoneyNumber: string;
      eMoneyPIN: string;
    };

    if (getSessionStorageData !== null) {
      checkoutFormData = JSON.parse(getSessionStorageData);
    } else {
      console.error("No checkout data found in session storage");
      return;
    }

    alert(JSON.stringify(checkoutFormData, null, 2));

    // Convert the formik values to query string and redirect to the review page
    // const queryString = Object.keys(checkoutFormData)
    //   .map((key) => {
    //     return `${key}=${encodeURIComponent((checkoutFormData as any)[key])}`;
    //   })
    //   .join("&");

    setSubmitResult("success");
    sessionStorage.removeItem("checkoutFormData");
    console.log("Session Storage has been removed");
  };

  // Function to go back to the previous page
  const handleGoback = () => {
    window.history.back();
  };

  return (
    <div className="bg-[#F0F0F0]">
      {/* GO BACK */}
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
          {/* FORM START */}
          <form>
            {/* BILLING DETAILS */}
            <div className="flex flex-col gap-4 mb-[53px]">
              <h2 className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.93px]">
                Billing Details
              </h2>
              <div className="flex flex-row gap-4 items-center justify-between">
                {/* Name */}
                <div className="flex flex-col gap-2 w-[309px] h-full relative">
                  <label
                    htmlFor="name"
                    className="flex flex-row items center justify-between"
                  >
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      Name
                    </p>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name || ""}
                    readOnly
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                  />
                </div>
                {/* End of Name */}

                {/* Email */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="email"
                    className="flex flex-row items center justify-between"
                  >
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      Email
                    </p>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email || ""}
                    readOnly
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                  />
                </div>
                {/* End of Email */}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2 w-[309px] h-full">
                <label
                  htmlFor="phone"
                  className="flex flex-row items center justify-between"
                >
                  <p className="text-[12px] tracking-[-0.21px] font-bold">
                    Phone Number
                  </p>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone || ""}
                  readOnly
                  className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                />
              </div>
              {/* End of Phone Number */}
            </div>

            {/* SHIPPING INFO */}
            <div className="flex flex-col gap-4  mb-[61px]">
              <h2 className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.93px]">
                SHIPPING INFO
              </h2>
              {/* Address */}
              <div className="flex flex-col gap-2 w-full h-full">
                <label
                  htmlFor="Address"
                  className="flex flex-row items center justify-between"
                >
                  <p className="text-[12px] tracking-[-0.21px] font-bold">
                    Address
                  </p>
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={address || ""}
                  readOnly
                  className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                />
              </div>
              {/* ZipCode & City*/}
              <div className="flex flex-row gap-4 items-center justify-between">
                {/* ZipCode */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="zipcode"
                    className="flex flex-row items center justify-between"
                  >
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      ZipCode
                    </p>
                  </label>
                  <input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    value={zipcode || ""}
                    readOnly
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                  />
                </div>
                {/* End of ZipCode */}

                {/* City */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="city"
                    className="flex flex-row items center justify-between"
                  >
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      City
                    </p>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    value={city || ""}
                    readOnly
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                  />
                </div>
                {/* End of City */}
              </div>
              {/* End of ZipCode and City */}

              {/* Country */}
              <div className="flex flex-col gap-2 w-[309px] h-full">
                <label
                  htmlFor="country"
                  className="flex flex-row items center justify-between"
                >
                  <p className="text-[12px] tracking-[-0.21px] font-bold">
                    Country
                  </p>
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={country || ""}
                  readOnly
                  className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                />
              </div>
              {/* End of Country */}
            </div>
            {/* End of SHIPPING INFO */}

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
                      id="e-Money"
                      name="paymentMethod"
                      type="radio"
                      value="e-Money"
                      checked={isEMoney === "true"}
                      readOnly
                      className="form-radio w-5 h-5 text-[#D87D4A] checked:bg-[#D87D4A] checked:border-transparent focus:ring-[#D87D4A] cursor-default"
                    />
                    <label className="text-[12px] tracking-[-0.21px] font-bold">
                      e-Money
                    </label>
                  </div>
                  {/* Cash on Delivery */}
                  <div className="flex flex-row gap-4 items-center w-[309px] h-full border border-[#CFCFCF] px-6 py-[17px] rounded-lg">
                    <input
                      id="cash-on-delivery"
                      name="paymentMethod"
                      type="radio"
                      value="cash-on-delivery"
                      checked={isEMoney === "false"}
                      readOnly
                      className="form-radio w-5 h-5 text-[#D87D4A] checked:bg-[#D87D4A] checked:border-transparent focus:ring-[#D87D4A] cursor-default"
                    />
                    <label className="text-[12px] tracking-[-0.21px] font-bold">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>
              {/* e-Money Number && e-Money PIN */}
              {/* Conditional rendering when choosing e-Money*/}
              <div
                className={`flex flex-row gap-4 items-center justify-between mt-[10px] ${
                  // Add styles when the payment method is e-Money
                  paymentMethod !== "e-Money" ? "hidden" : ""
                }`}
              >
                {/* e-Money Number */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="eMoneyNumber"
                    className="flex flex-row items center justify-between"
                  >
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      e-Money Number
                    </p>
                  </label>
                  <input
                    id="eMoneyNumber"
                    name="eMoneyNumber"
                    type="number"
                    value={eMoneyNumber || ""}
                    readOnly
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                  />
                </div>

                {/* e-Money PIN */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="eMoneyPIN"
                    className="flex flex-row items center justify-between"
                  >
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      e-Money PIN
                    </p>
                  </label>
                  <input
                    id="eMoneyPIN"
                    name="eMoneyPIN"
                    type="number"
                    value={eMoneyPIN || ""}
                    readOnly
                    className="border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:outline-none focus:border-[#CFCFCF] focus:ring-[#CFCFCF] cursor-default"
                  />
                </div>
              </div>

              {/* Conditional rendering when choosing Cash on Delivery */}
              {paymentMethod === "cash-on-delivery" && (
                <div className="flex flex-row gap-4 items-center justify-between mt-4">
                  <Image
                    src={cashOnDeliveryIcon}
                    alt="CashOnDelivery"
                    width={48}
                    height={48}
                  />
                  <p className="text-[15px] font-medium leading-[25px] opacity-50">
                    The &apos;Cash on Delivery&apos; option enables you to pay
                    in cash when our delivery courier arrives at your residence.
                    Just make sure your address is correct so that your order
                    will not be cancelled.
                  </p>
                </div>
              )}
            </div>
          </form>
          {/* FORM END */}
        </div>

        {/* RIGHT COMPONENT */}
        <div className="max-w-[350px] w-full h-full bg-white px-8 py-8 rounded-xl mt-[38px]">
          <Summary onSubmit={handleSubmit} paymentButton="Pay" />
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
