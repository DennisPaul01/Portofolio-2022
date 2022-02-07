import { Box, Image, Text, Flex } from "@chakra-ui/react";

import desktop from "../../../assets/personal-trainer/Mask Group.png";
import mobile from "../../../assets/personal-trainer/Mask Group-1.png";

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
        <Image mt={["30px"]} src={desktop}></Image>
      </Box>
      <Box alignSelf={["flex-end"]} display={["none", "block"]}>
        <Image src={mobile}></Image>
      </Box>
    </Box>
  );
};

export default PersonalTrainerProject;
