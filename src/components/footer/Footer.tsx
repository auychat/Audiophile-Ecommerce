import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/shared/desktop/logo.svg";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Links = [
  { id: 1, title: "HOME", link: "/" },
  { id: 2, title: "HEADPHONES", link: "/headphones" },
  { id: 3, title: "SPEAKERS", link: "/speakers" },
  { id: 4, title: "EARPHONES", link: "/earphones" },
];

const Footer = () => {
  return (
    <div className="bg-[#191919] h-[365px] xs:h-full xs:min-h-[654px] sm:min-h-[400px]">
      <div className="max-w-[1110px] mx-auto xs:w-[91.5%] sm:w-[91.75%] md:w-[91.75%] lg:w-[91.75%]">
        <hr className="w-[101px] h-[4px] bg-[#D87D4A] border-none xs:mx-auto" />
        {/* NAVIGATION */}
        <div className="flex flex-row justify-between pt-[75px] pb-[36px] xs:flex-col xs:gap-8 xs:items-center xs:pt-[48px] sm:flex-col sm:gap-8 sm:pt-[60px]">
          <Link href="/" className="hover:cursor-pointer">
            <Image src={Logo} alt="Audiophile Logo" />
          </Link>
          <div className="flex items-center gap-10 xs:flex-col xs:gap-6">
            {Links.map((link) => (
              <Link href={link.link} key={link.id}>
                <p className="text-white font-bold text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300">
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* FOOTER CONTENT */}
        <div className="flex flex-row justify-between xs:flex-col xs:items-center sm:flex-col">
          <div className="flex flex-col max-w-[540px] gap-[56px] xs:gap-12 sm:min-w-full md:min-w-full">
            <p className="text-white text-[15px] leading-[25px] font-medium opacity-50 xs:text-center">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>

            <div className="xs:flex xs:flex-col xs:items-center justify-center sm:flex sm:flex-row sm:justify-between md:flex md:flex-row md:justify-between">
              <p className="text-white text-[15px] leading-[25px] font-bold opacity-50 xs:text-center">
                Copyright 2021. All Rights Reserved
              </p>
              {/* SOCIAL MEDIA ICONS */}
              <div className="xs:block sm:block md:block lg:hidden xl:hidden">
                <SocialLinks />
              </div>
            </div>
          </div>
          <div className="xs:hidden sm:hidden md:hidden lg:block xl:block lg:pt-[70px] xl:pt-[70px]">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
