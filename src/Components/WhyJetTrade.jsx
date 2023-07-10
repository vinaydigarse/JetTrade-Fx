import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
  const isDarkMode = useColorModeValue(false, true);

  const { title, stat, img } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      textAlign={"start"}
      shadow={"md"}
      //   border={ "none" ,"1px solid"}
      border={isDarkMode ? "2px solid" : "none"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <img src={img} alt="qwerty" />

      <StatLabel pt={5} fontSize={"lg"} fontWeight={"bold"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber pt={5} fontSize={"sm"} fontWeight={"normal"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function WhyJetTrade() {
  return (
    <Box
      maxW="7xl"
      //   mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 18, md: 17 }}
    >
      <chakra.h1
        textAlign={{ base: "left", md: "center" }}
        fontSize={"4xl"}
        py={12}
        fontWeight={"bold"}
      >
        Why Do People Choose JetTrade-Fx?
      </chakra.h1>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Multi-Asset Platform"}
          stat={
            "Trade over 10,000 instruments covering stocks, crypto, forex, commodities and more"
          }
          img={
            "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/why-trade/assets.png"
          }
        />
        <StatsCard
          title={"Top Shelf Trading Environment"}
          stat={
            "Enjoy top-shelf trading conditions, with costs that beat 80% of our peers"
          }
          img="https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/why-trade/trading.png"
        />
        <StatsCard
          title={"Veteran Expertise"}
          stat={
            "FXT’s team consists of trading veterans with a deep, first-hand understanding of markets"
          }
          img="https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/why-trade/star.png"
        />
        <StatsCard
          title={"Experience-Driven Innovation"}
          stat={
            "FXT’s product developers aren’t just technical experts – they're traders who’ve been in the trenches themselves"
          }
          img={
            "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/why-trade/grow.png"
          }
        />
        <StatsCard
          title="Advanced Trading Tools"
          stat={
            "Cutting-edge trading tools developed by an in-house team to drive the success of traders at all levels"
          }
          img={
            "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/why-trade/structure.png"
          }
        />
        <StatsCard
          title="Fully Regulated Brokerage"
          stat="We’re licensed and fully compliant across multiple jurisdictions to ensure the highest levels of integrity"
          img={
            "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/why-trade/globe.png"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
