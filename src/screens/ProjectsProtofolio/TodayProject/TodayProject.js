import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Divider,
  Link,
} from "@chakra-ui/react";
import BannerToday from "../../../assets/today/image-banner-today.png";
import { useState } from "react";

import reactIcon1 from "../../../assets/artorian/React-icon-1.svg";
import reduxIcon from "../../../assets/today/redux 1.svg";
import chakraUiIcon from "../../../assets/today/logomark-colored 1.svg";
import reactRouterIcon from "../../../assets/artorian/react-router-seeklogo.com-1.svg";
import firebase from "../../../assets/artorian/firebase-seeklogo.com-1.svg";
import gitIcon from "../../../assets/today/iconmonstr-github-1 1.svg";

const TodayProject = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };
  const redirectWebsite = () => {
    const url = "https://today-todo-app.netlify.app/";
    window.open(url, "_blank");
  };
  return (
    <Box position={["relative"]}>
      <Box
        onClick={redirectWebsite}
        onMouseEnter={showModalHandler}
        maxW={["100%"]}
        maxHeight={["auto"]}
        bg="#4285F4"
        display="flex"
        alignItems={["center"]}
        justifyContent={["center"]}
      >
        <Image src={BannerToday} maxW={["100%"]} px="40px" my="40px"></Image>
      </Box>
      {showModal && (
        <Box
          position={["absolute"]}
          top="0"
          maxW={["100%"]}
          w="100%"
          height="100%"
          onMouseLeave={showModalHandler}
          display={["none", "none", "none", "flex"]}
          flexDirection={["column", "column", "row"]}
          alignItems={["center", "center"]}
          justifyContent={["space-around"]}
          bg="#21437A"
          color="white"
          px="50px"
        >
          <Box>
            <Text fontSize={["p"]} fontFamily={["body"]} mb="20px">
              To do list apps are everywhere, but my biggest issue with them all
              is how bloated they all are. Social login, user tracking, email
              notifications. The list goes on. I wanted something really simple
              to get the job done, so I built it. <br></br> <br></br>
              Aside from updating your account details, all you can do is create
              tasks or lists. Simple as that. There is included a section with
              quotes for programs and from kanye's tweets.
            </Text>
            <Divider />
            <Text mb="20px" mt="20px">
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
                <Image src={chakraUiIcon}></Image>
              </Box>
              <Text fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                Chakra UI - for styling the components
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
                <Image src={reduxIcon}></Image>
              </Box>
              <Text fontFamily={["body"]} fontSize={["p"]} ml={["10px"]}>
                Redux - for state management
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
            <Flex display={["flex"]} mt={["20px"]} alignItems={["center"]}>
              <Text fontFamily={["heading"]}>
                <Link
                  border={["1px solid yellow"]}
                  px={["50px"]}
                  py={["10px"]}
                  fontSize={["p"]}
                  color={["yellow"]}
                  _hover={{ backgroundColor: "yellow", color: "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://today-todo-app.netlify.app/"
                >
                  Check website
                </Link>
              </Text>
              <Button
                ml={["20px"]}
                bg={["none"]}
                outline={["none"]}
                as="a"
                _hover={{ backgroundColor: "none", outline: "none" }}
                _active={{ bacgkoundColor: "none" }}
                href="https://github.com/DennisPaul01/Today-Todo-App"
              >
                <Image src={gitIcon}></Image>
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TodayProject;
