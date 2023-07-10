import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  InputGroup,
  Stack,
  InputRightElement,
  useDisclosure,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LogIn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const linkColor = useColorModeValue("blue", "blue");
  const buttnText = useColorModeValue("white", "white");

  return (
    <Box>
      <Button
        colorScheme="blue"
        variant={"outline"}
        size={{ base: "sm", md: "sm" }}
        onClick={onOpen}
      >
        Log In
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            margin={"auto"}
            fontSize={"3xl"}
            borderBottomWidth="0px"
          >
            Log In
          </DrawerHeader>

          <DrawerBody marginTop={10}>
            <Stack spacing="24px">
              <Box>
                <Input
                  borderRadius={20}
                  borderWidth={2}
                  size={"lg"}
                  ref={firstField}
                  id="username"
                  placeholder="Email Address"
                />
              </Box>

              <Box>
                <InputGroup size="lg">
                  <Input
                    borderRadius={20}
                    borderWidth={2}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Stack>
            <Stack color={linkColor} m={5}>
              <Link>Forget Password?</Link>
            </Stack>
            <Stack mt={10} direction="column" spacing={5} align="center">
              <Button
                size={"lg"}
                borderRadius={20}
                colorScheme="blue"
                variant={"outline"}
                width={"full"}
              >
                Log In
              </Button>
              <Button
                size={"lg"}
                borderRadius={20}
                color={buttnText}
                bgColor={"blue"}
                variant="outline"
                width={"full"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
export default LogIn;
