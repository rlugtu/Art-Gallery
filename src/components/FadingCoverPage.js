import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";

const CoverPage = ({sculpture, painting, drawing, lithograph}) => {
  return (
    <Flex flexDir="column" gap="20px">
      <Flex className="row" w="100%" h="445px">
        <Flex
          w="100%"
          className="row-button"
          alignItems="center"
          flexDir="column"
          mr="8px"          
          overflow="hidden"

          h="auto"
        >
          <Link href="/sculptures" h="100%" w="100%">
            <Heading mt={20} mb={5} textAlign="center" h="auto">
              SCULPTURE
            </Heading>
            <Flex w="100%" h="auto">
            <Image
                 objectFit="cover"
                  w="100%"
                  h="100%"
                  src={
                    require(`../assets/thumbnails/sculptures/${sculpture}`)
                      .default
                  }
                />
            </Flex>
          </Link>
        </Flex>

        <Flex
          w="100%"
          className="row-button"
          alignItems="center"
          flexDir="column"
          ml="8px"
          overflow="hidden"

        >
          <Link href="/paintings" w="100%" h="100%">
            <Heading mt={20} mb={5} textAlign="center">
              PAINTINGS
            </Heading>
            <Flex w="100%" h="auto">
            <Image
                 objectFit="cover"
                  w="100%"
                  h="100%"
                  src={
                    require(`../assets/thumbnails/paintings/${painting}`)
                      .default
                  }
                />
            </Flex>
          </Link>
        </Flex>
      </Flex>
      <Flex className="row" w="100%" mt="20px" h="445px">
        <Flex
          w="100%"
          h="auto"
          className="row-button"
          alignItems="center"
          flexDir="column"
          mr="8px"
          overflow="hidden"
        >
          <Link href="/sculptures" h="100%" w="100%">
            <Heading mt={20} mb={5} textAlign="center">
              DRAWINGS
            </Heading>
            <Flex w="100%" h="auto">
            <Image
                 objectFit="cover"
                  w="100%"
                  h="100%"
                  src={
                    require(`../assets/thumbnails/drawings/${drawing}`)
                      .default
                  }
                />
            </Flex>
          </Link>
        </Flex>

        <Flex
          w="100%"
          className="row-button"
          alignItems="center"
          flexDir="column"
          ml="8px"
          overflow="hidden"

        >
          <Link href="/paintings" w="100%" h="100%">
            <Heading mt={20} mb={5} textAlign="center">
              LITHOGRAPHS
            </Heading>
            <Flex w="110%" h="auto">
            <Image
                 objectFit="cover"
                  w="100%"
                  h="100%"
                  src={
                    require(`../assets/thumbnails/lithographs/${lithograph}`)
                      .default
                  }
                />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CoverPage;
