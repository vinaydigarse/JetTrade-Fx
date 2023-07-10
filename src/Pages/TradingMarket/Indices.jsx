import React from "react";
import { indicesData } from "../../utils/Data";
import { Box, Heading } from "@chakra-ui/react";
import Carousel from "../../Components/Carousel";
import { cards } from "../../utils/NavbarItems";
import TradingTable from "../../Components/Table";
import Faq from "../../Components/FQA";
import WhyJetTrade from "../../Components/WhyJetTrade";

const Indices = () => {
  return (
    <Box m={10} border={"0px solid"}>
      <Carousel data={cards} />
      <Heading mt={5} mb={5}>
        Discover Indices
      </Heading>
      <TradingTable data={indicesData} />
      <WhyJetTrade />
      <Faq />
    </Box>
  );
};

export default Indices;
