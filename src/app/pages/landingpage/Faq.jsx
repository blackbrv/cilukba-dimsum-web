import React from "react";
import AccordionFaq from "../../components/Accordion/AccordionFaq";

const Faq = () => {
  const subText = "Jambrud Jambrud Jambrud Jambrud Jambrud Jambrud Jambrud ";
  const faqList = [
    { id: 1, headText: "Apa itu cilukba dimsum?", details: subText },
    { id: 2, headText: "Ada menu apa saja?", details: subText },
    { id: 3, headText: "Dimana saja outletnya?", details: subText },
    {
      id: 4,
      headText: "Apakah bisa dipesan untuk sebuah acara?",
      details: subText,
    },
    {
      id: 5,
      headText: "Berapa kisaran harga dari menu-menunya?",
      details: subText,
    },
    { id: 6, headText: "Buka dari jam berapa?", details: subText },
  ];

  return (
    <div className="w-full min-h-screen p-6 lg:p-12 flex flex-col lg:flex-row justify-center items-center bg-gray-100 container">
      {/* Bagian Kiri: Heading F.A.Q */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:mr-16 flex flex-col justify-start items-start">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#2C2C2C]">F.A.Q</h1>
        <p className="text-xl lg:text-2xl text-[#2C2C2C]">
          (Frequently Asked Questions)
        </p>
      </div>

      <div className="w-full lg:w-2/3 space-y-4 khyayReg">
        {faqList.map((item) => (
          <AccordionFaq
            key={item.id}
            headText={item.headText}
            detailsText={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
