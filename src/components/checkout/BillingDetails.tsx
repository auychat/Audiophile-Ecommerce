import React from "react";

interface BillingDetailsProps {
  formik: any;
}

const BillingDetails: React.FC<BillingDetailsProps> = ({ formik }) => {
  return (
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
              <p className="text-[12px] tracking-[-0.21px] font-bold">Name</p>
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
              <p className="text-[12px] tracking-[-0.21px] font-bold">Email</p>
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
  );
};

export default BillingDetails;
