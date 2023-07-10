import React from "react";
import { spotMetalsData } from "../../utils/Data";
import { Box, Heading } from "@chakra-ui/react";
import Carousel from "../../Components/Carousel";
import TradingTable from "../../Components/Table";
import { cards } from "../../utils/NavbarItems";
import Faq from "../../Components/FQA";
import WhyJetTrade from "../../Components/WhyJetTrade";

const Spot = () => {
  return (
    <Box m={10} border={"0px solid"}>
      <Carousel data={cards} />
      <Heading mt={5} mb={5}>
        Discover Spot Metals
      </Heading>

      <TradingTable data={spotMetalsData} />
      <WhyJetTrade />
      <Faq />
    </Box>
  );
};

export default Spot;
