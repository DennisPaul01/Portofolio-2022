import { Text } from "@chakra-ui/react";
import classes from "./MovingText.module.css";

const MovingText = () => {
  return (
    <div className={classes.container}>
      <Text
        as="h2"
        mx="auto"
        fontFamily={["heading"]}
        fontSize={["h4", "h3", "h2"]}
        className={classes.text1}
      >
        web develoment
      </Text>
      <Text
        as="h2"
        mx="auto"
        fontFamily={["heading"]}
        fontSize={["h4", "h3", "h2"]}
        className={classes.text2}
      >
        web design
      </Text>
      <Text
        as="h2"
        mx="auto"
        fontFamily={["heading"]}
        fontSize={["h4", "h3", "h2"]}
        className={classes.text3}
      >
        star wars fan
      </Text>
    </div>
  );
};

export default MovingText;
