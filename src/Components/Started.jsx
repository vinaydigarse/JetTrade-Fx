import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function Started() {
  const items = [
    {
      img: "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/steps/trade-step-1.png",
      text: "Register",
    },
    {
      img: "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/steps/trade-step-2.png",
      text: "Verify",
    },
    {
      img: "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/steps/trade-step-3.png",
      text: "Fund",
    },
    {
      img: "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/steps/trade-step-4.png",
      text: "Trade",
    },
  ];

  return (
    <Box m={0}>
      <Heading mb={10} mt={10} fontSize={{base:"2xl", md:"3xl"}} textAlign={{ base: "center", md: "center" }}>
        How to Get Started
      </Heading>
      <SimpleGrid columns={[2, null, 4]} spacing={4}>
        {items.map((item, index) => (
          <GridItem
            color={"white"}
            height="200px"
            borderRadius={20}
            border={"1px solid black"}
            display="flex"
            bgColor={"black"}
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end"
            position="relative"
            backgroundImage={`url('${item.img}')`}
          >
            <Box
              alignItems={"center"}
              width="200px"
              height="200px"
              borderRadius={20}
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              marginBottom="10px"
            >
              <Flex
                alignItems={"center"}
                textAlign="center"
                as="h3"
                size="lg"
                position="absolute"
                bottom={3}
                left={3}
                gap={2}
              >
                <Heading
                  color={"black"}
                  borderRadius={"50px"}
                  bgColor={"#fff"}
                  fontSize={""}
                  size={"xl"}
                  w={"24px"}
                  h={"24px"}
                >
                  {index + 1}
                </Heading>
                <Text
                  fontWeight={"semibold"}
                  fontSize={{ base: "md", md: "xl" }}
                >
                  {item.text}
                </Text>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}
