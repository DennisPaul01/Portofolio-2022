import { Box, Text, Container, Image } from "@chakra-ui/react";

import classes from "./IntroSection.module.css";

import spaceship from "../../assets/spaceship.webp";
import spaceshippng from "../../assets/spaceship.png";
import light from "../../assets/light-spaceship-4.webp";
import lightpng from "../../assets/light-spaceship-4.png";
import cow from "../../assets/cow.webp";
import cowpng from "../../assets/cow.png";
import MovingText from "../../components/MovingText/MovingText";

const IntroSection = () => {
  return (
    <Container
      maxW={["1600px"]}
      mb={["100px", "200px", "350px"]}
      px={["20px", "30px", "40px", "48px"]}
      as="section"
      className="intro-section"
    >
      <Box
        display={["flex"]}
        mt={["20px", "70px", "150px"]}
        justifyContent="space-between"
        gap={["30px", "48px"]}
      >
        <Box w={["100%", "100%", "800px"]} maxW="100%">
          <Text
            as="h2"
            fontFamily={["heading"]}
            fontSize={["h3", "h2"]}
            className={classes.introTitle}
          >
            <span>Hello, my name is Denis</span>
            <span>and I'm also</span>
          </Text>
          <MovingText />
        </Box>
        <Box
          w="500px"
          className={classes.container}
          display={["none", "none", "none", "none", "none", "block"]}
        >
          <Image
            src={spaceship}
            fallbackSrc={spaceshippng}
            className={classes.spaceship}
            alt="An image with a ozn"
            height="209px"
            width="403px"
            loading="lazy"
          />
          <Image
            src={light}
            fallbackSrc={lightpng}
            className={classes.light}
            alt="An image with a green light"
            height="472px"
            width="343px"
            loading="lazy"
          />
          <Image
            src={cow}
            fallbackSrc={cowpng}
            className={classes.cow}
            alt="An image with a cow"
            height="267px"
            width="301px"
            loading="lazy"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default IntroSection;
