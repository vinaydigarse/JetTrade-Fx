import { useColorMode, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      position="fixed"
      bottom="20px"
      right="20px"
      shadow={"2xl"}
      borderRadius="full"
      variant="outline"
      size="lg"
      colorScheme="blue"
    />
  );
};

export default ThemeToggle;
