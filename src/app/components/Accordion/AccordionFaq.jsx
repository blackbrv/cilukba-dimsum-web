import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionFaq = ({ headText, detailsText }) => {
  return (
    <div className="w-full">
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {headText}
        </AccordionSummary>
        <AccordionDetails>{detailsText} </AccordionDetails>
      </Accordion>
      <hr />
    </div>
  );
};

export default AccordionFaq;
