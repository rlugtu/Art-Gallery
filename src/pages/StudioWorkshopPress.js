import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Link,
} from "@chakra-ui/react";
import booksJson from "../assets/jsonFiles/studioBooks.json";

const StudioWorkshopPress = () => {
  return (
    <Flex flexDirection="column" p="20px">
      <Stack spacing={20}>
        <Stack>
          <Heading bg="lightgrey" p={12} m={0}>
            STUDIO WORKSHOP PRESS PUBLISHES BOOKS BY AND ABOUT TEMIMA GEZARI
          </Heading>
          <Heading pt={10} fontSize="2em">
            STUDIO WORKSHOP PRESS
          </Heading>
          <Text fontSize="1.5rem">P.O. Box 793 Rocky Point NY, 11778</Text>
          <Text fontSize="1.17em" fontWeight="700">
            To inquire about book availibility, please contact us at
            <Text as="span" color="blue">
              {" "}
              temimagezari@gmail.com
            </Text>
          </Text>
        </Stack>

        <Stack spacing={20} pt={0}>
          {/* <Heading
            bg="lightgrey"
            m={0}
            mb={0}
            py="5px"
            px="10px"
            fontSize="1.5rem"
          >
            MAILING LIST
          </Heading> */}
          <Text fontSize="1.17em" fontWeight="700">
            Used copies of books by and about Temima Gezari can often be
            purchased online at book sellers such as AbeBooks, Amazon (books),
            eBay(books), Thrift Books, etc
          </Text>
          {/* <Text fontSize="1.17em" fontWeight="700" pt={20}>
            Sign up for our mailing list to receive updates on book
            availibility:
          </Text>
          <Flex w="30%" justifyContent="space-between">
            <Input px={10} placeholder="Enter your email address" />
            <Button p={10} border="1px solid black" w="200px" ml="10px">
              Submit
            </Button>
          </Flex> */}
        </Stack>

        <Stack spacing={20} pt={20}>
          <Heading
            bg="lightgrey"
            m={0}
            mb={0}
            py="5px"
            px="10px"
            fontSize="1.5rem"
          >
            The Art of Temima Gezari
          </Heading>
          <Flex w="100%" py={20}>
            <Box w="90%">
              <Image
                border="1px solid black"
                p={16}
                src={
                  require("../assets/studioWorkshopPress/mainBook.png").default
                }
                w="100%"
                objectFit="contain"
              />
            </Box>
            <Stack pl="40px">
              <Text>
                <Text as="span" fontWeight="bold" fontStyle="italic">
                  The Art of Temima Gezari{" "}
                </Text>
                is a retrospective collection of Temima's artwork up to 1985. It
                also serves as the catalog of this website. 360 black and white
                photos and 27 color plates. 146 pages. Hardcover.
              </Text>
              <Text>
                Limited numbers of{" "}
                <Text as="span" fontWeight="bold" fontStyle="italic">
                  The Art of Temima Gezari's{" "}
                </Text>{" "}
                are availible new from Studio Workshop Press
              </Text>
              <Text>
                A second edition is being planned for publication in Fall 2021,
                which will also contain additional material that appears on this
                website, including early art exercises and book illustrations
              </Text>
              <Text>
                Used copies of{" "}
                <Text as="span" fontWeight="bold" fontStyle="italic">
                  The Art of Temima Gezari{" "}
                </Text>{" "}
                can often be purchased online at book sellers such as AbeBooks,
                Amazon (books), eBay(books), Thrift Books, etc
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Stack pt="20px">
          <Heading
            bg="lightgrey"
            m={0}
            mb={0}
            py="5px"
            px="10px"
            fontSize="1.5rem"
          >
            BOOKS BY TEMIMA GEZARI
          </Heading>
          <Stack>
            <Heading>AUTOBIOGRAPHY</Heading>
            <Flex>
              {booksJson &&
                booksJson.autobiography.map((book, i) => (
                  <Flex
                    maxW="140px"
                    flexDir="column"
                    m={14}
                    flexWrap="wrap"
                    cursor="pointer"
                  >
                    <Link href={`/book/${book.linkTitle}`}>
                      <Flex h="230px">
                        <Image
                          h="100%"
                          w="100%"
                          objectFit="contain"
                          src={
                            require(`../assets/bookImages/${book.file}.jpg`)
                              .default
                          }
                          alt={i}
                        />
                      </Flex>
                      <Text fontWeight="normal" fontSize="1.1rem" color="black">
                        {book.title}
                      </Text>
                    </Link>
                  </Flex>
                ))}
            </Flex>
          </Stack>
          <Stack>
            <Heading
              bg="lightgrey"
              m={0}
              mb={0}
              py="5px"
              px="10px"
              fontSize="1.5rem"
            >
              ART EDUCATION FOR CHILDREN AND ADULTS
            </Heading>
            <Flex>
              {booksJson &&
                booksJson.artEducation.map((book, i) => (
                  <Flex
                    maxW="140px"
                    flexDir="column"
                    m={14}
                    flexWrap="wrap"
                    cursor="pointer"
                  >
                    <Link href={`/book/${book.linkTitle}`}>
                      <Flex h="230px">
                        <Image
                          h="100%"
                          w="100%"
                          objectFit="contain"
                          src={
                            require(`../assets/bookImages/${book.file}.jpg`)
                              .default
                          }
                          alt={i}
                        />
                      </Flex>
                      <Text fontWeight="normal" fontSize="1.1rem" color="black">
                        {book.title}
                      </Text>
                    </Link>
                  </Flex>
                ))}
            </Flex>
          </Stack>
          <Stack>
            <Heading
              mb={0}
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              BOOKS ILLUSTRATED BY TEMIMA GEZARI{" "}
              <Text as="span" pr={40} color="#4f4f4f" fontSize="1.2rem">
                (REPRINTS PLANNED BUT NOT YET AVAILIBLE)
              </Text>
            </Heading>
            <Text fontWeight="bold" fontSize="1.17em">
              Used copies of these books can often be purchased online at book
              sellers such as AbeBooks, Amazon (books), eBay(books), Thrift
              Books, etc
            </Text>
            <Flex>
              {booksJson &&
                booksJson.illustrated.map((book, i) => (
                  <Flex
                    maxW="140px"
                    flexDir="column"
                    m={14}
                    flexWrap="wrap"
                    cursor="pointer"
                  >
                    <Link href={`/book/${book.linkTitle}`}>
                      <Flex h="230px">
                        <Image
                          h="100%"
                          w="100%"
                          objectFit="contain"
                          src={
                            require(`../assets/bookImages/${book.file}.jpg`)
                              .default
                          }
                          alt={i}
                        />
                      </Flex>
                      <Text fontWeight="normal" fontSize="1.1rem" color="black">
                        {book.title}
                      </Text>
                    </Link>
                  </Flex>
                ))}
            </Flex>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default StudioWorkshopPress;
