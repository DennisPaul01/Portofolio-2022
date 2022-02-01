import React, { useState, useEffect } from "react";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={["1rem", "1rem", "5rem"]}
      >
        <Box>
          <Image src={logo} alt="Dennis Paul" w={"100%"} />
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
              <BreadcrumbLink href="#">Work</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Articles</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">About me</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Contact</BreadcrumbLink>
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
          <Box as="button" display="flex" mt="20px" display={["block", "none"]}>
            <Text
              alignItems="center"
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              Work
            </Text>
          </Box>
          <Box as="button" display="flex" mt="20px" display={["block", "none"]}>
            <Text
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              Articles
            </Text>
          </Box>

          <Box as="button" display="flex" mt="20px" display={["block", "none"]}>
            <Text
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              About me
            </Text>
          </Box>

          <Box as="button" display="flex" mt="20px" display={["block", "none"]}>
            <Text
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              Contact
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default NavBar;
