"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

const OrderReview = () => {
  const searchParams = useSearchParams();

  const name = searchParams?.get("name");
  const email = searchParams?.get("email");
  const address = searchParams?.get("address");
  const city = searchParams?.get("city");
  const country = searchParams?.get("country");
  const zipcode = searchParams?.get("zipcode");
  const paymentMethod = searchParams?.get("paymentMethod");
  const eMoneyNumber = searchParams?.get("eMoneyNumber");
  const eMoneyPIN = searchParams?.get("eMoneyPIN");

  return (
    <div>
      <h2>Formik Value from Previous Page :</h2>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Address : {address}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>
      <p>Zip : {zipcode}</p>
      <p>Payment Method : {paymentMethod}</p>
      <p>eMoney Number : {eMoneyNumber}</p>
      <p>eMoney PIN : {eMoneyPIN}</p>
    </div>
  );
};

export default OrderReview;
