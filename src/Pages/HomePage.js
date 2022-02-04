import { Box } from "@chakra-ui/react";
import { IntroSection } from "../screens/IntroSection/IntroSection";
import MarqueeText from "../components/UI/MarqueeText";
import WebDevSection from "../screens/WebDevSection/WebDevSection";
import WebDesignSection from "../screens/WebDesignSection/WebDesignSection";

const HomePage = () => {
  return (
    <Box>
      <IntroSection></IntroSection>
      <MarqueeText sectionLocation="webdev"></MarqueeText>
      <WebDevSection></WebDevSection>
      <MarqueeText sectionLocation="webdesign"></MarqueeText>
      <WebDesignSection></WebDesignSection>
      <MarqueeText sectionLocation="contact"></MarqueeText>
    </Box>
  );
};

export default HomePage;
