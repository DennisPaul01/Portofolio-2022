import { Box, Image, Text } from "@chakra-ui/react";

import logo from "../../../assets/creative-photo/logo.png";
import imagePresentation from "../../../assets/creative-photo/Group 27.png";
import imagePresentationwebp from "../../../assets/creative-photo/Group 27.webp";

const CreativePhotoProject = () => {
  return (
    <Box
      maxW={["100%"]}
      height={["100%"]}
      bg="#1F1F1F"
      display="flex"
      flexDirection={["column"]}
      justifyContent={["center"]}
      alignItems={["center", "center"]}
      color={["white"]}
    >
      <Image mt={["30px"]} src={logo}></Image>
      <Text
        fontFamily={["body"]}
        fontSize={["p"]}
        textAlign={["center"]}
        my={["20px"]}
      >
        Creative photo is a website made for a photo company, where <br></br>{" "}
        they can upload their images from events.
      </Text>
      <Image
        src={imagePresentationwebp}
        fallbackSrc={imagePresentation}
        width="auto"
        height="auto"
        loading="lazy"
        alt="Creative Photo images from the website"
      ></Image>
    </Box>
  );
};

export default CreativePhotoProject;
