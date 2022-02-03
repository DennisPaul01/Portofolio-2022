import classes from "./MaruqeeText.module.css";
import { Text } from "@chakra-ui/react";
const MarqueeText = () => {
  const textWebDev =
    "WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT";
  return (
    <Text mt={["100px", "200px", "380px"]} className={classes.marquee}>
      <span>{textWebDev}</span>
    </Text>
  );
};

export default MarqueeText;
