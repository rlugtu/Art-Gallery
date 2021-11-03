import Navbar from "./Navbar";
import Header from "./Header";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <Flex flexDirection="column" className="site-content-with-header">
        <Header></Header>
        <main>{children}</main>
      </Flex>
    </div>
  );
};

export default Layout;
