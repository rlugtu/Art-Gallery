import React from "react";
import {
    Box,
  Flex,
  Button,
  Heading,
  Image, 
  Text,
  Stack,
  Link,
  Input,
} from "@chakra-ui/react";

const StudioWorkshopPress = () => {
  return (
    <Flex flexDirection="column">
      <Stack spacing={20}>
        <Stack>
          <Heading bg="lightgrey" p={12}>
            STUDIO WORKSHOP PRESS PUBLISHES BOOKS BY AND ABOUT TEMIMA GEZARI
          </Heading>
          <Heading>STUDIO WORKSHOP PRESS</Heading>
          <Text>P.O. Box 793 Rocky Point NY, 11778</Text>
          <Text>
            To inquire about book availibility, please contact us at
            <Text as="span" color="blue">
              {" "}
              temimagezari@gmail.com
            </Text>
          </Text>
        </Stack>

        <Stack spacing={20}>
          <Heading bg="lightgrey" p={12} mb={0}>
            MAILING LIST
          </Heading>
          <Text>
            Used copies of books by and about Temima Gezari can often be
            purchased online at book sellers such as AbeBooks, Amazon (books),
            eBay(books), Thrift Books, etc
          </Text>
          <Text>
            Sign up for our mailing list to receive updates on book
            availibility:
          </Text>
          <Flex w="30%" justifyContent="space-between">
            <Input px={10} placeholder="Enter your email address" />
            <Button p={10}>Submit</Button>
          </Flex>
        </Stack>

        <Stack spacing={20}>
          <Heading bg="lightgrey" p={12} mb={0}>
          BOOKS ABOUT TEMIMA GEZARI
          </Heading>
            <Flex w="100%">
                <Box w="70%">
                    <Image src={require('../artwork/Abstraction.jpg').default}w="100%" objectFit="contain" />
                </Box>
                <Stack pl={60}>
                    <Text>
                    The Art of Temima Gezari is a retrospective collection of Temima's artwork up to 1985. It also serves as the catalog of this website.

360 black and white photos and 27 color plates.

146 pages. Hardcover.


                    </Text>
                    <Text>Limited numbers of The Art of Temima Gezari's are availible new from Studio Workshop Press</Text>
                    <Text>
                    A second edition is being planned for publication in Fall 2021, which will also contain additional material that appears on this website, including early art exercises and book illustrations


                    </Text>
                    <Text>
                    Used copies of The Art of Temima Gezari can often be purchased online at book sellers such as AbeBooks, Amazon (books), eBay(books), Thrift Books, etc


                    </Text>
                </Stack>
            </Flex>
        </Stack>
        <Stack>
        <Heading bg="lightgrey" p={12} mb={0}>
        BOOKS BY TEMIMA GEZARI
          </Heading>
          <Stack>
              <Heading>AUTOBIOGRAPHY</Heading>
              <Flex></Flex>
          </Stack>
          <Stack>
              <Heading>ART EDUCATION FOR CHILDREN AND ADULTS
</Heading>
              <Flex></Flex>
          </Stack>
          <Stack>
              <Heading mb={0}>BOOKS ILLUSTRATED BY TEMIMA (REPRINTS PLANNED BUT NOT YET AVAILIBLE)</Heading>
              <Text fontWeight="bold">Used copies of these books can often be purchased online at book sellers such as AbeBooks, Amazon (books), eBay(books), Thrift Books, etc</Text>
              <Flex></Flex>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default StudioWorkshopPress;
