import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { NAV_ITEMS } from "../../utils/NavbarItems";
import DesktopSubNav from "./DesktopSubNav";
import { HamburgerIcon } from "@chakra-ui/icons";

function DrawerNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("blue", "blue.200");
  const popoverContentBgColor = useColorModeValue("rgba(235, 235, 245, 0.98)", "rgba(42, 42, 66, 0.98)" );

  
  return (
    <Box>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon w={5} h={5} />
      </Button>
      <Drawer
        size={{ base: "xs", md: "xs" }}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> JetTrade-Fx </DrawerHeader>

          <Grid>
            {NAV_ITEMS.map((navItem) => (
              <Popover trigger={"hover"} placement={"top"}>
                <PopoverTrigger mt={10}>
                  <Box
                    p={2}
                    ml={10}
                    fontSize={"lg"}
                    fontWeight={500}
                    textAlign={"left"}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Box>
                </PopoverTrigger>
                {navItem.children && (
                  <PopoverContent
                    position={"relative"}
                    ml={10}
                    boxShadow={"xl"}
                    bg={popoverContentBgColor}
                    rounded={"xl"}
                    minW={"xs"}
                  >
                    <Stack m={6}>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            ))}
          </Grid>
          <Flex mt={10} justifyContent={"space-evenly"}>
            <Button>Log In</Button>
            <Button> Sign Up</Button>
          </Flex>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default DrawerNav;
