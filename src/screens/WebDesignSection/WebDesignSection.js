import { useState } from "react";

import { Text, Container, Grid, GridItem, Box } from "@chakra-ui/react";

import BannersProject from "../ProjectsProtofolio/BannersProject/BannersProject";
import CreativePhotoProject from "../ProjectsProtofolio/CreativePhotoProject/CreativePhotoProject";
import EmailTemplatesProject from "../ProjectsProtofolio/EmailTemplatesProject/EmailTemplatesProject";
import PersonalTrainerProject from "../ProjectsProtofolio/PersonalTrainerProject/PersonalTrainerProject";
import RattAppProject from "../ProjectsProtofolio/RattAppProject/RattAppProject";

const WebDesignSection = () => {
  const [changeText, setChangeText] = useState(false);

  return (
    <Container
      maxW="1600px"
      mt={["50px", "100px", "200px"]}
      mb={["50px", "100px", "200px"]}
      as="section"
      className="web-deisgn"
    >
      <Text
        as="h2"
        fontFamily="heading"
        fontWeight="bold"
        fontSize={["h4", "h3", "h2"]}
      >
        Web design work
      </Text>
      <Grid
        margin={["auto"]}
        maxW={["1400px"]}
        height="auto"
        gridGap={0}
        templateRows={["1fr", "1fr", "1fr", "repeat(4, auto)"]}
        templateColumns={["1.9fr, 1fr"]}
        gap={4}
      >
        <GridItem colSpan={2} bg="tomato">
          <EmailTemplatesProject></EmailTemplatesProject>
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]} bg="papayawhip">
          <CreativePhotoProject></CreativePhotoProject>{" "}
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]} bg="yellow">
          <PersonalTrainerProject></PersonalTrainerProject>
        </GridItem>
        <GridItem colSpan={2} bg="red">
          <RattAppProject></RattAppProject>
        </GridItem>
        <GridItem bg="blue" display={["none", "none", "none", "none", "block"]}>
          <BannersProject></BannersProject>
        </GridItem>
        <GridItem
          bg="#F0F3F7"
          display={["none", "none", "none", "none", "block"]}
        >
          <Box
            onMouseEnter={() => {
              setChangeText(true);
            }}
            onMouseLeave={() => {
              setChangeText(false);
            }}
            display={["flex"]}
            alignItems={["center"]}
            justifyContent={["center"]}
            maxW={["100%"]}
            height={["100%"]}
          >
            <Text
              fontFamily={["heading"]}
              fontSize={["h2", "h3", "h2"]}
              color="#202020"
              textAlign={["center"]}
              mx={"27px"}
              width={["467px"]}
              as="h2"
            >
              {!changeText ? "See more work " : `Under Construction`}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default WebDesignSection;
