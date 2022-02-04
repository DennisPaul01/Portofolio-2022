import { Box, Image, Text, Flex, Button, Divider } from "@chakra-ui/react";
import emailTemplate1 from "../../../assets/email-templates/Mask Group-1.png";
import emailTemplate2 from "../../../assets/email-templates/Mask Group-2.png";
import emailTemplate3 from "../../../assets/email-templates/Mask Group-3.png";
import emailTemplate4 from "../../../assets/email-templates/Mask Group.png";

const EmailTemplatesProject = () => {
  return (
    <Box
      maxW={["100%"]}
      height={["100%"]}
      bg="#002069"
      display="flex"
      flexDirection={["column"]}
      justifyContent={["center"]}
      alignItems={["center", "center"]}
      color={["white"]}
    >
      <Text
        fontFamily={["heading"]}
        fontSize={["h5"]}
        fontWeight={"black"}
        mt={["30px"]}
      >
        Email templates
      </Text>
      <Text
        fontFamily={["body"]}
        fontSize={["p"]}
        textAlign={["center"]}
        mt={["15px"]}
      >
        Last year I designed and coded over 150 email templates <br></br> for
        different campaigns for different countries around the world
      </Text>
      <Flex
        mt={["30px"]}
        mb={["30px"]}
        flexDirection={["column", "column", "row"]}
        justifyContent={["center"]}
        alignItems={["center", "center"]}
      >
        <Box>
          <Image src={emailTemplate1}></Image>
        </Box>
        <Box>
          <Image src={emailTemplate2}></Image>
        </Box>
        <Box>
          <Image src={emailTemplate3}></Image>
        </Box>
        <Box>
          <Image src={emailTemplate4}></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default EmailTemplatesProject;
