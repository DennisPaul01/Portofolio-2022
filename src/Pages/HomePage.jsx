import { Box } from "@chakra-ui/react";

import MarqueeText from "../components/UI/MarqueeText";
import IntroSection from "../screens/IntroSection/IntroSection";
import WebDevSection from "../screens/WebDevSection/WebDevSection";
import WebDesignSection from "../screens/WebDesignSection/WebDesignSection";
import ContactSection from "../screens/ContactSection/ContactSection";

const HomePage = () => {
  return (
    <Box>
      <IntroSection></IntroSection>

      <MarqueeText sectionLocation="webdev"></MarqueeText>

      <WebDevSection></WebDevSection>

      <MarqueeText sectionLocation="webdesign"></MarqueeText>

      <WebDesignSection></WebDesignSection>

      <MarqueeText sectionLocation="contact"></MarqueeText>
      <ContactSection></ContactSection>
    </Box>
  );
};

export default HomePage;
