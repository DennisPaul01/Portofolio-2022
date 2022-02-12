import { Box, Image, Text, Grid, GridItem } from "@chakra-ui/react";

import banner1 from "../../../assets/banners/banner-1.jpg";
import banner2mp4 from "../../../assets/banners/banner-2.mp4";
import banner3mp4 from "../../../assets/banners/banner-3.mp4";
import banner4mp4 from "../../../assets/banners/banner-4.mp4";

import banner1webp from "../../../assets/banners/banner-1.webp";
import banner2webm from "../../../assets/banners/banner-2.webm";
import banner3webm from "../../../assets/banners/banner-3.webm";
import banner4webm from "../../../assets/banners/banner-4.webm";

const BannersProject = () => {
  return (
    <Box maxW={["100%"]} height={["100%"]} bg="#F95738" color={["white"]}>
      <Grid
        templateColumns="0.6fr  1.6fr 1.6fr"
        templateRows="repeat(2, auto)"
        maxW={["100%"]}
        height={["auto"]}
        gridGap={0}
      >
        <GridItem alignSelf={["center"]}>
          <Text as="h4" fontSize={["35px"]} fontFamily={"heading"}>
            Banners
          </Text>
        </GridItem>
        <GridItem>
          <Box>
            <Image
              src={banner1webp}
              fallbackSrc={banner1}
              loading="lazy"
              w={["100%"]}
              alt="This image is a banner I made for my job"
            ></Image>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <video muted autoPlay={"autoplay"} loop style={{ width: "100%" }}>
              <source src={banner2webm} type="video/webm" />
              <source src={banner2mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <video width="100%" muted autoPlay={"autoplay"} loop>
              <source src={banner3webm} type="video/webm" />
              <source src={banner3mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <video
              muted
              autoPlay={"autoplay"}
              loop
              style={{ height: "353px", width: "100%", background: "#AEACD5" }}
            >
              <source src={banner4webm} type="video/webm" />
              <source src={banner4mp4} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default BannersProject;
