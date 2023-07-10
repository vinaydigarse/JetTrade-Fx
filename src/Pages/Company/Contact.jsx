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
import {
  FiHeadphones,
  FiMessageSquare,
  FiPhoneCall,
  FiVoicemail,
} from "react-icons/fi";
import { BiMailSend, BiSolidContact, BiSolidPhoneCall } from "react-icons/bi";
import React from "react";
import { color } from "framer-motion";

const Contact = () => {
  return (
    <Box m={10}>
      <Container1 />
      <Heading mb={16} fontSize={"40px"}>
        Contact Online
      </Heading>
      <Online />
      <Heading mb={16} fontSize={"40px"}>
        Call Us for Assistance
      </Heading>
      <Assistance />
    </Box>
  );
};

export default Contact;

function Container1() {
  return (
    <Container maxW={"5xl"} py={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex direction={"column"} m={"auto"} spacing={4}>
          <Heading mb={2} fontSize={"50px"}>
            Contact Us
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Get in touch with our 24/5 customer services team. We are always
            glad to help!
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
              "https://fxtrading.com/wp-content/themes/fxtrading/img/content-images/first-screen/contacts-image.png"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}

function Online() {
  return (
    <SimpleGrid
      shadow={"xl"}
      p={5}
      mb={16}
      mt={16}
      borderRadius={20}
      columns={{ base: 2, md: 2, lg: 4 }}
      spacing="40px"
    >
      <Box
        bg=""
        border={"1px solid gray"}
        borderRadius={20}
        p={"10px 20px 20px 30px"}
        _hover={{
          bgColor: "blue",
          color: "white",
        }}
      >
        <FiHeadphones
          fontSize={"50px"}

          // color="blue"
        />
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Live Chat
        </Text>
        <Text>Click here to chat with us</Text>
      </Box>
      <Box
        bg=""
        border={"1px solid gray"}
        borderRadius={20}
        p={"10px 20px 20px 30px"}
        _hover={{
          bgColor: "blue",
          color: "white",
        }}
      >
        <BiMailSend fontSize={"50px"} />
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Email Us Directly
        </Text>
        <Text>service@jettradefx.com</Text>
      </Box>
      <Box
        bg=""
        border={"1px solid gray"}
        borderRadius={20}
        p={"10px 20px 20px 30px"}
        _hover={{
          bgColor: "blue",
          color: "white",
        }}
      >
        <FiMessageSquare fontSize={"50px"} />
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Sand a Support Ticket
        </Text>
        <Text>Click here to semd us a message</Text>
      </Box>
      <Box
        bg=""
        border={"1px solid gray"}
        borderRadius={20}
        p={"10px 20px 20px 30px"}
        _hover={{
          bgColor: "blue",
          color: "white",
        }}
      >
        <BiSolidContact fontSize={"50px"} />
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Contact Partners Success Team
        </Text>
        <Text>partners@jettradefx.com</Text>
      </Box>
    </SimpleGrid>
  );
}

function Assistance() {
  return (
    <Box border={"0px solid"} p={8} mt={16} borderRadius={14} shadow={"xl"}>
      <SimpleGrid
        border={"1px solid black"}
        borderRadius={14}
        p={5}
        spacing={2}
        columns={[1, null, 4]}
      >
        <Box height="30px">
          <FiPhoneCall color="blue" fontSize={"30px"} />
        </Box>
        <Box height="30px">+12345678909876</Box>
        <Box height="30px">+123456789</Box>
        <Box height="30px">23456789</Box>
      </SimpleGrid>
    </Box>
  );
}
