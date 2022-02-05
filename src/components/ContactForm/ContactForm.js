import { useState } from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";

const ContactForm = () => {
  const [inputName, setInputName] = useState("   ");

  const nameInputHandler = (e) => setInputName(e.target.value);

  return (
    <FormControl
      w={["300px", "400px", "600px"]}
      mt={["50px", "50px", "50px", "0"]}
    >
      <FormLabel fontFamily={"header"} fontSize="h4" htmlFor="name">
        Full Name
      </FormLabel>
      <Input
        borderRadius={[0]}
        fontFamily={["header"]}
        fontSize="p"
        id="text"
        type="text"
        py="30px"
      />
      <FormHelperText color="red" fontFamily={["body"]}>
        Your name must have more than 3 letters
      </FormHelperText>
      <FormLabel fontFamily={"header"} fontSize="h4" htmlFor="email" mt="30px">
        Email
      </FormLabel>
      <Input
        borderRadius={[0]}
        fontFamily={["header"]}
        fontSize="p"
        id="email"
        type="email"
        py="30px"
        required
      />
      <FormHelperText color="red" fontFamily={["body"]}>
        Your email is empty or dosen't corespond with any email provider.
      </FormHelperText>
      <FormLabel fontFamily={"header"} fontSize="h4" htmlFor="name" mt="30px">
        Message
      </FormLabel>
      <Textarea borderRadius={[0]} />
      <FormHelperText color="red" fontFamily={["body"]}>
        Your message form is empty.
      </FormHelperText>
      <Box display={["flex"]} justifyContent={["flex-end"]} mt="30px">
        <Button
          fontFamily={["heading"]}
          border={["1px solid #F95738"]}
          px={["100px"]}
          py={["35px"]}
          fontSize={["h4"]}
          color={["red"]}
          bg={["none"]}
          _hover={{
            backgroundColor: "#F95738",
            outline: "none",
            color: "white",
          }}
          _active={{ bacgkoundColor: "none" }}
          href="https://github.com/DennisPaul01/Artorian-Gallery-Store"
        >
          Send
        </Button>
      </Box>
    </FormControl>
  );
};

export default ContactForm;
