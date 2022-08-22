import Image from "next/image";
import Link from "next/link";
import millify from "millify";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { FaBath, FaBed } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import DefaultImage from "../assets/images/house.jpg";

const Property = ({
  property: {
    agency,
    area,
    baths,
    coverPhoto,
    externalID,
    isVerified,
    price,
    rentFrequency,
    rooms,
    title,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      pt="0"
      justify="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          alt="house"
          width={400}
          height={260}
        />
      </Box>
      <Box w="full">
        <Flex pt="2" align="center" justify="space-between">
          <Flex align="center">
            <Box pr="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              AED {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>

          <Box>
            <Avatar src={agency?.logo?.url} size="sm" />
          </Box>
        </Flex>

        <Flex
          w="250px"
          p="1"
          align="center"
          justify="space-between"
          color="blue.400"
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
