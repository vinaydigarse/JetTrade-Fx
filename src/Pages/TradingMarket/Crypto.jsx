import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Carousel from "../../Components/Carousel";
import { cards } from "../../utils/NavbarItems";
import TradingTable from "../../Components/Table";
import { cryptoData } from "../../utils/Data";
import Faq from "../../Components/FQA";
import WhyJetTrade from "../../Components/WhyJetTrade";

const Crypto = () => {
  return (
    <Box m={10} border={"0px solid"}>
      <Carousel data={cards} />
      <Heading mt={5} mb={5}>
        Discover Crypto Trading Options on FXT
      </Heading>

      <TradingTable data={cryptoData} />
      <WhyJetTrade />
      <Faq />
    </Box>
  );
};

export default Crypto;
