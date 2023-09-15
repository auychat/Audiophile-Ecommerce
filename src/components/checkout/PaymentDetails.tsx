import React from "react";
import Image from "next/image";

interface PaymentDetailsProps {
  handlePaymentMethodChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formik: any;
  cashOnDeliveryIcon: string;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({
  handlePaymentMethodChange,
  formik,
  cashOnDeliveryIcon,
}) => {
  return (
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
              onChange={(e) => {
                formik.handleChange(e);
                handlePaymentMethodChange(e);
              }}
              className="form-radio w-5 h-5 text-[#D87D4A] checked:bg-[#D87D4A] checked:border-transparent cursor-pointer focus:ring-[#D87D4A]"
            />
            <label htmlFor="e-Money" className="text-[12px] tracking-[-0.21px] font-bold">
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
              checked={formik.values.paymentMethod === "cash-on-delivery"}
              onChange={(e) => {
                formik.handleChange(e);
                handlePaymentMethodChange(e);
              }}
              className="form-radio w-5 h-5 text-[#D87D4A] checked:bg-[#D87D4A] checked:border-transparent cursor-pointer focus:ring-[#D87D4A]"
            />
            <label htmlFor="cash-on-delivery" className="text-[12px] tracking-[-0.21px] font-bold">
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
            {formik.touched.eMoneyNumber && formik.errors.eMoneyNumber ? (
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
            {formik.touched.eMoneyNumber && formik.errors.eMoneyNumber ? (
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
            className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold placeholder-gray-300 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
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
            className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold placeholder-gray-300 px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
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
            The &apos;Cash on Delivery&apos; option enables you to pay in cash
            when our delivery courier arrives at your residence. Just make sure
            your address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
