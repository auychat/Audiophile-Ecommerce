"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/shared/desktop/logo.svg";
import { useCart } from "@/context/CartContext";
import CartModal from "../modal/CartModal";

const Links = [
  { id: 1, title: "HOME", link: "/" },
  { id: 2, title: "HEADPHONES", link: "/headphones" },
  { id: 3, title: "SPEAKERS", link: "/speakers" },
  { id: 4, title: "EARPHONES", link: "/earphones" },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const { state } = useCart();

  // State to control the modal visibility
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Function to open the modal
  const openCartModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  // Calculate the total number of different items in the cart
  const totalDiffItems = state.cart.length;

  return (
    <header className="bg-[#191919] relative z-20">
      <nav className="xl:max-w-[1110px] min-h-[96px] mx-auto flex flex-row justify-between justify-items-center item-center w-full py-4 lg:w-[91.75%] md:max-w-[91.75%] sm:max-w-[91.75%] xs:min-h-[90px] xs:max-w-[92%]">
        {/*Hamburger */}

        <div
          className="flex items-center md:hidden lg:hidden xl:hidden"
          onClick={toggleNav}
        >
          <svg
            width="16"
            height="15"
            xmlns="http://www.w3.org/2000/svg "
            className="fill-white transition-colors duration-300 hover:fill-[#D87D4A] cursor-pointer"
          >
            <g>
              <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
            </g>
          </svg>

          {/* Mobile Navigation Links will be rendered if isNavOpen is true */}
          {isNavOpen && (
            <div className="absolute flex flex-col items-center justify-start gap-8 top-[90px] left-0 pt-16 h-[40vh] w-[50%] max-w-[250px] bg-[#191919] bg-opacity-95 rounded-r-lg ">
              {Links.map((link) => (
                <Link href={link.link} key={link.id}>
                  <p className="text-white font-bold text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300 ">
                    {link.title}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center sm:pl-10 sm:mr-[50%]">
          <Link href="/" className="hover:cursor-pointer">
            <Image src={Logo} alt="Audiophile Logo" />
          </Link>
        </div>

        {/* Link Desktop Navigaton */}
        <div className="flex items-center gap-10 sm:hidden xs:hidden">
          {Links.map((link) => (
            <Link href={link.link} key={link.id}>
              <p className="text-white font-bold text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300 ">
                {link.title}
              </p>
            </Link>
          ))}
        </div>

        {/* Cart */}
        <div
          className="flex items-center cursor-pointer"
          onClick={openCartModal}
        >
          <div className="relative py-2 pr-2">
            {/* Render the total number of different items in the cart */}
            {totalDiffItems > 0 && (
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-[#D87D4A] p-3 text-xs text-white transform translate-x-1/4 -translate-y-2/4">
                  {totalDiffItems}
                </p>
              </div>
            )}

            {/* CART svg Image */}
            <svg
              width="23"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white transition-colors duration-150 hover:fill-[#D87D4A] cursor-pointer"
            >
              <path
                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                // fill="#FFF"
                // fill-rule="nonzero"
              />
            </svg>
          </div>
        </div>

        {/* Render the modal if the isModalOpen is true */}
        {isModalOpen && <CartModal closeModal={closeCartModal} />}
      </nav>
      <hr className="xl:max-w-[1110px] mx-auto opacity-20 lg:w-[91.75%] md:w-[91.75%] sm:w-[91.75%] xs:w-[92%]" />
    </header>
  );
};

export default Navbar;
