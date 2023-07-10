import React from "react";
import Carousel from "../../Components/Carousel";
import { teamImage } from "../../utils/CarouselImg";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Image,
  Img,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <Box m={10}>
      <Heading mb={10} textAlign={"center"}>Our Team</Heading>
      <Carousel data={teamImage} />

      <Box mt={10}>
        <Heading>Our Values and Culture</Heading>
        <Text>
          People and culture are the most important aspects of our business. We
          are looking for team members just like us, in simple words – good
          people to work with and demonstrate following personality traits:
        </Text>

        <Box mt={10}>
          <Accordion defaultIndex={[2]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[2]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
      <Box mt={10}>
        <Heading>Our Leadership Team</Heading>
        <LeaderShipTeam />
      </Box>

      <Box textAlign={"center"} mt={20} mb={20} justify={"center"}>
        <Heading>Come work with us</Heading>
        <Text mt={2}>
          Raise is now a team of 100+ and hiring more. Join us and Raise The Bar
          for financial products in India. Apply now!
        </Text>
      </Box>
    </Box>
  );
};

export default About;

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
      <Image src={img} h={"200"} alt="qwerty" />

      <StatLabel pt={5} fontSize={"lg"} fontWeight={"bold"} isTruncated>
        {title}
      </StatLabel>
    </Stat>
  );
}

function LeaderShipTeam() {
  return (
    <Box
      maxW="7xl"
      //   mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 18, md: 17 }}
    >
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Ranveer Allahbadia"}
          img={
            "https://www.marketingmind.in/wp-content/uploads/2019/10/4-3-700x700.jpg"
          }
        />
        <StatsCard
          title={"Ritesh Agarwal"}
          img="https://www.marketingmind.in/wp-content/uploads/2019/10/1-10.jpg"
        />
        <StatsCard
          title={"Indrajeet Singh"}
          img="https://www.marketingmind.in/wp-content/uploads/2019/10/facebook_1587804648487_6659735388372842539.jpg"
        />
        <StatsCard
          title={"Deepanjali Dalmia"}
          img={
            "https://www.marketingmind.in/wp-content/uploads/2019/10/C1100-deepanjali-dalmia-1411.jpg"
          }
        />
        <StatsCard
          title="Trishneet Arora"
          img={
            "https://www.marketingmind.in/wp-content/uploads/2019/10/7-1.jpg"
          }
        />
        <StatsCard
          title=" Akshay Ruparelia"
          img={
            "https://www.marketingmind.in/wp-content/uploads/2019/10/10-2.jpg"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
