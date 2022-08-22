import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { BsFilter } from "react-icons/bs";
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";
import NoResult from "../assets/images/noresult.svg";

const Search = ({ properties }) => {
  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState(false);

  return (
    <Box>
      <Flex
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justify="center"
        align="center"
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
      >
        <Text>Search for Properties by Filters</Text>
        <Icon w="7" pl="2" as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text p="4" fontSize="2xl" fontWeight="bold">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties?.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
      {properties?.length === 0 && (
        <Flex justify="center" align="center" direction="column" mt="5" mb="5">
          <Image src={NoResult} alt="No Result" />
          <Text fontSize="2xl" mt="3">
            No Results Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "monthly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
