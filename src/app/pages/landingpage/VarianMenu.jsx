"use client";
import React from "react";
import Image from "next/image";
import pangsit1 from "../../assets/images/pangsit-1.png";
import bakso1 from "../../assets/images/bakso-1.png";
import dimsum1 from "../../assets/images/dimsum-1.png";

const VarianMenu = () => {
  const seperateFont = "font-sans";
  const urlgfood = "https://www.instagram.com/Cilukba.Dimsum.Pangsit.Bakso/";
  function orderClick() {
    window.open(urlgfood, "_blank");
  }

  const menuItems = [
    { src: pangsit1, alt: "Pangsit", name: "Pangsit" },
    { src: bakso1, alt: "Bakso", name: "Bakso" },
    { src: dimsum1, alt: "Dimsum", name: "Dimsum" },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Judul Varian Menu */}
      <div className="text-center text-4xl py-8">
        <h1>VARIAN MENU</h1>
      </div>

      {/* Daftar Varian Menu */}
      <div className="w-full h-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-5"
          >
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full shadow-xl transform scale-100 hover:scale-105 transition-transform duration-300">
              <Image
                src={item.src}
                alt={item.alt}
                className="rounded-full object-cover"
              />
            </div>
            {/* Nama menu */}
            <h1 className={`${seperateFont} text-lg sm:text-xl md:text-2xl`}>
              {item.name}
            </h1>
          </div>
        ))}
      </div>

      {/* Tombol Order */}
      <div className="flex items-center justify-center w-full h-fit mt-12 pb-12">
        <button
          onClick={orderClick}
          className="bg-[#79AD5C] rounded-full w-3/4 sm:w-1/3 lg:w-1/4 h-12 text-white border-4 sm:border-8 border-[#666666] hover:bg-[#53D80C] hover:text-[#446134] transition-all duration-300"
        >
          <p className="text-base sm:text-lg">Order Now!</p>
        </button>
      </div>
    </div>
  );
};

export default VarianMenu;
