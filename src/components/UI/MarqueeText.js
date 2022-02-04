import classes from "./MaruqeeText.module.css";
import { Text } from "@chakra-ui/react";
const MarqueeText = (props) => {
  const sectionLocation = props.sectionLocation;

  let textBar = null;

  // The destructured prop can have three values "webdev" / "webdesign" and "contact" - every one of them showing another value on the bar

  if (sectionLocation === "webdev") {
    textBar =
      "WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT / WEB DEVELOPMENT";
  } else if (sectionLocation === "webdesign") {
    textBar =
      " WEB DESIGN /   WEB DESIGN /   WEB DESIGN /   WEB DESIGN /   WEB DESIGN /  WEB DESIGN /  WEB DESIGN /  WEB DESIGN /   WEB DESIGN /  WEB DESIGN /   WEB DESIGN /  WEB DESIGN /  WEB DESIGN /  WEB DESIGN /   WEB DESIGN /   WEB DESIGN /   WEB DESIGN /  WEB DESIGN /  WEB DESIGN /   WEB DESIGN /   WEB DESIGN /   WEB DESIGN /  WEB DESIGN /  WEB DESIGN /  WEB DESIGN   ";
  } else if (sectionLocation === "contact") {
    textBar =
      " CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / CONTACT / ";
  }
  return (
    <Text className={classes.marquee}>
      <span>{textBar}</span>
    </Text>
  );
};

export default MarqueeText;
