import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// function StatsCard({ image }) {
//   const isDarkMode = useColorModeValue(false, true);

//   return (

//   );
// }

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
    <Box m={12}>
      <Heading mb={10} textAlign={{base:"left", md:"center"}}>How to Get Started</Heading>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={5}
        columns={{ base: 2, md: 2 }}
      >
        {items.map((item, index) => (
          <GridItem
            color={"white"}
            width="100%"
            height="250px"
            borderRadius={20}
            border={"1px solid black"}
            display="flex"
            bgColor={"black"}
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-end" // Align heading to the bottom
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
                gap={4}
              >
                <Heading
                  color={"black"}
                  borderRadius={"50px"}
                  bgColor={"#fff"}
                  fontSize={"2xl"}
                  size={"2xl"}
                  w={"30px"}
                  h={"30px"}
                >
                  {index + 1}
                </Heading>
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  {item.text}
                </Text>
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
