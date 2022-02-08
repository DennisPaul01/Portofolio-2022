import { Text, Container, Grid, GridItem, Box } from "@chakra-ui/react";
import ArtorianProject from "../ProjectsProtofolio/ArtorianProject/ArtorianProject";
import TodayProject from "../ProjectsProtofolio/TodayProject/TodayProject";
import { Element } from "react-scroll";

const WebDevSection = () => {
  return (
    <Container
      maxW="1600px"
      height={["auto"]}
      mt={["50px", "100px", "200px"]}
      mb={["50px", "100px", "200px"]}
      as="section"
      className="web-development"
    >
      <Text
        fontFamily="heading"
        fontWeight="bold"
        fontSize={["h4", "h3", "h2"]}
      >
        Web development work
      </Text>
      <Element name="work" id="work"></Element>
      <Grid
        margin={["auto"]}
        maxW={["1400px"]}
        height="auto"
        gridGap={0}
        templateRows={["1fr auto auto", "0.7fr auto"]}
        templateColumns={["1fr", "1.3fr 0.7fr"]}
        gap={4}
      >
        <GridItem colSpan={[1, 2]} bg="tomato">
          <ArtorianProject></ArtorianProject>
        </GridItem>
        <GridItem bg="papayawhip">
          <TodayProject></TodayProject>
        </GridItem>
        <GridItem bg="#C97D60">
          <Box
            display={["flex"]}
            alignItems={["center"]}
            justifyContent={["center"]}
            maxW={["100%"]}
            height={["100%"]}
          >
            <Text
              fontFamily={["heading"]}
              fontSize={["h2", "h3", "h2", "h1"]}
              color="white"
              textAlign={["center"]}
            >
              A new project
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default WebDevSection;
