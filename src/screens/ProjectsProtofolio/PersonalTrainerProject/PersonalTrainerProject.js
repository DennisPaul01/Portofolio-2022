import { Box, Image, Text } from "@chakra-ui/react";

import desktop from "../../../assets/personal-trainer/Mask Group.png";
import mobile from "../../../assets/personal-trainer/Mask Group-1.png";
import desktopwebp from "../../../assets/personal-trainer/Mask-Group.webp";
import mobilewebp from "../../../assets/personal-trainer/Mask-Group-1.webp";

const PersonalTrainerProject = () => {
  return (
    <Box
      maxW={["100%"]}
      height={["auto"]}
      bg="#000"
      display="flex"
      justifyContent={["space-around"]}
      alignItems={["center", "center"]}
      color={["white"]}
    >
      <Box>
        <Text
          fontFamily={["heading"]}
          fontSize={["h4"]}
          textAlign={["left"]}
          my={["20px"]}
        >
          Duluman Mihai
        </Text>
        <Text
          fontFamily={["body"]}
          fontSize={["p"]}
          textAlign={["left"]}
          my={["20px"]}
        >
          Duluman Mihai it’s a website for a <br></br>personal trainer.
        </Text>
        <Image
          mt={["30px"]}
          src={desktopwebp}
          fallbackSrc={desktop}
          width="auto"
          height="auto"
          loading="lazy"
          alt="Duluman Mihai images from the website"
        ></Image>
      </Box>
      <Box alignSelf={["flex-end"]} display={["none", "block"]}>
        <Image
          src={mobilewebp}
          fallbackSrc={mobile}
          width="auto"
          height="auto"
          loading="lazy"
          alt="Duluman Mihai images from the website on the mobile version."
        ></Image>
      </Box>
    </Box>
  );
};

export default PersonalTrainerProject;
