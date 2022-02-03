import { Box, Text, Container, Grid, GridItem } from "@chakra-ui/react";
import ArtorianProject from "../ArtorianProject/ArtorianProject";

const WebDevSection = () => {
  return (
    <Container
      maxW="1600px"
      mt={["50px", "100px", "200px"]}
      mb={["50px", "100px", "200px"]}
    >
      <Text
        fontFamily="heading"
        fontWeight="bold"
        fontSize={["h4", "h3", "h2"]}
      >
        Web development work
      </Text>
      <Grid
        margin={["auto"]}
        maxW={["1400px"]}
        height="100%"
        gridGap={0}
        templateRows={["1fr 1fr 1fr", "0.7fr 1.3fr"]}
        templateColumns={["1fr", "1.3fr 0.7fr"]}
        gap={4}
      >
        <GridItem colSpan={[1, 2]} bg="tomato">
          <ArtorianProject></ArtorianProject>
        </GridItem>
        <GridItem bg="papayawhip"></GridItem>
        <GridItem bg="green"></GridItem>
      </Grid>
    </Container>
  );
};

export default WebDevSection;
