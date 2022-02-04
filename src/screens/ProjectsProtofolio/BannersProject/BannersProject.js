import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import banner1 from "../../../assets/banners/banner-1.jpg";
import banner2 from "../../../assets/banners/banner-2.gif";
import banner3 from "../../../assets/banners/banner-3.gif";
import banner4 from "../../../assets/banners/banner-4.gif";

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
          <Text fontSize={["35px"]} fontFamily={"heading"}>
            Banners
          </Text>
        </GridItem>
        <GridItem>
          <Box>
            <Image src={banner1} w={["100%"]}></Image>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Image src={banner2} w={["100%"]}></Image>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box>
            <Image src={banner3} w={["100%"]}></Image>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Image src={banner4} maxH="353px" w={["100%"]}></Image>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default BannersProject;
