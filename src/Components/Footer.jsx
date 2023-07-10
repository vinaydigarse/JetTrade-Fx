import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { BiLogoTelegram } from "react-icons/bi";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"/companies-about"}>About Us</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/companies-careers"}>Careers</Link>
            <Link href={"/companies-Contact-us"}>Contact Us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"/help-center"}>Help Center</Link>
            <Link href={"/safty-center"}>Safety Center</Link>
            <Link href={"/community"}>Community Guidelines</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"/cookies-policy"}>Cookies Policy</Link>
            <Link href={"/private-policy"}>Privacy Policy</Link>
            <Link href={"/term-of-service"}>Terms of Service</Link>
            <Link href={"/law-enforcement"}>Law Enforcement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Text fontWeight={"extrabold"}>JetTrade-Fx</Text>
            <Flex gap={5} alignItems={"center"}>
              <HiLocationMarker />
              <Box textAlign={"start"}>
                <Text>New Town</Text>
                <Text fontWeight={"bold"}>Kolkata, India</Text>
              </Box>
            </Flex>
            <Flex gap={5} alignItems={"center"}>
              <HiPhone />
              <Box textAlign={"start"}>
                <Text>+91 9876543210</Text>
              </Box>
            </Flex>
            <Flex gap={5} alignItems={"center"}>
              <HiMail />
              <Box textAlign={"start"}>
                <Text> support@jettrade.com</Text>
              </Box>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ base: "flex-start", md: "center" }}
        >
          <Text>© 2023 Made with ❣️ by Vinay Digarse </Text>
          <Stack direction={"row"} fontSize={30} spacing={6}>
            <AiFillTwitterCircle cursor={"pointer"} color={"1DA1F2"} />
            <Link href="https://www.linkedin.com/in/vinay-digarse-a983051a0/">
              <AiFillLinkedin cursor={"pointer"} color="0A66C2" />
            </Link>
            <AiFillFacebook cursor={"pointer"} color="5890FF" />
            <Link href="https://www.instagram.com/_vinaydigarse_">
              <AiFillInstagram cursor={"pointer"} color="#E4405F" />
            </Link>
            <AiFillYoutube cursor={"pointer"} color="#FF0000" />
            <BiLogoTelegram cursor={"pointer"} color="#27A7E7" />
          </Stack>
        </Container>
      </Box>
      <Box
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      ></Box>
    </Box>
  );
}
