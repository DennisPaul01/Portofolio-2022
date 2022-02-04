import { Box, Image, Text, Flex, Button, Divider } from "@chakra-ui/react";
import mockup1 from "../../../assets/ratt-app/mockup-1.png";
import mockup2 from "../../../assets/ratt-app/mockup-2.png";
import mockup3 from "../../../assets/ratt-app/mockup-3.png";
import mockup4 from "../../../assets/ratt-app/mockup-4.png";
import mockup5 from "../../../assets/ratt-app/mockup-5.png";

const RattAppProject = () => {
  return (
    <Box
      maxW={["100%"]}
      height={["auto"]}
      bgGradient="linear(to-r, #3C00BF, #F68440)"
      display="flex"
      flexDirection={["column"]}
      alignItems={["center", "center"]}
      color={["white"]}
    >
      <Text
        fontFamily={["heading"]}
        fontSize={["h5"]}
        fontWeight={"black"}
        mt={["30px"]}
        textAlign={["center"]}
      >
        Rebranding - RATT APP Timisoara
      </Text>

      <Flex
        mt={["30px"]}
        justifyContent={["space-around"]}
        w="100%"
        alignItems={["center"]}
        flexDirection={["column", "column", "column", "row"]}
      >
        <Box mt={["20px"]}>
          <Image src={mockup1}></Image>
        </Box>
        <Box mt={["20px"]}>
          <Image src={mockup2}></Image>
        </Box>
        <Box mt={["20px"]}>
          <Image src={mockup3}></Image>
        </Box>
        <Box mt={["20px"]}>
          <Image src={mockup4}></Image>
        </Box>
        <Box mt={["20px"]}>
          <Image src={mockup5}></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default RattAppProject;
