import Navbar from "./Navbar";
import Header from "./Header";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

const Layout = ({ children }) => {
  const [showHeader] = useState(true);

  return (
    <div className="content">
      <Navbar />
      <Flex flexDirection="column" className="site-content-with-header">
        {showHeader && <Header></Header>}
        <main>{children}</main>
      </Flex>
    </div>
  );
};

export default Layout;
