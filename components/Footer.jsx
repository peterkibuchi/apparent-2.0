import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box
    p="5"
    textAlign="center"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    ©{new Date().getFullYear()} Apparent. All rights reserved.
  </Box>
);

export default Footer;
