import React, { useEffect, useState } from "react";
import booksJson from "../assets/jsonFiles/books.json";
import { Flex, Heading, Text, Link, Image } from "@chakra-ui/react";

import { useParams, useHistory } from "react-router-dom";

const BookSingle = () => {
  const [bookData, setBookData] = useState(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("id", id);

    for (let key in booksJson) {
      for (let i = 0; i < booksJson[key].length; i++) {
        if (booksJson[key][i].linkTitle === id) {
          setBookData(booksJson[key][i]);
        }
      }
    }
  }, [id]);
  return (
    <>
      {bookData && (
        <Flex p={30}>
          <Flex flexDirection="column" w="100%" maxW="350px">
            <Flex>
              <Image
                h="100%"
                w="100%"
                objectFit="contain"
                src={
                  require(`../assets/bookImages/${bookData.file}.jpg`).default
                }
                alt={bookData.title}
              />
            </Flex>
          </Flex>
          <Flex flexDirection="column" pl="20px">
            <Heading m={0} fontSize="2.5rem" fontStyle="italic">
              {bookData.title}
            </Heading>
            <Text m={0} fontSize="1.5rem" mb="24px">
              by: {bookData.author}
            </Text>
            <Text mb="40px" mt="16px">
              {bookData.description && bookData.description}
            </Text>
            <Text>
              This book may be available directly from Studio Workshop Press
            </Text>
            <Link href="/studio-workshop-press">
              <Flex
                _hover={{
                  border: "2px solid black",
                  fontWeight: "500",
                }}
                cursor="pointer"
                w="150px"
                backgroundColor="#d8d8d8"
                p="10px"
              >
                <Text p={0} m={0} color="black">
                  Purchase from Studio Workshop Press
                </Text>
              </Flex>
            </Link>
            <Flex
              cursor="pointer"
              w="150px"
              _hover={{
                border: "2px solid black",
              }}
              backgroundColor="#d8d8d8"
              p="10px"
              mt="20px"
              textAlign="center"
              onClick={() => history.goBack()}
            >
              <Text p={0} m={0} textAlign="center" w="100%">
                Go Back
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default BookSingle;
