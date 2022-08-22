import { useContext } from "react";
import Image from "next/image";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex justify="center" align="center" mr="1">
      <Icon
        as={FaArrowAltCircleLeft}
        fontSize="2xl"
        cursor="pointer"
        onClick={() => scrollPrev()}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex justify="center" align="center" mr="1">
      <Icon
        as={FaArrowAltCircleRight}
        fontSize="2xl"
        cursor="pointer"
        onClick={() => scrollNext()}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: "hidden" }}
  >
    {data.map((item) => (
      <Box key={item.id} itemID={item.id} w="910px" p="1" overflow="hidden">
        <Image
          src={item.url}
          alt="property"
          placeholder="blur"
          blurDataURL={item.url}
          width={1000}
          height={500}
          sizes="(max-width: 500px) 100px, (max-width: 1024px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollbar;
