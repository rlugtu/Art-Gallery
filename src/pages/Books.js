import React, { useEffect, useState } from "react";
import { Flex, Heading, Text, Stack, Link, Image } from "@chakra-ui/react";
import booksJson from "../assets/jsonFiles/books.json";

const Books = () => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    console.log("books", booksJson);
    setBookData(booksJson);
  }, []);
  return (
    <Flex flexDir="column" p="40px" pr="20px" pt="40px">
      <Flex flexDir="column" mb={20}>
        {/* <Heading w="100%" color="white" bg="grey" p={10} borderRadius={5}>
          Featured
        </Heading> */}
        <Flex>
          <Link href="/book/artoftemimagezari">
            <Flex flexDir="column">
              <Flex w="350px">
                <Image
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  src={
                    require(`../assets/bookImages/art_of_temima_gezari.jpg`)
                      .default
                  }
                  alt="mama papa and me"
                />{" "}
              </Flex>
            </Flex>
          </Link>
          <Flex flexDir="column" ml={20}>
            {/* <Heading m={0} fontSize="2rem">FEATURED BOOK</Heading> */}
            <Heading fontWeight="bold" fontStyle="italic" fontSize="2rem" m={0}>
              The Art of Temima Gezari
            </Heading>
            <Text fontSize="1.5rem" mt={0}>
              by Daniel Gezari
            </Text>
            <Text w="450px">
              Catalog of Temima's artwork up to the age of 80, <br></br>{" "}
              containing most of her work presented on this website.{" "}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Stack>
        <Heading color="white" bg="grey" my={0} p={10} mt={20} borderRadius={5}>
          Books Written by Temima Gezari
        </Heading>
        <Flex flexWrap="wrap" maxW="900px">
          {bookData &&
            bookData.booksWritten.map((book, i) => (
              <Flex
                maxW="140px"
                flexDir="column"
                m={14}
                flexWrap="wrap"
                cursor="pointer"
              >
                <Link href={`/book/${book.linkTitle}`}>
                  <Flex h="220px" w="150px">
                    <Image
                      h="100%"
                      w="100%"
                      // objectFit="contain"
                      src={
                        require(`../assets/bookImages/${book.file}.jpg`).default
                      }
                      alt={i}
                    />
                  </Flex>
                  <Text
                    fontWeight="bold"
                    fontSize="1.1rem"
                    color="black"
                    mt={10}
                  >
                    {book.title}
                  </Text>
                </Link>
              </Flex>
            ))}
        </Flex>
      </Stack>
      <Stack>
        <Heading color="white" bg="grey" my={0} p={10} borderRadius={5}>
          Books illustrated by Temima Gezari
        </Heading>
        <Flex flexWrap="wrap" maxW="900px">
          {bookData &&
            bookData.illustrated.map((book, i) => (
              <Link href={`/book/${book.linkTitle}`}>
                <Flex
                  maxW="140px"
                  flexDir="column"
                  m={14}
                  flexWrap="wrap"
                  cursor="pointer"
                >
                  <Flex h="220px" w="150px">
                    <Image
                      h="100%"
                      w="100%"
                      objectFit="contain"
                      src={
                        require(`../assets/bookImages/${book.file}.jpg`).default
                      }
                      alt={i}
                    />
                  </Flex>
                  <Text
                    fontWeight="bold"
                    fontSize="1.1rem"
                    color="black"
                    mt={10}
                  >
                    {book.title}
                  </Text>
                </Flex>
              </Link>
            ))}
        </Flex>
      </Stack>
      <Stack>
        <Heading color="white" bg="grey" my={0} p={10} borderRadius={5}>
          Books about Temima Gezari
        </Heading>
        <Flex flexWrap="wrap" maxW="900px">
          {bookData &&
            bookData.booksBy.map((book, i) => (
              <Link href={`/book/${book.linkTitle}`}>
                <Flex
                  maxW="200px"
                  flexDir="column"
                  m={20}
                  flexWrap="wrap"
                  cursor="pointer"
                >
                  <Flex
                    h="220px"
                    w={book.file === "art_of_temima_gezari" ? "200px" : "160px"}
                  >
                    <Image
                      h="100%"
                      w="100%"
                      // objectFit="contain"
                      src={
                        require(`../assets/bookImages/${book.file}.jpg`).default
                      }
                      alt={i}
                    />
                  </Flex>
                  <Text
                    fontWeight="bold"
                    fontSize="1.1rem"
                    color="black"
                    mt={10}
                    w={book.file === "art_of_temima_gezari" ? "200px" : "160px"}
                  >
                    {book.title}
                  </Text>
                </Flex>
              </Link>
            ))}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Books;
