import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Select } from "@chakra-ui/react";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values?.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathName: path, query });
  };

  return (
    <Flex flexWrap="wrap" justify="center" p="4" bg="gray.100">
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            p="2"
            w="fit-content"
            placeholder={filter.placeholder}
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
