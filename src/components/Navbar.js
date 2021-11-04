import { Flex, Text, VStack } from "@chakra-ui/react";
import "../styles/Navbar.scss";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex flexDirection="column" className="nav">
      <Flex
        flexDirection="column"
        className="nav-header"
        h={200}
        p={22}
        bg="#b7ac44"
      >
        <Text color="white" m={0} mt={0} fontSize="2.5rem" textAlign="center">
          TEMIMA
        </Text>
        <Text color="white" m={0} mt={0} fontSize="2.5rem" textAlign="center">
          Gezari
        </Text>
        <Text m={0} mt={10} fontSize="1.2rem" textAlign="center">
          20th CENTURY AMERICAN
        </Text>
        <Text m={0} mt={10} fontSize="1.2rem" textAlign="center">
          ARTIST AND EDUCATOR
        </Text>
      </Flex>
      <Flex flexDirection="column" p={20}>
        <NavLink
          className="link"
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          HOME
        </NavLink>
        <Text m={0} mt={12} mb={2}>
          ARTWORK
        </Text>
        <VStack display="flex" alignItems="flex-start" ml={16} spacing={0}>
          <NavLink
            className="link"
            exact
            to="/sculpture"
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
            LITHOGRAPHS
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
            className="link"
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
            MEMORIES OF TEMIMA GEZARI
          </NavLink>
        </VStack>
        <Text m={0} mt={20}>
          <NavLink className="link" exact to="/autobiography">
            AUTOBIOGRAPHY
          </NavLink>
        </Text>
        <Text m={0} mt={20}>
          <NavLink className="link" exact to="/philosophy">
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
        </VStack>
        <VStack display="flex" alignItems="flex-start" mt={20} spacing={10}>
          <NavLink className="link" exact to="/footprints-preview">
            FOOTPRINTS BOOK PREVIEW
          </NavLink>
          <NavLink className="link" exact to="/books">
            BOOKS BY TEMIMA GEZARI
          </NavLink>
          <NavLink className="link" exact to="/video-media">
            VIDEO AND MEDIA
          </NavLink>
          <NavLink className="link" exact to="/archive-links">
            ARCHIVES AND LINKS
          </NavLink>
        </VStack>

        <Text mb={2}>PHOTO GALLERY</Text>
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
          <NavLink className="link" exact to="/studio-workshop-press">
            STUDIO WORKSHOP PRESS
          </NavLink>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
