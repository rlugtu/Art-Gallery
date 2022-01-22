import { Flex, Text, VStack, Button } from "@chakra-ui/react";
import "../styles/Navbar.scss";
import { useHistory } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <Flex flexDirection="column" className="nav">
      <Button
        pos="absolute"
        top="200px"
        right="20px"
        onClick={() => history.goBack()}
        mg="white"
        mt={20}
        ml={20}
        w="100px"
        cursor="pointer"
        border="none"
        fontSize="1rem"
        py={8}
        // bg="#f60d09"
        color="#5a5a5a"
        fontWeight="700"
        border="4px outset #e2e2e2"
      >
        GO BACK
      </Button>
      <Flex
        flexDirection="column"
        className="nav-header"
        h={204}
        p={22}
        bg="#b7ac44"
      >
        <Text
          color="white"
          m={0}
          lineHeight="3.4rem"
          fontWeight="700"
          fontSize="3.4rem"
          textAlign="center"
        >
          TEMIMA
        </Text>
        <Text
          color="white"
          m={0}
          lineHeight="3.4rem"
          fontWeight="700"
          fontSize="3.4rem"
          textAlign="center"
        >
          GEZARI
        </Text>
        <Text
          m={0}
          my="5px"
          fontWeight="bold"
          lineHeight="1.3rem"
          fontSize="1.3rem"
          textAlign="center"
        >
          20th CENTURY AMERICAN
        </Text>
        <Text
          m={0}
          fontWeight="bold"
          lineHeight="1.3rem"
          fontSize="1.3rem"
          textAlign="center"
        >
          ARTIST AND EDUCATOR
        </Text>
      </Flex>
      <Flex flexDirection="column" p={20}>
        <NavLink
          className="link-header"
          exact
          to="/"
          activeStyle={{
            fontWeight: "bolder",
            fontSize: "1.4rem",
          }}
        >
          HOME
        </NavLink>
        <Text
          color="#5a5a5a"
          class="link-header"
          m={0}
          mt="10px"
          mb={0}
          fontSize="1.2rem"
        >
          ARTWORK
        </Text>
        <VStack
          display="flex"
          alignItems="flex-start"
          ml={16}
          mt={0}
          spacing={0}
        >
          <NavLink
            className="link"
            exact
            to="/sculptures"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            SCULPTURE
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/drawings"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            DRAWINGS
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/paintings"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            PAINTINGS
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/lithographs"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            LITHOGRAPHS
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/murals"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            MURALS
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/highschool-exercises"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            HIGH SCHOOL EXERCISES
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/illustrations"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            BOOK ILLUSTRATIONS
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/art/all"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            FULL COLLECTION
            <Text mt={0} ml={18} mb={0}>
              -CHRONOLOGICAL ORDER
            </Text>
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/catalog"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            CATALOG OF WORKS
          </NavLink>
        </VStack>
        <Text m={0} mt={20}>
          <NavLink
            className="link-header"
            exact
            to="/temima-life"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            TEMIMA'S LIFE
          </NavLink>
        </Text>
        <VStack
          display="flex"
          alignItems="flex-start"
          m={0}
          ml={16}
          spacing={0}
        >
          <NavLink
            className="link"
            exact
            to="/artist"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            ARTIST
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/art-educator"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            ART EDUCATOR
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/professional-relationships"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            PROFESSIONAL RELATIONSHIPS
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/memories"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            MEMORIES OF TEMIMA GEZARI
          </NavLink>
          <NavLink
            className="link"
            exact
            to="/autobiography"
            activeStyle={{
              fontWeight: "bold",
            }}
          >
            AUTOBIOGRAPHY
          </NavLink>
        </VStack>
        <Text m={0} mt={20}>
          <NavLink className="link-header" exact to="/philosophy">
            PHILOSOPHY
          </NavLink>
        </Text>
        <VStack display="flex" alignItems="flex-start" ml={16} spacing={0}>
          <NavLink className="link" exact to="/art-education">
            ART EDUCATION
          </NavLink>
          <NavLink className="link" exact to="/artist-creativity">
            ART AND CREATIVITY
          </NavLink>
          <NavLink className="link" exact to="/footprints-preview">
            FOOTPRINTS BOOK PREVIEW
          </NavLink>
        </VStack>
        <VStack display="flex" alignItems="flex-start" spacing={10}>
          <Text m={0} mt={20}>
            <NavLink className="link-header" exact to="/books">
              BOOKS
            </NavLink>
          </Text>
          <VStack
            display="flex"
            alignItems="flex-start"
            pl={16}
            mt="0px !important"
            pt={0}
            spacing={0}
          >
            <NavLink className="link" exact to="/books">
              BOOKS BY TEMIMA GEZARI
            </NavLink>
            <NavLink className="link" exact to="/books">
              BOOKS ABOUT TEMIMA GEZARI
            </NavLink>
          </VStack>
        </VStack>

        <VStack
          display="flex"
          alignItems="flex-start"
          pt={0}
          spacing="20px"
          mt="20px"
        >
          <NavLink className="link-header" exact to="/video-media">
            VIDEO AND MEDIA
          </NavLink>
          <NavLink className="link-header" exact to="/archive-links">
            ARCHIVES AND LINKS
          </NavLink>
        </VStack>

        <Text className="link-header" mb={2}>
          PHOTO GALLERY
        </Text>
        <VStack display="flex" alignItems="flex-start" ml={16} spacing={0}>
          <NavLink className="link" exact to="/rockypoint-studio">
            ROCKY POINT STUDIO
          </NavLink>
          <NavLink className="link" exact to="/family-life">
            FAMILY LIFE
          </NavLink>
          <NavLink className="link" exact to="/temima">
            TEMIMA
          </NavLink>
        </VStack>

        <Text mt={20}>
          <NavLink className="link-header" exact to="/studio-workshop-press">
            STUDIO WORKSHOP PRESS
          </NavLink>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
