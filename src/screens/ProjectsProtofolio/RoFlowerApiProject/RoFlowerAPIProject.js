import { useState } from "react";

import ReactGA from "react-ga4";
import { Box, Image, Text, Flex, Button, Link } from "@chakra-ui/react";

import apiflower1 from "../../../assets/artorian/artorian-1.png";

import roflowerapiColors from "../../../assets/roflower-api/api-style.png";
import roflowerapilogo from "../../../assets/roflower-api/logo-ro-api.svg";
import apiflower1webp from "../../../assets/roflower-api/example-api-1.webp";

import roflowerapiColorswepb from "../../../assets/roflower-api/api-style-webp.webp";

import reactIcon1 from "../../../assets/artorian/React-icon-1.svg";
import cssIcon from "../../../assets/artorian/icons8-css3-1.svg";
import reactRouterIcon from "../../../assets/artorian/react-router-seeklogo.com-1.svg";
import gitIcon from "../../../assets/roflower-api/gitIcon.svg";
import nodejsIcon from "../../../assets/roflower-api/nodejs-icon.svg";
import mongodbIcon from "../../../assets/roflower-api/mongodb-icon-1.svg";
import expressjsIcon from "../../../assets/roflower-api/express-109.svg";
import awsIcon from "../../../assets/roflower-api/aws-2.svg";
import dockerIcon from "../../../assets/roflower-api/docker.svg";

const RoFlowerApiProject = () => {
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
        bg="#7BD1FC"
        display="flex"
        justifyContent={["space-around"]}
        flexDirection={["column-reverse", "column-reverse", "row"]}
        alignItems={["center", "center", "flex-end"]}
      >
        <Box
          flexDirection={["column", "column", "column"]}
          alignItems={["center", "center", "center"]}
          display="flex"
        >
          <Image
            src={roflowerapilogo}
            htmlWidth="200"
            htmlHeight="55"
            mt="20px"
            ml={["5px", "20px", "0"]}
            loading="lazy"
            alt="Artorian Logo Website"
          ></Image>
          <Image
            htmlWidth="1200"
            src={apiflower1webp}
            fallbackSrc={apiflower1}
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
          <Box w={["100%", "100%", "100%", "50%"]}>
            <Text fontSize={["h4"]} fontFamily={["h4"]} mb="20px" as="h4">
              RoFlowerAPI it's a RESTful API made with the porpouse the help
              Romanian people to find rare flowers on their teritory.
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
              <Box w={["100px"]} display={["flex"]}>
                <Image src={nodejsIcon} w="30px" mr="10px"></Image>
                <Image
                  src={expressjsIcon}
                  background={["white"]}
                  w="30px"
                ></Image>
                <Image src={mongodbIcon} w="30px"></Image>
              </Box>
              <Text as="p" fontFamily={["body"]} fontSize={["p"]} ml={["50px"]}>
                With NodeJS and ExpressJS I've made the server/models/routers
                and controlers and I've stored the data on MongoDB.
              </Text>
            </Flex>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]} display={["flex"]}>
                <Image src={awsIcon} ml="5px"></Image>
                <Image src={dockerIcon} ml="5px"></Image>
              </Box>
              <Text as="p" fontFamily={["body"]} fontSize={["p"]} ml={["50px"]}>
                Amazon Web Service EC2 is the place where the server it's hosted
                using an Docker container.
              </Text>
            </Flex>
            <Flex display={["flex"]} mt={["20px"]} alignItems={["center"]}>
              <Text fontFamily={["heading"]} as="p">
                <Link
                  border={["1px solid #5FA0E4"]}
                  px={["50px"]}
                  py={["10px"]}
                  fontSize={["p"]}
                  color={["white"]}
                  _hover={{ backgroundColor: "#5FA0E4", color: "5FA0E4" }}
                  target="_blank"
                  rel="noreferrer"
                  href="http://roflowerapi.space/"
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
                href="https://github.com/DennisPaul01/RoFlowerAPI"
              >
                <Image src={gitIcon}></Image>
              </Button>
            </Flex>
          </Box>
          <Box display={["none", "none", "block"]}>
            <Image
              width={["70%", "70%", "80%", "100%"]}
              src={roflowerapiColorswepb}
              fallbackSrc={roflowerapiColors}
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

export default RoFlowerApiProject;
