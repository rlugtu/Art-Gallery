import React, { useState, useEffect } from "react";
import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import artJson from "../assets/artworks/full.json";

const AllArtGrid = () => {
  const [allArt, setAllArt] = useState([]);

  useEffect(() => {
    let arr = [];
    for (const art in artJson) {
      if (
        art === "sculptures" ||
        art === "drawings" ||
        art === "paintings" ||
        art === "lithographs"
      ) {
        // console.log(art === "temimaLife", art);
        arr.push(...artJson[`${art}`]);
      }
    }
    console.log(arr);
    arr = arr.sort((a, b) => {
      return a.year - b.year;
    });
    console.log(arr, arr.length);
    setAllArt(arr);
  }, []);

  return (
    <Flex flexDir="column" p="20px">
      <Heading mt={0}>
        FULL COLLECTION
        {/* <Text fontWeight="normal" as="span">
          {" "}
          in Chronlogical Order
        </Text> */}
      </Heading>
      <Flex w="100%" flexWrap="wrap" pt={8}>
        {allArt &&
          allArt.map((art, i) => (
            <Link href={`/full/artwork/${art.src}`} cursor="pointer">
              <Flex w="175px" h="175px" m="2px">
                <Image
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  src={
                    require(`../assets/thumbnails/allArt/${art.src}.jpg`)
                      .default
                  }
                />
              </Flex>
            </Link>
          ))}
      </Flex>
    </Flex>
  );
};

export default AllArtGrid;
