import { Box, Image, Text, Flex } from "@chakra-ui/react";

import mockup1 from "../../../assets/ratt-app/mockup-1.png";
import mockup2 from "../../../assets/ratt-app/mockup-2.png";
import mockup3 from "../../../assets/ratt-app/mockup-3.png";
import mockup4 from "../../../assets/ratt-app/mockup-4.png";
import mockup5 from "../../../assets/ratt-app/mockup-5.png";
import mockup1webp from "../../../assets/ratt-app/mockup-1.webp";
import mockup2webp from "../../../assets/ratt-app/mockup-2.webp";
import mockup3webp from "../../../assets/ratt-app/mockup-3.webp";
import mockup4webp from "../../../assets/ratt-app/mockup-4.webp";
import mockup5webp from "../../../assets/ratt-app/mockup-5.webp";

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
          <Image
            src={mockup1webp}
            fallbackSrc={mockup1}
            width="auto"
            height="auto"
            loading="lazy"
            alt="RATT TIMISOARA APP - transportation - ticket page"
          ></Image>
        </Box>
        <Box mt={["20px"]}>
          <Image
            src={mockup2webp}
            fallbackSrc={mockup2}
            width="auto"
            height="auto"
            loading="lazy"
            alt="RATT TIMISOARA APP - transportation - waiting page"
          ></Image>
        </Box>
        <Box mt={["20px"]}>
          <Image
            src={mockup3webp}
            fallbackSrc={mockup3}
            width="auto"
            height="auto"
            loading="lazy"
            alt="RATT TIMISOARA APP - transportation - bus stops page"
          ></Image>
        </Box>
        <Box mt={["20px"]}>
          <Image
            src={mockup4webp}
            fallbackSrc={mockup4}
            width="auto"
            height="auto"
            loading="lazy"
            alt="RATT TIMISOARA APP - transportation - disponible trains page"
          ></Image>
        </Box>
        <Box mt={["20px"]}>
          <Image
            src={mockup5webp}
            fallbackSrc={mockup5}
            width="auto"
            height="auto"
            loading="lazy"
            alt="RATT TIMISOARA APP - transportation - qr code page"
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default RattAppProject;
