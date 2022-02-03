import { Box } from "@chakra-ui/react";
import { IntroSection } from "../screens/IntroSection/IntroSection";
import MarqueeText from "../components/UI/MarqueeText";
import WebDevSection from "../screens/WebDevSection/WebDevSection";

const HomePage = () => {
  return (
    <Box>
      <IntroSection></IntroSection>
      <MarqueeText></MarqueeText>
      <WebDevSection></WebDevSection>
    </Box>
  );
};

export default HomePage;
