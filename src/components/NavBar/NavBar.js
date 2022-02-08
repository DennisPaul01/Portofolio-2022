import React, { useState } from "react";
import { Link } from "react-router-dom";
import Scroll from "react-scroll";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import workerman from "../../assets/workerman.png";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Image,
  Text,
  Container,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import logo from "../../assets/logo.svg";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  let Links = Scroll.Link;
  const history = useHistory();
  const redirectHandler = () => {
    history.push("/");
  };
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
        <Image src={workerman} width="30px"></Image>
      </Box>
      <Text fontSize={["p"]}> Under Construction</Text>
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
            <Image src={logo} alt="Dennis Paul" w={"100%"} />
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
              <Links
                onClick={redirectHandler}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                to="work"
                style={{ cursor: "pointer" }}
              >
                Work
              </Links>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link
                to="articles"
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
              <Links
                onClick={redirectHandler}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                to="contact"
                style={{ cursor: "pointer" }}
              >
                Contact
              </Links>
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
              <Links
                onClick={redirectHandler}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                to="work"
                style={{ cursor: "pointer" }}
              >
                Work
              </Links>
            </Text>
          </Box>
          <Box as="button" display="flex" mt="20px" display={["block", "none"]}>
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

          <Box as="button" display="flex" mt="20px" display={["block", "none"]}>
            <Text
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              <Link to="/about">About me</Link>
            </Text>
          </Box>

          <Box as="button" display="flex" mt="20px" display={["block", "none"]}>
            <Text
              color="black"
              fontSize="p"
              fontWeight="400"
              fontFamily={"heading"}
            >
              <Links
                onClick={redirectHandler}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                to="contact"
                style={{ cursor: "pointer" }}
              >
                Contact
              </Links>
            </Text>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default NavBar;
