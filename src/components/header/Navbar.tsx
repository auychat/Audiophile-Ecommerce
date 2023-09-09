import Image from "next/image";
import Link from "next/link";
import React from "react";
import CartIcon from "../../../public/assets/shared/desktop/icon-cart.svg";
import Logo from "../../../public/assets/shared/desktop/logo.svg";

const Links = [
  { id: 1, title: "HOME", link: "/" },
  { id: 2, title: "HEADPHONES", link: "/headphones" },
  { id: 3, title: "SPEAKERS", link: "/speakers" },
  { id: 4, title: "EARPHONES", link: "/earphones" },
];

const Navbar = () => {
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
        <div className="flex items-center">
          <Image src={CartIcon} alt="cart" width={23.33} height={20} />
        </div>
      </nav>
      <hr className="max-w-[1110px] mx-auto opacity-20" />
    </header>
  );
};

export default Navbar;
