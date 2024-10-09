"use client";
import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import InstaLogo from "../../assets/images/ig-logo.png";
import GoFoodLogo from "../../assets/images/gofood-logo.png";
import Link from "next/link";

const Footer = () => {
  const urlgfood =
    "https://gofood.co.id/jakarta/restaurant/cilukba-dimsum-pangsit-dan-bakso-villa-bogor-indah-1-a64f93d7-960b-4b65-a20e-b7dee1283208";
  const url = "https://www.instagram.com/Cilukba.Dimsum.Pangsit.Bakso/";
  return (
    <div
      className="bg-[#2C2C2C] p-8 md:p-20 khyayReg flex flex-col md:flex-row text-white font-bold"
      id="footer"
    >
      {/* Logo */}
      <div className="flex flex-col gap-5 items-center w-full md:w-1/2">
        <Image
          src={logo}
          alt="Cilukba Dimsum Logo"
          className="w-32 h-32 md:w-44 md:h-44"
        />
        <Link href={"/"}>
          <h1 className="hover:text-[#FFE2AB] text-lg md:text-2xl">
            CILUKBA DIMSUM
          </h1>
        </Link>
      </div>
      {/* Column Content */}
      <div className="flex flex-col gap-4 md:gap-8 items-center md:items-start w-full md:w-1/2">
        <h2 className="text-center md:text-left text-lg md:text-xl">
          FOLLOW SOSIAL MEDIA KAMI <br /> & TOKO ONLINE KAMI
        </h2>
        <div className="flex flex-row gap-5 items-center justify-center md:justify-start">
          <Link
            href={url}
            target="_blank"
            className="flex flex-row gap-5 items-center justify-center hover:text-[#FFE2AB]"
          >
            <Image
              src={InstaLogo}
              alt="Instagram Logo"
              className="w-8 h-8 rounded"
            />
            <h1 className="hidden md:block">cilukba.dimsum.pangsit.bakso</h1>
          </Link>
        </div>
        <div className="flex flex-row gap-5 items-center justify-center md:justify-start">
          <Link
            href={urlgfood}
            target="_blank"
            className="flex flex-row gap-5 items-center justify-center hover:text-[#FFE2AB]"
          >
            <Image
              src={GoFoodLogo}
              alt="GoFood Logo"
              className="w-8 h-8 rounded"
            />
            <h1 className="hidden md:block">cilukba dimsum</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
