import {
  Box,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  Stat,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

function StatsCard(props) {
  const isDarkMode = useColorModeValue(false, true);
  const { title, stat, img } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      textAlign={"start"}
      shadow={"xl"}
      border={isDarkMode ? "2px solid" : "none"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex
        pr={10}
        _hover={{ paddingRight: "5px" }}
        color={"blue"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text color={"blue"} fontWeight={"medium"} fontSize={"xl"} isTruncated>
          {title}
        </Text>
        <BsArrowRight fontSize={30} />
      </Flex>

      <Text fontSize={"sm"} fontWeight={""}>
        {stat}
      </Text>
      <Flex justifyContent={"end"}>
        <Image boxSize="100px" src={img} alt="wert" />
      </Flex>
    </Stat>
  );
}

export default function Community() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        <Text>Learn and earn.</Text>
        <Text>We've got it covered.</Text>
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Daily Trading Ideas"}
          stat={"Exclusive expert's advice for our traders"}
          img={
            "https://octacdn.net/assets/img/main-page-india-redesign/learn-icon1@2x.png?bdc542fe4ec0866130bbd2c01a6ee2b9bf23eb7f"
          }
        />
        <StatsCard
          title={"Weekly Education Webinars"}
          stat={"Available in Hindi and English"}
          img={
            "https://octacdn.net/assets/img/main-page-india-redesign/learn-icon1@2x.png?bdc542fe4ec0866130bbd2c01a6ee2b9bf23eb7f"
          }
        />
        <StatsCard
          title={"Risk Management Tool"}
          stat={"Economic celendar Stop Loss and Others"}
          img={
            "https://octacdn.net/assets/img/main-page-india-redesign/learn-icon1@2x.png?bdc542fe4ec0866130bbd2c01a6ee2b9bf23eb7f"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
