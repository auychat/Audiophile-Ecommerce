"use client";

import Summary from "@/components/checkout/Summary";
import React, { useEffect, useState } from "react";
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
    paymentMethod: "e-Money",
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

  // Get the stored formik values from session storage
  const storedFormikValues = typeof window !== "undefined" ? JSON.parse(
    sessionStorage.getItem("checkoutFormData") || "null"
  ): null;

  // State to store the final formik values before redirecting to the review page
  const [finalFormikValues, setFinalFormikValues] =
    useState<IFormValues>(initialValues);

  // Formik Hook to handle form values and validation
  const formik = useFormik<IFormValues>({
    // For merge the initial values with the stored formik values
    initialValues: { ...initialValues, ...storedFormikValues },
    validationSchema,
    onSubmit: (values) => {
      setFinalFormikValues(values);

      router.push(`/checkout/review`);
    },
  });

  // Use useEffect to update session storage whener the formik values change
  useEffect(() => {
    sessionStorage.setItem("checkoutFormData", JSON.stringify(formik.values));
  }, [formik.values]);

  // Function to go back to the previous page
  const handleGoback = () => {
    // Check if there are finalFormikValues, if so, set them back to formik.values
    if (finalFormikValues) {
      formik.setValues(finalFormikValues);
    }
    window.history.back();
  };

  // Log form values as they change from the formik state
  // console.log("Formik values", formik.values);
  // console.log("finalFormikValues", finalFormikValues);

  return (
    <div className="bg-[#F0F0F0]">
      {/* GO BACK */}
      <div className="max-w-[1110px] mx-auto pt-[79px] xs:w-[91.75%] xs:pt-4 sm:w-[91.5%] sm:pt-12 md:w-[91.5%] md:pt-12 lg:w-[91.5%]">
        <button type="button" onClick={handleGoback}>
          <h5 className="font-medium leading-[25px] opacity-50 hover:opacity-100 hover:text-[#D87D4A] hover:font-bold transition-opacity duration-300">
            Go Back
          </h5>
        </button>
      </div>
      <div className="max-w-[1110px] mx-auto flex flex-row justify-between xs:w-[91.75%] xs:flex-col xs:gap-8 sm:w-[91.5%] sm:flex-col sm:gap-8 md:w-[91.5%] md:flex-col md:gap-8 lg:w-[91.5%] lg:gap-8">
        {/* LEFT COMPONENT */}
        <div className="max-w-[730px] bg-white px-12 py-12 rounded-xl mt-[38px] mb-[142px] xs:mt-6 xs:mb-0 xs:px-6 xs:py-8 sm:mt-8 sm:mb-0 sm:px-8 sm:py-8 md:mt-8 md:mb-0 md:px-8 md:py-8 md:max-w-full lg:min-w-[600px]">
          <h1 className="text-[32px] font-bold leading-9 tracking-[1.14px] mb-[41px] xs:text-[28px] xs:tracking-[1px] xs:mb-8 sm:mb-8 md:mb-8">
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
        <div className="max-w-[350px] w-full h-full bg-white px-8 py-8 rounded-xl mt-[38px] xs:mt-0 xs:mb-[97px] xs:max-w-full sm:mt-0 sm:mb-[116px] sm:max-w-full md:mt-0 md:mb-[116px] md:max-w-full">
          <Summary onSubmit={formik.handleSubmit} paymentButton="Continue" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
