import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Carousel from "../../Components/Carousel";
import { cards } from "../../utils/NavbarItems";
import TradingTable from "../../Components/Table";
import { cryptoData } from "../../utils/Data";
import Faq from "../../Components/FQA";
import WhyJetTrade from "../../Components/WhyJetTrade";
import { fetchCoinData } from "../../utils/Sample";

const Crypto = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoinData();
        setCoinData(data);
      } catch (error) {
        console.error("Error fetching forex data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box m={10} border={"0px solid"}>
      <Carousel data={cards} />
      <Heading mt={5} mb={5}>
        Discover Crypto Trading Options on FXT
      </Heading>

      <TradingTable data={coinData} />
      <WhyJetTrade />
      <Faq />
    </Box>
  );
};

export default Crypto;
