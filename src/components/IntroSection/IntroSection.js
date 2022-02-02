import { Box, Text, Image } from "@chakra-ui/react";

import classes from "./IntroSection.module.css";

import spaceship from "../../assets/spaceship.png";
import light from "../../assets/light-spaceship.png";
import cow from "../../assets/cow.png";

export const IntroSection = () => {
  return (
    <Box display={["flex"]} mt="100px" justifyContent="space-between">
      <Box w="800px">
        <Text fontFamily={["heading"]} fontSize={["h3", "h2"]}>
          Hello, my name is Denis and I create websites for digital universe
          using my skills of
        </Text>
      </Box>
      <Box
        w="500px"
        className={classes.container}
        display={["none", "none", "block"]}
      >
        <img
          src={spaceship}
          alt="SpaceShip"
          className={classes.spaceship}
        ></img>
        <img src={light} alt="SpaceShip" className={classes.light}></img>
        <img src={cow} alt="SpaceShip" className={classes.cow}></img>
      </Box>
      <marquee scrollamount="10">faster scroll</marquee>
    </Box>
  );
};
