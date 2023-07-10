import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import PaymentTable from "../../Components/PaymentTable";
import { paymentMethodData } from "../../utils/Data";
const Deposite = () => {
  return (
    <Box textAlign={"center"} m={10}>
      <Container maxW={"5xl"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex textAlign={"left"} direction={"column"} m={"auto"} spacing={4}>
            <Heading mb={2} fontSize={"50px"}>
              Deposits & Withdrawals
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              We maximise ease and convenience for our clients by offering a
              broad range of funding methods via our secure client portal.
              Deposit and withdraw your funds with FXT whenever and wherever you
              find it convenient or necessary
            </Text>

            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            ></Stack>
          </Flex>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/first-screen/deposits-image.png"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>

      <Heading fontWeight={"normal"} fontSize={"2xl"} m={10}>
        We accept all the most popular payment methods
      </Heading>

      <Tabs variant="enclosed">
        <TabList pl={20} pr={20}>
          <Tab w={"50%"} _selected={{ backgroundColor: "green.200" }}>
            Deposits
          </Tab>
          <Tab w={"50%"} _selected={{ backgroundColor: "green.400" }}>
            Withdrawals
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PaymentTable data={paymentMethodData} />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <SimpleGrid
        m={6}
        columns={[1, null, 2]}
        border={"0px solid"}
        borderRadius={"2xl"}
        shadow={"xl"}
        spacing="40px"
      >
        <Box h={"400px"}>
          <Image
            h={"100%"}
            borderRadius={"2xl"}
            src="https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/media-cards/stay-focused.jpg"
            alt=""
          />
        </Box>

        <Flex direction={"column"} m={10} textAlign={"left"}>
          <Text fontSize={30} mb={4}>
            “Stay Focused, Stay Driven” — JetTrade-Fx
          </Text>
          <Text mb={4}>
            Do you know the cost of trading is one of the key factors to trading
            success?
          </Text>
          <Button colorScheme={"orange"} variant={"solid"}>
            Open An Account
          </Button>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Deposite;
