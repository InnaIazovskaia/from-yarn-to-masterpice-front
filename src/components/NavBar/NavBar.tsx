import { IconButton, useDisclosure } from "@chakra-ui/react";
import { Box, Flex, HStack, Link, Stack } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";
import { CiSearch, CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { IconContext } from "react-icons";

import links from "./links";
import { NavLink } from "react-router-dom";

const NavBar = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconContext.Provider
        value={{
          style: {
            color: "#080a15",
            width: 30,
            height: 30,
          },
        }}
      >
        <Flex
          style={{ margin: 0 }}
          as="nav"
          h={16}
          minW="100%"
          alignItems="center"
          justifyContent="space-between"
          position="sticky"
          top={0}
          px={8}
          boxShadow="0px 7px 10px -9px #2e3151"
        >
          <IconButton
            aria-label="Open Menu"
            variant="iconLink"
            icon={isOpen ? <CloseIcon /> : <RxHamburgerMenu />}
            onClick={isOpen ? onClose : onOpen}
            display={{ md: "none" }}
            textAlign="center"
          />

          <HStack
            spacing={8}
            display={{ base: "none", md: "flex" }}
            alignItems="center"
          >
            {links.map((link) => (
              <Link
                as={NavLink}
                to={`/${link.toLowerCase()}`}
                alignItems="center"
                variant="navLink"
                key={link}
              >
                {link}
              </Link>
            ))}
          </HStack>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <IconButton
              aria-label="Searching"
              variant="iconLink"
              icon={<CiSearch />}
            />
            <IconButton
              as={NavLink}
              to="/account"
              variant="iconLink"
              aria-label="User Accaunt"
              icon={<CiUser />}
            />

            <IconButton
              as={NavLink}
              to="/cart"
              aria-label="User Cart"
              variant="iconLink"
              icon={<CiShoppingCart />}
            />
          </Stack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack spacing={7}>
              {links.map((link) => (
                <Link
                  aria-label="mobile links"
                  as={NavLink}
                  to={`/${link.toLowerCase()}`}
                  variant="navLink"
                  key={link}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
