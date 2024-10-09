import React from "react";
import Image from "next/image";
import banner1 from "../../assets/images/banner-1.png";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-black h-full">
        <Image src={banner1} alt="Banner 1" />
      </div>
    </div>
  );
};

export default Header;
