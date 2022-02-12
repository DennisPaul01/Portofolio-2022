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
      maxW="1600px"
      mb={["100px", "200px", "350px"]}
      as="section"
      className="intro-section"
    >
      <Box
        display={["flex"]}
        mt={["20px", "70px", "150px"]}
        justifyContent="space-between"
      >
        <Box w="800px">
          <Text fontFamily={["heading"]} fontSize={["h3", "h2"]}>
            Hello, my name is Denis and I create websites for digital universe
            using my skills of
          </Text>
          <MovingText></MovingText>
        </Box>
        <Box
          w="500px"
          className={classes.container}
          display={["none", "none", "none", "block"]}
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
