"use client";

import Summary from "@/components/checkout/Summary";
import React from "react";
import cashOnDeliveryIcon from "../../../public/assets/checkout/icon-cash-on-delivery.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import PaymentDetails from "@/components/checkout/PaymentDetails";
import ShippingInfo from "@/components/checkout/ShippingInfo";
import BillingDetails from "@/components/checkout/BillingDetails";

interface IFormValues {
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
}

const Checkout = () => {
  // Function to go back to the previous page
  const handleGoback = () => {
    window.history.back();
  };

  const router = useRouter();

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
    isEMoney: true,
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
    isEMoney: Yup.boolean(),
    eMoneyNumber: Yup.string().when("isEMoney", ([isEMoney], Schema) => {
      if (isEMoney) return Schema.required("e-Money Number is required");
      return Schema.notRequired();
    }),
    eMoneyPIN: Yup.string().when("isEMoney", ([isEMoney], Schema) => {
      if (isEMoney) return Schema.required("e-Money PIN is required");
      return Schema.notRequired();
    }),
  });

  // Function to handle changes in the payment method
  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Check if the payment method is "Cash on Delivery"
    if (e.target.value === "cash-on-delivery") {
      // Set isEMoney to false
      formik.setFieldValue("isEMoney", false);
      // Clear the eMoneyNumber and eMoneyPIN
      formik.setFieldValue("eMoneyNumber", "");
      formik.setFieldValue("eMoneyPIN", "");
    } else {
      // Set isEMoney to true
      formik.setFieldValue("isEMoney", true);
    }
  };

  // Formik Hook to handle form values and validation
  const formik = useFormik<IFormValues>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // Display the formik values as an alert
      alert(JSON.stringify(values, null, 2));

      // Convert the formik values to query string and redirect to the review page
      const queryString = Object.keys(values)
        .map((key) => {
          return `${key}=${encodeURIComponent((values as any)[key])}`;
        })
        .join("&");

      router.push(`/checkout/review?${queryString}`);
    },
  });

  // Log form values as they change from the formik state
  console.log("Formik values", formik.values);

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
          <form onSubmit={formik.handleSubmit}>
            {/* BILLING DETAILS */}
            <BillingDetails formik={formik} />

            {/* SHIPPING INFO */}
            <ShippingInfo formik={formik} />

            {/* PAYMENT DETAILS */}
            <PaymentDetails
              handlePaymentMethodChange={handlePaymentMethodChange}
              formik={formik}
              cashOnDeliveryIcon={cashOnDeliveryIcon}
            />
          </form>
          {/* FORM END */}
        </div>

        {/* RIGHT COMPONENT */}
        <div className="max-w-[350px] w-full h-full bg-white px-8 py-8 rounded-xl mt-[38px]">
          <Summary onSubmit={formik.handleSubmit} paymentButton="Continue" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
