import Image from "next/image";
import Link from "next/link";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkUrl,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justify="center" align="center" m="10">
    <Image src={imageUrl} alt="banner" width={500} height={300} />
    <Box p={5}>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text color="blue.400" fontSize="3xl" fontWeight="bold">
        <span>{title1}</span> {title2}
      </Text>
      <Text color="gray.700" fontSize="lg" fontWeight="medium" pb={4}>
        {desc1} {desc2}
      </Text>

      <Button fontSize="xl">
        <Link href={linkUrl}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default Banner;
