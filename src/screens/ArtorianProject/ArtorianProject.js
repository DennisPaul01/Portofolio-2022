import { Box, Image, Text, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import artorian1 from "../../assets/artorian/artorian-1.png";
import artorian2 from "../../assets/artorian/artorian-2.png";
import artorianColors from "../../assets/artorian/artorian-colors.png";
import artorianLogo from "../../assets/artorian/artorian-logo.png";
import reactIcon1 from "../../assets/artorian/React-icon-1.svg";
import reactIcon2 from "../../assets/artorian/React-icon-2.svg";
import cssIcon from "../../assets/artorian/icons8-css3-1.svg";
import reactRouterIcon from "../../assets/artorian/react-router-seeklogo.com-1.svg";
import firebase from "../../assets/artorian/firebase-seeklogo.com-1.svg";

const ArtorianProject = () => {
  const [showModal, setShowModal] = useState(false);

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
          <Image maxW={["100%"]} src={artorian1} mt="20px"></Image>
        </Box>
        <Box>
          <Image
            src={artorianLogo}
            maxW={["100%"]}
            mt="20px"
            ml={["5px", "20px", "0"]}
          ></Image>
          <Image maxW={["100%"]} src={artorian2} mt="20px"></Image>
        </Box>
      </Box>
      {showModal && (
        <Box
          position={["absolute"]}
          bg="red"
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
        >
          <Box>
            <Text fontSize={["h4"]} fontFamily={["h4"]} mb="20px">
              Artorian Gallery is a personal <br></br> project where I built an
              art store.
            </Text>
            <Text mb="20px">Technologies I used for this project:</Text>
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
              <Text fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                CSS
              </Text>
            </Flex>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]}>
                <Image src={reactRouterIcon}></Image>
              </Box>
              <Text fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                React Router
              </Text>
            </Flex>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]}>
                <Image src={reactIcon2}></Image>
              </Box>
              <Text fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                React Context API - for global state management
              </Text>
            </Flex>
            <Flex alignItems={["center"]} mb={["10px"]}>
              <Box w={["30px"]}>
                <Image src={firebase} ml="5px"></Image>
              </Box>
              <Text fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                Firebase - for data storage and authentication
              </Text>
            </Flex>
            <Flex>
              <Button colorScheme="teal" size="xs" mt="20px">
                Button
              </Button>
            </Flex>
          </Box>
          <Box>
            <Image src={artorianColors}></Image>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ArtorianProject;
