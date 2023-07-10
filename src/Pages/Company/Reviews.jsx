import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Reviews = () => {
  return (
    <Box m={10}>
      <Container maxW={"5xl"} py={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex direction={"column"} m={"auto"} spacing={4}>
            <Heading mb={2} fontSize={"50px"}>
              Reviews
            </Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              Reviews from real users attest to FXT’s proven track-record of
              providing outstanding brokerage services at affordable prices.
              Integrity and trust lie at the core of everything we do.
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
                "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/first-screen/reviews-image.png"
              }
              objectFit={"cover"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Reviews;
