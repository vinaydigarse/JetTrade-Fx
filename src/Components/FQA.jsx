import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Faq() {
  const faqShadow = useColorModeValue("lg", "2xl");
  return (
    <Box m={12}>
      <Heading textAlign={{ base: "left", md: "center" }} mt={10} mb={10}>
        FAQ
      </Heading>
      <Accordion
        m={"auto"}
        border={"px solid"}
        defaultIndex={[0]}
        allowMultiple
      >
        <AccordionItem
          borderRadius={"lg"}
          shadow={faqShadow}
          p={4}
          //   mb={4}
          m="10px auto 10px auto"
        >
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={"px solid #323248"}
          borderRadius={"lg"}
          shadow={faqShadow}
          p={4}
          mb={4}
          m="10px auto 10px auto"
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel border={"0px solid"} pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={"px solid #323248"}
          borderRadius={"lg"}
          shadow={faqShadow}
          p={4}
          mb={4}
          m="10px auto 10px auto"
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 3 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={"px solid #323248"}
          borderRadius={"lg"}
          shadow={faqShadow}
          p={4}
          mb={4}
          m="10px auto 10px auto"
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 4 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel border={"0px solid"} pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
