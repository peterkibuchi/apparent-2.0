import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Banner from "../components/Banner";
import Property from "../components/Property";

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <Box>
      <Head>
        <title>Apparent</title>
        <meta name="Real Estate App" content="Find Your Dream Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more..."
        buttonText="Explore Renting"
        linkUrl="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent?.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>

      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more..."
        buttonText="Explore Buying"
        linkUrl="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110499193%2F56b768304c344e3cb71d9b968dfb0323"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale?.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForRent: propertyForRent?.hits,
      propertiesForSale: propertyForSale?.hits,
    },
  };
}
