import React from "react";

import ReactGA from "react-ga4";

import {
  Flex,
  Container,
  Box,
  Link,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

import gitHub from "../../assets/iconmonstr-github-1 1.svg";
import linkedin from "../../assets/iconmonstr-linkedin-3 1.svg";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactSection = () => {
  const linkedinHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "click the button Linkedin",
    });
  };
  const githubHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "click the button Github",
    });
  };
  const cvHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "click the button cv",
    });
  };

  return (
    <Container
      height={["auto"]}
      bg="black"
      color={["white"]}
      maxW="100%"
      as="section"
      className="footer"
      centerContent
      id="contact"
    >
      <Flex
        alignItems={["center"]}
        flexWrap="wrap"
        justifyContent={["center", "center", "center", "space-between"]}
        py={["50px", "100px"]}
        maxW="1440px"
        width="100%"
      >
        <Box
          display={["flex"]}
          flexDirection="column"
          alignItems={["center", "center", "center", "flex-start"]}
          textAlign={["center", "center", "center", "left"]}
        >
          <Text
            as="h1"
            color="red"
            fontWeight={["black"]}
            fontSize="h1"
            fontFamily={["heading"]}
          >
            Say hi.
          </Text>
          <Text
            fontWeight={["black"]}
            fontSize={["p", "h4", "h3"]}
            fontFamily={["heading"]}
            mt="50px"
            as="h4"
          >
            <Link href="mailto:denismucioiu@yahoo.com">
              denismucioiu@yahoo.com
            </Link>
          </Text>
          <Box w="134px" h="8px" bg="white" my="30px"></Box>
          <Text
            as="p"
            fontWeight={["regular"]}
            fontSize="h4"
            fontFamily={["heading"]}
          >
            I love to design and develop new things. <br></br> <br></br>
            Don't know where to start? <br></br> Feel free to ask any question's
          </Text>
          <Text
            as="h4"
            mt="50px"
            fontWeight={["regular"]}
            fontSize="h4"
            fontFamily={["heading"]}
          >
            You can donwload my cv from
            <Link
              href={
                "https://drive.google.com/file/d/1Sc5CrI9YPINa8_EPgPJhcrTlfAbmro_s/view?usp=sharing"
              }
              target="_blank"
              ml={["5px"]}
              color="red"
              onClick={cvHandler}
            >
              here.
            </Link>
          </Text>
          <Flex mt="50px">
            <Box>
              <Button
                onClick={linkedinHandler}
                px="0"
                bg={["none"]}
                outline={["none"]}
                as="a"
                target="_blank"
                _hover={{ backgroundColor: "none", outline: "none" }}
                _active={{ bacgkoundColor: "none" }}
                href="https://www.linkedin.com/in/denis-paul-mucioiu-3358aa182/"
              >
                <Image
                  src={linkedin}
                  htmlWidth="40"
                  htmlHeight="40"
                  alt="My linkeding profile"
                ></Image>
              </Button>
            </Box>
            <Box>
              <Button
                onClick={githubHandler}
                bg={["none"]}
                outline={["none"]}
                as="a"
                target="_blank"
                _hover={{ backgroundColor: "none", outline: "none" }}
                _active={{ bacgkoundColor: "none" }}
                href="https://github.com/DennisPaul01"
                alt="My github profile"
              >
                <Image
                  src={gitHub}
                  htmlWidth="40"
                  htmlHeight="40"
                  alt="My github profile"
                ></Image>
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box>
          <ContactForm></ContactForm>
        </Box>
      </Flex>
    </Container>
  );
};

export default ContactSection;
