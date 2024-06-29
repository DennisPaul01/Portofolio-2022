import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { useToast } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  IconButton,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import logo from "../../assets/logo.svg";
import workerman from "../../assets/workerman.png";

const NavBar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(true);
  const toast = useToast();

  const BoxError = (
    <Box
      color="black"
      bg="white"
      border={["1px solid green"]}
      display={["flex"]}
      alignItems={["center"]}
      justifyContent={["center"]}
      py="10px"
      borderRadius={["7px"]}
    >
      <Box>
        <Image src={workerman} width="30px" alt="Worker man icon"></Image>
      </Box>
      <Text as="p" fontSize={["p"]}>
        Under Construction
      </Text>
    </Box>
  );

  return (
    <Container maxW="1600px" as="nav" className="navbar">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={["1rem", "1rem", "5rem"]}
      >
        <Box>
          <Link to="/">
            <Image
              src={logo}
              alt="Dennis Paul-Logo"
              htmlWidth="62"
              htmlHeight="42"
              w={"100%"}
            />
          </Link>
        </Box>
        <Box>
          <Breadcrumb
            fontWeight="regular"
            fontSize="p"
            fontFamily={"heading"}
            separator={""}
            display={["none", "block"]}
          >
            <BreadcrumbItem>
              <HashLink smooth to="/#work">
                Work
              </HashLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link
                to={`${location.pathname}#articles`}
                onClick={() =>
                  toast({
                    position: "top",
                    duration: 2000,
                    isClosable: true,
                    render: () => BoxError,
                  })
                }
              >
                Articles
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/about">About me</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Box display={["block", "none"]}>
            <IconButton
              aria-label="Open Menu"
              mr={2}
              bg="white"
              display={showMenu ? "block" : "none"}
              icon={<HamburgerIcon />}
              onClick={() => {
                setShowMenu(false);
              }}
            />
            <IconButton
              aria-label="Close Menu"
              mr={2}
              bg="white"
              display={!showMenu ? "block" : "none"}
              onClick={() => {
                setShowMenu(true);
              }}
              icon={<CloseIcon />}
            />
          </Box>
        </Box>
      </Box>
      {!showMenu && (
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          bg="white"
          alignItems="center"
        >
          <Box as="button" mt="20px" display={["block", "none"]}>
            <Text
              alignItems="center"
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              <HashLink smooth to="/#work">
                Work
              </HashLink>
            </Text>
          </Box>
          <Box as="button" mt="20px" display={["block", "none"]}>
            <Text
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
              onClick={() =>
                toast({
                  position: "top",
                  duration: 2000,
                  isClosable: true,
                  render: () => BoxError,
                })
              }
            >
              Articles
            </Text>
          </Box>

          <Box as="button"  mt="20px" display={["block", "none"]}>
            <Text
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              <Link to="/about">About me</Link>
            </Text>
          </Box>

          <Box as="button"  mt="20px" display={["block", "none"]}>
            <Text
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              <HashLink smooth to="/#contact">
                Contact
              </HashLink>
            </Text>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default NavBar;
