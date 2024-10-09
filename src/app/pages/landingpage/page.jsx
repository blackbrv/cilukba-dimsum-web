import React from "react";
import Header from "./Header";
import VarianMenu from "./VarianMenu";
import OutletContent from "./OutletContent";
import Faq from "./Faq";

const LandingPage = () => {
  return (
    <>
      <div className="w-full">
        <Header />
        <div id="varian-menu">
          <VarianMenu />
        </div>
        <div id="outlet">
          <OutletContent />
        </div>
        <div className="w-full h-14 bg-[#FFE2AB]"></div>
        <Faq />
      </div>
    </>
  );
};

export default LandingPage;
