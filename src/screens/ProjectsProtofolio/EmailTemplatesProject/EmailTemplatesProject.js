import { Box, Image, Text, Flex } from "@chakra-ui/react";

import emailTemplate1 from "../../../assets/email-templates/Mask Group-1.png";
import emailTemplate2 from "../../../assets/email-templates/Mask Group-2.png";
import emailTemplate3 from "../../../assets/email-templates/Mask Group-3.png";
import emailTemplate4 from "../../../assets/email-templates/Mask Group.png";
import emailTemplate1webp from "../../../assets/email-templates/Mask Group-1.webp";
import emailTemplate2webp from "../../../assets/email-templates/Mask-Group-2.webp";
import emailTemplate3webp from "../../../assets/email-templates/Mask-Group-3.webp";
import emailTemplate4webp from "../../../assets/email-templates/Mask Group.webp";

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
          <Image
            src={emailTemplate1webp}
            fallbackSrc={emailTemplate1}
            width="auto"
            height="auto"
            loading="lazy"
            alt="An image with a email campagine 1 #Mucioiu Denis"
          ></Image>
        </Box>
        <Box>
          <Image
            src={emailTemplate2webp}
            fallbackSrc={emailTemplate2}
            width="auto"
            height="auto"
            loading="lazy"
            alt="An image with a email campagine 2 #Mucioiu Denis"
          ></Image>
        </Box>
        <Box>
          <Image
            src={emailTemplate3webp}
            fallbackSrc={emailTemplate3}
            width="auto"
            height="auto"
            loading="lazy"
            alt="An image with a email campagine 3 #Mucioiu Denis"
          ></Image>
        </Box>
        <Box>
          <Image
            src={emailTemplate4webp}
            fallbackSrc={emailTemplate4}
            width="auto"
            height="auto"
            loading="lazy"
            alt="An image with a email campagine 4 #Mucioiu Denis"
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
};

export default EmailTemplatesProject;
