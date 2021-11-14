import React,{useState, useEffect} from 'react';
import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react";
import artJson from "../assets/artworks/full.json";


const AllArtGrid = () => {
    const[allArt, setAllArt] = useState([])

    useEffect(() => {
        let arr = []
        for(const art in artJson) {
            console.log(art)
            arr.push(...artJson[`${art}`])
        }
        console.log(arr)
        arr = arr.sort((a, b) => {
            return a.year - b.year;
        })
        console.log(arr)
        setAllArt(arr)
    },[])
    
    return (
        <Flex flexDir="column">
             <Heading>FULL COLLECTION
        <Text fontWeight="normal" as="span">
          {" "}
          in Chronlogical Order
        </Text>
      </Heading>
      <Flex w="100%" flexWrap="wrap">
        {allArt &&
          allArt.map((art, i) => (
            <Link href={`/artwork/${art}/${art.src}`} cursor="pointer">
              <Flex w="181px" h="181px" m="3px">
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