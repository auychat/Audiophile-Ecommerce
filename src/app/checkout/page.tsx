"use client";

import Summary from "@/components/checkout/Summary";
import React from "react";
import cashOnDeliveryIcon from "../../../public/assets/checkout/icon-cash-on-delivery.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: string;
  eMoneyPIN: string;
}

const Checkout = () => {
  // Function to go back to the previous page
  const handleGoback = () => {
    window.history.back();
  };

  // Formik
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPIN: "",
  };

  // Yup Validation Schema for Formik
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(36, "Must be 36 characters or less")
      .required("Name is required"),
    email: Yup.string().email("Wrong format").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    zipcode: Yup.string().required("Zipcode is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    paymentMethod: Yup.string().required("Payment Method is required"),
    eMoneyNumber: Yup.string().required("e-Money Number is required"),
    eMoneyPIN: Yup.string().required("e-Money PIN is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // Log form values as they change from the formik state
  console.log("Formik values", formik.values);

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
          {/* FORM START */}
          <form onSubmit={formik.handleSubmit}>
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
                    {/* Conditional Rendering for Name Label */}
                    {formik.touched.name && formik.errors.name ? (
                      // Display red text when there is an error in the name field
                      <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                        Name
                      </p>
                    ) : (
                      // Display black text when there is no error in the name field
                      <p className="text-[12px] tracking-[-0.21px] font-bold">
                        Name
                      </p>
                    )}
                    {/* Conditional Rendering for Name Error */}
                    {formik.touched.name && formik.errors.name ? (
                      <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                        {formik.errors.name}
                      </p>
                    ) : null}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    placeholder="Alexei Ward"
                    className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                      // Add styles when the name field is touched
                      formik.values.name
                        ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                        : " "
                    } ${
                      // Add styles when the name field is touched and there is an error
                      formik.touched.name && formik.errors.name
                        ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                        : formik.touched.name
                        ? // Add styles when the name field is touched and there is no error
                          "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                        : // Default styles when the name field is not touched
                          "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                    }`}
                  />
                </div>
                {/* End of Name */}

                {/* Email */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="email"
                    className="flex flex-row items center justify-between"
                  >
                    {/* Conditional Redering for Email Label */}
                    {formik.touched.email && formik.errors.email ? (
                      // Display red text when there is an error in the email field
                      <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                        Email
                      </p>
                    ) : (
                      // Display black text when there is no error in the email field
                      <p className="text-[12px] tracking-[-0.21px] font-bold">
                        Email
                      </p>
                    )}
                    {/* Conditional Rendering for Email Error */}
                    {formik.touched.email && formik.errors.email ? (
                      <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                        {formik.errors.email}
                      </p>
                    ) : null}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="alexei@mail.com"
                    className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                      // Add styles when the email field is touched
                      formik.values.email
                        ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                        : " "
                    } ${
                      // Add styles when the email field is touched and there is an error
                      formik.touched.email && formik.errors.email
                        ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                        : formik.touched.email
                        ? // Add styles when the email field is touched and there is no error
                          "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                        : // Default styles when the email field is not touched
                          "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                    }`}
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
                  {/* Conditional Redering for Phone Label */}
                  {formik.touched.phone && formik.errors.phone ? (
                    // Display red text when there is an error in the phone field
                    <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                      Phone Number
                    </p>
                  ) : (
                    // Display black text when there is no error in the phone field
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      Phone Number
                    </p>
                  )}
                  {/* Conditional Rendering for Phone Error */}
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                      {formik.errors.phone}
                    </p>
                  ) : null}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder="+1 202-555-0136"
                  className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                    // Add styles when the phone field is touched
                    formik.values.phone
                      ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                      : " "
                  } ${
                    // Add styles when the phone field is touched and there is an error
                    formik.touched.phone && formik.errors.phone
                      ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                      : formik.touched.phone
                      ? // Add styles when the phone field is touched and there is no error
                        "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                      : // Default styles when the phone field is not touched
                        "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                  }`}
                />
              </div>
              {/* End of Phone Number */}
            </div>
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
                  className="flex flex-row items center justify-between"
                >
                  {/* Conditional Redering for Address Label */}
                  {formik.touched.address && formik.errors.address ? (
                    // Display red text when there is an error in the address field
                    <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                      Address
                    </p>
                  ) : (
                    // Display black text when there is no error in the address field
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      Address
                    </p>
                  )}
                  {/* Conditional Rendering for Address Error */}
                  {formik.touched.address && formik.errors.address ? (
                    <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                      {formik.errors.address}
                    </p>
                  ) : null}
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="1137 Williams Avenue"
                  className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                    // Add styles when the address field is touched
                    formik.values.address
                      ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                      : " "
                  } ${
                    // Add styles when the address field is touched and there is an error
                    formik.touched.address && formik.errors.address
                      ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                      : formik.touched.address
                      ? // Add styles when the address field is touched and there is no error
                        "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                      : // Default styles when the address field is not touched
                        "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                  }`}
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
                    {/* Conditional Redering for ZipCode Label */}
                    {formik.touched.zipcode && formik.errors.zipcode ? (
                      // Display red text when there is an error in the zipcode field
                      <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                        ZipCode
                      </p>
                    ) : (
                      // Display black text when there is no error in the zipcode field
                      <p className="text-[12px] tracking-[-0.21px] font-bold">
                        ZipCode
                      </p>
                    )}
                    {/* Conditional Rendering for ZipCode Error */}
                    {formik.touched.zipcode && formik.errors.zipcode ? (
                      <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                        {formik.errors.zipcode}
                      </p>
                    ) : null}
                  </label>
                  <input
                    id="zipcode"
                    name="zipcode"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.zipcode}
                    placeholder="10001"
                    className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                      // Add styles when the zipcode field is touched
                      formik.values.zipcode
                        ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                        : " "
                    } ${
                      // Add styles when the zipcode field is touched and there is an error
                      formik.touched.zipcode && formik.errors.zipcode
                        ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                        : formik.touched.zipcode
                        ? // Add styles when the zipcode field is touched and there is no error
                          "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                        : // Default styles when the zipcode field is not touched
                          "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                    }`}
                  />
                </div>
                {/* End of ZipCode */}

                {/* City */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="city"
                    className="flex flex-row items center justify-between"
                  >
                    {/* Conditional Redering for City Label */}
                    {formik.touched.city && formik.errors.city ? (
                      // Display red text when there is an error in the city field
                      <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                        City
                      </p>
                    ) : (
                      // Display black text when there is no error in the city field
                      <p className="text-[12px] tracking-[-0.21px] font-bold">
                        City
                      </p>
                    )}
                    {/* Conditional Rendering for City Error */}
                    {formik.touched.city && formik.errors.city ? (
                      <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                        {formik.errors.city}
                      </p>
                    ) : null}
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    placeholder="New York"
                    className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                      // Add styles when the city field is touched
                      formik.values.city
                        ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                        : " "
                    } ${
                      // Add styles when the city field is touched and there is an error
                      formik.touched.city && formik.errors.city
                        ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                        : formik.touched.city
                        ? // Add styles when the city field is touched and there is no error
                          "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                        : // Default styles when the city field is not touched
                          "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                    }`}
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
                  {/* Conditional Redering for Country Label */}
                  {formik.touched.country && formik.errors.country ? (
                    // Display red text when there is an error in the country field
                    <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                      Country
                    </p>
                  ) : (
                    // Display black text when there is no error in the country field
                    <p className="text-[12px] tracking-[-0.21px] font-bold">
                      Country
                    </p>
                  )}
                  {/* Conditional Rendering for Country Error */}
                  {formik.touched.country && formik.errors.country ? (
                    <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                      {formik.errors.country}
                    </p>
                  ) : null}
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  placeholder="United States"
                  className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                    // Add styles when the country field is touched
                    formik.values.country
                      ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                      : " "
                  } ${
                    // Add styles when the country field is touched and there is an error
                    formik.touched.country && formik.errors.country
                      ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                      : formik.touched.country
                      ? // Add styles when the country field is touched and there is no error
                        "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                      : // Default styles when the country field is not touched
                        "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                  }`}
                />
              </div>
              {/* End of Country */}
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
                      id="e-Money"
                      name="paymentMethod"
                      type="radio"
                      value="e-Money"
                      checked={formik.values.paymentMethod === "e-Money"}
                      onChange={formik.handleChange}
                      className="form-radio w-5 h-5 text-[#D87D4A] checked:bg-[#D87D4A] checked:border-transparent cursor-pointer focus:ring-[#D87D4A]"
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
                      checked={
                        formik.values.paymentMethod === "cash-on-delivery"
                      }
                      onChange={formik.handleChange}
                      className="form-radio w-5 h-5 text-[#D87D4A] checked:bg-[#D87D4A] checked:border-transparent cursor-pointer focus:ring-[#D87D4A]"
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
                  formik.values.paymentMethod !== "e-Money" ? "hidden" : ""
                }`}
              >
                {/* e-Money Number */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="eMoneyNumber"
                    className="flex flex-row items center justify-between"
                  >
                    {/* Conditional Redering for e-Money Number Label */}
                    {formik.touched.eMoneyNumber &&
                    formik.errors.eMoneyNumber ? (
                      // Display red text when there is an error in the e-Money Number field
                      <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                        e-Money Number
                      </p>
                    ) : (
                      // Display black text when there is no error in the e-Money Number field
                      <p className="text-[12px] tracking-[-0.21px] font-bold">
                        e-Money Number
                      </p>
                    )}
                    {/* Conditional Rendering for e-Money Number Error */}
                    {formik.touched.eMoneyNumber &&
                    formik.errors.eMoneyNumber ? (
                      <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                        {formik.errors.eMoneyNumber}
                      </p>
                    ) : null}
                  </label>
                  <input
                    id="eMoneyNumber"
                    name="eMoneyNumber"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.eMoneyNumber}
                    placeholder="238521993"
                    className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                      // Add styles when the e-Money Number field is touched
                      formik.values.eMoneyNumber
                        ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                        : " "
                    } ${
                      // Add styles when the e-Money Number field is touched and there is an error
                      formik.touched.eMoneyNumber && formik.errors.eMoneyNumber
                        ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                        : formik.touched.eMoneyNumber
                        ? // Add styles when the e-Money Number field is touched and there is no error
                          "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                        : // Default styles when the e-Money Number field is not touched
                          "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                    }`}
                  />
                </div>

                {/* e-Money PIN */}
                <div className="flex flex-col gap-2 w-[309px] h-full">
                  <label
                    htmlFor="eMoneyPIN"
                    className="flex flex-row items center justify-between"
                  >
                    {/* Conditional Redering for e-Money PIN Label */}
                    {formik.touched.eMoneyPIN && formik.errors.eMoneyPIN ? (
                      // Display red text when there is an error in the e-Money PIN field
                      <p className="text-[12px] text-[#CD2C2C] tracking-[-0.21px] font-bold">
                        e-Money PIN
                      </p>
                    ) : (
                      // Display black text when there is no error in the e-Money PIN field
                      <p className="text-[12px] tracking-[-0.21px] font-bold">
                        e-Money PIN
                      </p>
                    )}
                    {/* Conditional Rendering for e-Money PIN Error */}
                    {formik.touched.eMoneyPIN && formik.errors.eMoneyPIN ? (
                      <p className="text-[#CD2C2C] text-[12px] tracking-[-0.21px] font-medium">
                        {formik.errors.eMoneyPIN}
                      </p>
                    ) : null}
                  </label>
                  <input
                    id="eMoneyPIN"
                    name="eMoneyPIN"
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.eMoneyPIN}
                    placeholder="6891"
                    className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold opacity-40 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
                      // Add styles when the e-Money PIN field is touched
                      formik.values.eMoneyPIN
                        ? "text-[14px] font-bold tracking-[-0.25px] opacity-100"
                        : " "
                    } ${
                      // Add styles when the e-Money PIN field is touched and there is an error
                      formik.touched.eMoneyPIN && formik.errors.eMoneyPIN
                        ? "border-[#CD2C2C] border-1 ring-[#CD2C2C] ring-1 outline-none animate-shake"
                        : formik.touched.eMoneyPIN
                        ? // Add styles when the e-Money PIN field is touched and there is no error
                          "border-green-500 border-1 ring-green-500 ring-1 outline-none"
                        : // Default styles when the e-Money PIN field is not touched
                          "border-[#CFCFCF] focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300"
                    }`}
                  />
                </div>
              </div>

              {/* Conditional rendering when choosing Cash on Delivery */}
              {formik.values.paymentMethod === "cash-on-delivery" && (
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
          <Summary onSubmit={formik.handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
