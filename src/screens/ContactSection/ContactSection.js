import {
  Flex,
  Container,
  Box,
  Link,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import CV from "../../assets/about_me/darth-vader-icon.png";
import gitHub from "../../assets/iconmonstr-github-1 1.svg";
import linkedin from "../../assets/iconmonstr-linkedin-3 1.svg";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Element } from "react-scroll";

const ContactSection = () => {
  return (
    <Container
      height={["auto"]}
      bg="black"
      color={["white"]}
      maxW="100%"
      as="section"
      className="footer"
      centerContent
    >
      <Element name="contact" id="contact"></Element>
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
          >
            <Link href="mailto:denismucioiu@yahoo.com">
              denismucioiu@yahoo.com
            </Link>
          </Text>
          <Box w="134px" h="8px" bg="white" my="30px"></Box>
          <Text fontWeight={["regular"]} fontSize="h4" fontFamily={["heading"]}>
            I love to design and develop new things. <br></br> <br></br>
            Don't know where to start? <br></br> Feel free to ask any question's
          </Text>
          <Text
            mt="50px"
            fontWeight={["regular"]}
            fontSize="h4"
            fontFamily={["heading"]}
          >
            You can donwload my cv from
            <Link href={CV} download ml={["5px"]} color="red">
              here.
            </Link>
          </Text>
          <Flex mt="50px">
            <Box>
              <Button
                px="0"
                bg={["none"]}
                outline={["none"]}
                as="a"
                target="_blank"
                _hover={{ backgroundColor: "none", outline: "none" }}
                _active={{ bacgkoundColor: "none" }}
                href="https://github.com/DennisPaul01/Today-Todo-App"
              >
                <Image src={linkedin}></Image>
              </Button>
            </Box>
            <Box>
              <Button
                bg={["none"]}
                outline={["none"]}
                as="a"
                target="_blank"
                _hover={{ backgroundColor: "none", outline: "none" }}
                _active={{ bacgkoundColor: "none" }}
                href="https://github.com/DennisPaul01/Today-Todo-App"
              >
                <Image src={gitHub}></Image>
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
