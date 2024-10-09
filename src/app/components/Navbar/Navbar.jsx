"use client";
import React, { useRef } from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({}) => {
  const navItems = [
    { id: 1, label: "HOME", href: "/" },
    { id: 2, label: "MENU", section: "varian-menu" },
    { id: 3, label: "OUTLET", section: "outlet" },
    { id: 4, label: "CONTACT US", section: "footer" }, // biarkan untuk sementara
  ];

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-full text-white flex flex-row items-center justify-between pt-2 pb-2 pl-10 pr-10">
      <div className="w-16 h-16">
        <Link href={"/"}>
          <Image src={logo} />
        </Link>
      </div>
      <div>
        <ul className="flex col-span-1 gap-5 text-xl text-black">
          {navItems.map((items) => (
            <li key={items.id}>
              {items.section ? (
                <button onClick={() => handleScroll(items.section)}>
                  {items.label}
                </button>
              ) : (
                <Link href={items.href}>{items.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
