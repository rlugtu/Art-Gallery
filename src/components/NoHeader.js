import Navbar from "./Navbar";
import { Flex } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";

const NoHeader = ({ children, ...rest }) => {
  return (
    <>
      <div className="content">
        <Navbar />

        <Flex flexDirection="column" className="site-content-with-header">
          <main>{children}</main>
        </Flex>
      </div>
    </>
  );
};

export default NoHeader;
