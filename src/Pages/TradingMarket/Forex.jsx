import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { forexData } from "../../utils/Data";
import TradingTable from "../../Components/Table";
import { cards } from "../../utils/NavbarItems";
import Carousel from "../../Components/Carousel";
import Faq from "../../Components/FQA";
import WhyJetTrade from "../../Components/WhyJetTrade";

const Forex = () => {
  return (
    <Box m={10} border={"0px solid"}>
      <Carousel data={cards} />
      <Heading mt={5} mb={5}>
        Discover FX
      </Heading>

      <TradingTable data={forexData} />
      <WhyJetTrade />
      <Faq />
    </Box>
  );
};

export default Forex;
