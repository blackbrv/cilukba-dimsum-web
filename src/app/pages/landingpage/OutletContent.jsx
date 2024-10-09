"use client";
import React from "react";
import Image from "next/image";
import photo1 from "../../assets/images/photo-1.png";
import photo2 from "../../assets/images/photo-2.png";

const OutletContent = () => {
  const urlTB = "https://gofood.link/a/LLYRELC";
  const urlCimah = "https://gofood.link/a/KQgzifd";

  function photoTB() {
    window.open(urlTB, "_blank");
  }

  function photoCimah() {
    window.open(urlCimah, "_blank");
  }
  return (
    <>
      <div className="bg-[#D92332] w-full flex-col flex justify-center items-center pt-8">
        <h1 className="text-white text-4xl mb-10">Outlet Kami</h1>

        <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center text-white font-sans gap-8 lg:gap-16 mb-10">
          {/* Container untuk gambar pertama (photo1) */}
          <div
            className="flex flex-col items-center justify-center gap-4 max-w-xs lg:max-w-md hover:cursor-pointer hover:text-[#FFE2AB]"
            onClick={photoTB}
          >
            <Image
              src={photo1}
              className="w-full h-auto max-h-96 object-contain transform scale-100 hover:scale-105 transition-transform duration-300"
              alt="Photo 1"
            />
            <h1 className="text-center text-lg lg:text-xl">
              Jl.Pangeran Asogiri Tanah Baru, Bogor
            </h1>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 max-w-xs lg:max-w-md hover:cursor-pointer hover:text-[#FFE2AB]"
            onClick={photoCimah}
          >
            <Image
              src={photo2}
              className="w-full h-auto max-h-96 object-contain transform scale-100 hover:scale-105 transition-transform duration-300"
              alt="Photo 2"
            />
            <h1 className="text-center text-lg lg:text-xl">
              Jl. Tumenggung Wiraddireja Cimahpar, Bogor
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutletContent;
