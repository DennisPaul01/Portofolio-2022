import { useState } from "react";

import ReactGA from "react-ga4";
import { Box, Image, Text, Flex, Button, Link } from "@chakra-ui/react";

import artorian1 from "../../../assets/artorian/artorian-1.png";
import artorian2 from "../../../assets/artorian/artorian-2.png";
import artorianColors from "../../../assets/artorian/artorian-colors.png";
import artorianLogo from "../../../assets/artorian/artorian-logo.png";
import artorian1webp from "../../../assets/artorian/artorian-1.webp";
import artorian2webp from "../../../assets/artorian/artorian-2.webp";
import artorianColorswepb from "../../../assets/artorian/artorian-colors.webp";

import reactIcon1 from "../../../assets/artorian/React-icon-1.svg";
import reactIcon2 from "../../../assets/artorian/React-icon-2.svg";
import cssIcon from "../../../assets/artorian/icons8-css3-1.svg";
import reactRouterIcon from "../../../assets/artorian/react-router-seeklogo.com-1.svg";
import firebase from "../../../assets/artorian/firebase-seeklogo.com-1.svg";
import gitIcon from "../../../assets/artorian/git-artorian.svg";

const ArtorianProject = () => {
  const [showModal, setShowModal] = useState(false);

  const artStoreHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "Clicked on the artstore website",
    });
  };
  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <Box position={["relative"]}>
      <Box
        onMouseEnter={showModalHandler}
        maxW={["100%"]}
        bg="#333128"
        display="flex"
        justifyContent={["space-around"]}
        flexDirection={["column-reverse", "column-reverse", "row"]}
        alignItems={["center", "center", "flex-end"]}
      >
        <Box>
          <Image
            htmlWidth="632"
            htmlHeight="596"
            src={artorian1webp}
            fallbackSrc={artorian1}
            alt=" Artorian Gallery is a personal project where I built an
            art store."
            mt="20px"
            loading="lazy"
          />
        </Box>
        <Box>
          <Image
            src={artorianLogo}
            htmlWidth="507"
            htmlHeight="55"
            mt="20px"
            ml={["5px", "20px", "0"]}
            loading="lazy"
            alt="Artorian Logo Website"
          ></Image>
          <Image
            src={artorian2webp}
            fallbackSrc={artorian2}
            htmlWidth="632"
            htmlHeight="485"
            alt=" Artorian Gallery - buy page"
            mt="20px"
            loading="lazy"
          ></Image>
        </Box>
      </Box>
      {showModal && (
        <Box
          position={["absolute"]}
          top="0"
          maxW={["100%"]}
          w="100%"
          height="100%"
          onMouseLeave={showModalHandler}
          display="flex"
          flexDirection={["column", "column", "row"]}
          alignItems={["center", "center"]}
          justifyContent={["space-around"]}
          bg="rgba(0, 0, 0, 0.8);"
          color="white"
          px="10px"
        >
          <Box>
            <Text fontSize={["h4"]} fontFamily={["h4"]} mb="20px" as="h4">
              Artorian Gallery is a personal <br></br> project where I built an
              art store.
            </Text>
            <Text as="p" mb="20px">
              Technologies I used for this project:
            </Text>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]}>
                <Image src={reactIcon1}></Image>
              </Box>
              <Text fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                React
              </Text>
            </Flex>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]}>
                <Image src={cssIcon}></Image>
              </Box>
              <Text as="p" fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                CSS
              </Text>
            </Flex>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]}>
                <Image src={reactRouterIcon}></Image>
              </Box>
              <Text as="p" fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                React Router
              </Text>
            </Flex>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]}>
                <Image src={reactIcon2}></Image>
              </Box>
              <Text as="p" fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                React Context API - for global state management
              </Text>
            </Flex>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]}>
                <Image src={firebase} ml="5px"></Image>
              </Box>
              <Text as="p" fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                Firebase - for data storage and authentication
              </Text>
            </Flex>
            <Flex display={["flex"]} mt={["20px"]} alignItems={["center"]}>
              <Text fontFamily={["heading"]} as="p">
                <Link
                  border={["1px solid red"]}
                  px={["50px"]}
                  py={["10px"]}
                  fontSize={["p"]}
                  color={["red"]}
                  _hover={{ backgroundColor: "red", color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://artorian-gallery-store.netlify.app/"
                >
                  Check website
                </Link>
              </Text>
              <Button
                onClick={artStoreHandler}
                ml={["20px"]}
                bg={["none"]}
                outline={["none"]}
                as="a"
                _hover={{ backgroundColor: "none", outline: "none" }}
                _active={{ bacgkoundColor: "none" }}
                href="https://github.com/DennisPaul01/Artorian-Gallery-Store"
              >
                <Image src={gitIcon}></Image>
              </Button>
            </Flex>
          </Box>
          <Box display={["none", "block", "block"]}>
            <Image
              width={["70%", "70%", "80%", "100%"]}
              src={artorianColorswepb}
              fallbackSrc={artorianColors}
              height="auto"
              alt=" Artorian Gallery - design"
              loading="lazy"
            ></Image>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ArtorianProject;
