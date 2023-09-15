import React from 'react'

interface ShippingInfoProps {
    formik: any
    }

const ShippingInfo: React.FC<ShippingInfoProps> = ({formik}) => {
  return (
    <div className="flex flex-col gap-4  mb-[61px]">
              <h2 className="text-[#D87D4A] text-[13px] font-bold leading-[25px] tracking-[0.93px]">
                SHIPPING INFO
              </h2>
              {/* Address */}
              <div className="flex flex-col gap-2 w-full h-full">
                <label
                  htmlFor="address"
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
                  autoComplete="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  placeholder="1137 Williams Avenue"
                  className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold placeholder-gray-300  px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
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
                    htmlFor="postal-code"
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
                    id="postal-code"
                    name="zipcode"
                    type="text"
                    autoComplete='postal-code'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.zipcode}
                    placeholder="10001"
                    className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold placeholder-gray-300  px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
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
                    htmlFor="address-level2"
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
                    id="address-level2"
                    name="city"
                    type="text"
                    autoComplete='address-level2'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                    placeholder="New York"
                    className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold placeholder-gray-300  px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
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
                  autoComplete='country'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  placeholder="United States"
                  className={`border border-[#CFCFCF] text-sm tracking-[-0.25px] font-bold placeholder-gray-300  px-6 py-[17px] rounded-lg focus:border-[#D87D4A] focus:ring-[#D87D4A] transition-all duration-300 focus:outline-none ${
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
  )
}

export default ShippingInfo