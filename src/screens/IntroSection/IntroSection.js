import { Box, Text, Container } from "@chakra-ui/react";

import classes from "./IntroSection.module.css";

import spaceship from "../../assets/spaceship.png";
import light from "../../assets/light-spaceship-4.png";
import cow from "../../assets/cow.png";
import MovingText from "../../components/MovingText/MovingText";

export const IntroSection = () => {
  return (
    <Container maxW="1600px" mb={["100px", "200px", "350px"]}>
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
          <img
            src={spaceship}
            alt="SpaceShip"
            className={classes.spaceship}
          ></img>
          <img src={light} alt="SpaceShip" className={classes.light}></img>
          <img src={cow} alt="SpaceShip" className={classes.cow}></img>
        </Box>
      </Box>
    </Container>
  );
};
