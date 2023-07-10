import {
  Box,
  Image,
  Heading,
  SimpleGrid,
  Container,
  Flex,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import React from "react";
import WhyJetTrade from "../../Components/WhyJetTrade";

const Choose = () => {
  return (
    <Box m={10}>
      <SplitWithImage />
      <WhyJetTrade />
      <Heading textAlign={"center"} mt={12} mb={10}>
        As Featured on
      </Heading>

      <SimpleGrid m={5} columns={[5, 5]} spacing="30px">
        <img
          src="https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/featured-on/morningstar.svg"
          alt="ertyu"
        />
        <img
          src="https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/featured-on/asia-one.svg"
          alt=""
        />
        <img
          src="https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/featured-on/finanzen-net.svg"
          alt=""
        />
        <img
          src="https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/featured-on/bloomberg.svg"
          alt=""
        />
        <img
          src="https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/featured-on/dow-jones.svg"
          alt=""
        />
      </SimpleGrid>
    </Box>
  );
};

export default Choose;
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function SplitWithImage() {
  return (
    <Container maxW={"5xl"} py={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading fontSize={"50px"}>Why Choose JetTrade-Fx</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Anyone can begin their journey in the world of trading with
            FXTRADING.com. As a platform, FXT provides world-class execution,
            analytics and tool to traders at all levels, from complete novices
            to professional hedge fund managers
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Business Planning"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Financial Planning"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Market Analysis"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/why-trade/new-img.png"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
