import { Box, Flex, Heading, Link, Center, Image, Button } from "@chakra-ui/react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      className="header"
    >
      <Flex>Header</Flex>
      <Flex
        className="header-nav"
        justifySelf="flex-end"
        backgroundColor="black"
        color="white"
        justifyContent="space-evenly"
        py={4}
      >
        <Link textAlign="center" color="white" exact to="/instructions">
          INSTRUCTIONS
        </Link>
        <Link textAlign="center" color="white" exact to="/who-was-temima">
        WHO WAS TEMIMA?
        </Link>
        <Link textAlign="center" color="white" exact to="/books">
          BOOKS
        </Link>
        <Link textAlign="center" color="white" exact to="/foundation">
          FOUNDATION
        </Link>
        <Link textAlign="center" color="white" exact to="/volunteer">
          VOLUNTEER
        </Link>
        <Link textAlign="center" color="white" exact to="/mailing-list">
          MAILING LIST 
        </Link>
        <Link textAlign="center" color="white" exact to="/contact">
          CONTACT
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
