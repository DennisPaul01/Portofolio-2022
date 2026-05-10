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
        an AI full stack dev
      </Text>
      <Text
        as="h2"
        mx="auto"
        fontFamily={["heading"]}
        fontSize={["h4", "h3", "h2"]}
        className={classes.text2}
      >
        a UI/UX designer
      </Text>
      <Text
        as="h2"
        mx="auto"
        fontFamily={["heading"]}
        fontSize={["h4", "h3", "h2"]}
        className={classes.text3}
      >
        a Star Wars fan
      </Text>
    </div>
  );
};

export default MovingText;
