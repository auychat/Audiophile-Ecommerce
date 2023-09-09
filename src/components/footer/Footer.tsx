import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/shared/desktop/logo.svg";
import Link from "next/link";
import FacebookIcon from "../../../public/assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "../../../public/assets/shared/desktop/icon-instagram.svg";
import TwitterIcon from "../../../public/assets/shared/desktop/icon-twitter.svg";
import SocialLinks from "./SocialLinks";

const Links = [
  { id: 1, title: "HOME", link: "/" },
  { id: 2, title: "HEADPHONES", link: "/headphones" },
  { id: 3, title: "SPEAKERS", link: "/speakers" },
  { id: 4, title: "EARPHONES", link: "/earphones" },
];

const Footer = () => {
  return (
    <div className="bg-[#101010] h-[365px]">
      <div className="max-w-[1110px] mx-auto">
        {/* NAVIGATION */}
        <div className="flex flex-row justify-between pt-[75px] pb-[36px]">
          <Image src={Logo} alt="Audiophile Logo" />
          <div className="flex items-center gap-10">
            {Links.map((link) => (
              <Link href={link.link} key={link.id}>
                <p className="text-white font-bold text-[13px] leading-[25px] tracking-[2px] hover:text-[#D87D4A] transition-colors duration-300  ">
                  {link.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* FOOTER CONTENT */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col max-w-[540px] gap-[56px]">
            <p className="text-white text-[15px] leading-[25px] font-medium opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
            <p className="text-white text-[15px] leading-[25px] font-bold opacity-50">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          {/* SOCIAL MEDIA ICONS */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
