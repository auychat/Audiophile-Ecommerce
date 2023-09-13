'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartIcon from "../../../public/assets/shared/desktop/icon-cart.svg";
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
  const { state, dispatch } = useCart();

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

  return (
    <header className="bg-[#191919] relative z-20">
      <nav className="max-w-[1110px] min-h-[96px] mx-auto flex flex-row justify-between justify-items-center item-center w-full py-4">
        <div className="flex items-center">
          <Link href="/" className="hover:cursor-pointer">
            <Image src={Logo} alt="Audiophile Logo" />
          </Link>
        </div>
        <div className="flex items-center gap-10">
          {Links.map((link) => (
            <Link href={link.link} key={link.id}>
              <p className="text-white font-bold text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300 ">
                {link.title}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex items-center cursor-pointer" onClick={openCartModal}>
          <Image
            src={CartIcon}
            alt="cart"
            // width={23.33}
            // height={20}
            sizes="100vw"
            className="w-[23.33px] h-[20px] rounded-lg"
          />
        </div>

        {/* Render the modal if the isModalOpen is true */}
        {isModalOpen && <CartModal closeModal={closeCartModal} />}
      </nav>
      <hr className="max-w-[1110px] mx-auto opacity-20" />
    </header>
  );
};

export default Navbar;
