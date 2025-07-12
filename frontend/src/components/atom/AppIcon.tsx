import { Box, Image } from "@chakra-ui/react";
import icon from "../../assets/icon.svg";

const AppIcon = () => (
  <Box mb={8} display="flex" justifyContent="center">
    <Image src={icon} alt="App Icon" boxSize="80px" borderRadius="lg" />
  </Box>
);

export default AppIcon;