import { Box } from "@chakra-ui/react";
import React from "react";
import CardCarousel from "./Card";
// import ProductHeading from "../../molecules/ProductHeading";
import {
  FaBitcoin,
  FaEthereum,
  FaCoins,
  // FaDogecoin,
  FaBtc,
  FaRegMoneyBillAlt,
  FaDollarSign,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { IoMdCard } from "react-icons/io";
import { AiOutlineLink } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
// import { RiStellarLine } from "react-icons/ri";
const cryptoCurrencies = [
  { name: "Bitcoin", symbol: "BTC", icon: <FaBitcoin /> },
  { name: "Ethereum", symbol: "ETH", icon: <FaEthereum /> },
  { name: "Binance Coin", symbol: "BNB", icon: <FaCoins /> },
  { name: "Cardano", symbol: "ADA", icon: <IoMdCard /> },
  { name: "Dogecoin", symbol: "DOGE", },
  { name: "XRP", symbol: "XRP", icon: <FaRegMoneyBillAlt /> },
  { name: "Litecoin", symbol: "LTC", icon: <FaBtc /> },
  { name: "Polkadot", symbol: "DOT", icon: <BsDot /> },
  { name: "Chainlink", symbol: "LINK", icon: <AiOutlineLink /> },
  { name: "Stellar", symbol: "XLM", },
];
const Category = () => {
  return (
    <Box w="93%" m="auto" mt="3rem">
      <Box mb="2rem"></Box>
      <CardCarousel data={cryptoCurrencies} slidesToShow="8" top="25%" />
    </Box>
  );
};

export default Category;
