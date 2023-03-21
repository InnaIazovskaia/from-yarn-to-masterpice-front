import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import NavBar from "../NavBar/NavBar";

const Layout = (): JSX.Element => (
  <>
    <Header />
    <NavBar />
    <Flex as="main" justifyContent="center">
      <Outlet />
    </Flex>
    <Footer />
  </>
);

export default Layout;
