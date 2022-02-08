import { useState } from "react";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";

import db from "../../data/firebase";
import { collection, setDoc, doc } from "firebase/firestore";

const ContactForm = () => {
  const toast = useToast();

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [nameStatus, setNameStatus] = useState(false);
  const [emailStatus, setEmailStatus] = useState(false);
  const [messageStatus, setMessageStatus] = useState(false);

  const sendEmail = async function addTaskDatabase(email, name, message) {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    const messageUser = {
      name: name,
      email: email,
      message: message,
      date: dateTime,
    };
    try {
      const colRef = collection(db, "users");
      await setDoc(doc(colRef), messageUser);
    } catch (error) {
      console.error(error);
    }
  };

  const nameHandler = (event) => {
    setNameInput(event.target.value);
  };
  const emailHandler = (event) => {
    setEmailInput(event.target.value);
  };
  const messageHandler = (event) => {
    setMessageInput(event.target.value);
  };

  const messageUserHandler = (e) => {
    e.preventDefault();

    // I made these to show the messages of errors
    if (nameInput != null && nameInput.length > 3) {
      setNameStatus(false);
    } else {
      setNameStatus(true);
    }
    if (emailInput != null && emailInput.length > 4) {
      setEmailStatus(false);
    } else {
      setEmailStatus(true);
    }
    if (messageInput != null && messageInput.length > 6) {
      setMessageStatus(false);
    } else {
      setMessageStatus(true);
    }

    if (
      nameInput.length > 3 &&
      emailInput.length > 4 &&
      messageInput.length > 6
    ) {
      sendEmail(emailInput, nameInput, messageInput);
      setNameInput(" ");
      setEmailInput(" ");
      setMessageInput(" ");
      toaster();
      console.log("Message Sent");
    }
  };

  const toaster = () =>
    toast({
      position: "top",
      duration: 2000,
      isClosable: true,
      render: () => BoxMessage,
    });

  const BoxMessage = (
    <Box
      color="white"
      bg="green"
      border={["1px solid green"]}
      display={["flex"]}
      alignItems={["center"]}
      justifyContent={["center"]}
      py="10px"
      borderRadius={["7px"]}
    >
      <Text fontSize={["p"]}> Your message have been sent.</Text>
    </Box>
  );

  return (
    <Box w={["300px", "400px", "600px"]} mt={["50px", "50px", "50px", "0"]}>
      <form onSubmit={messageUserHandler}>
        <FormControl>
          <FormLabel fontFamily={"header"} fontSize="h4" htmlFor="fname">
            Full Name
          </FormLabel>
          <Input
            borderRadius={[0]}
            fontFamily={["header"]}
            fontSize="p"
            id="fname"
            name="fname"
            type="text"
            py="30px"
            onChange={nameHandler}
            value={nameInput}
          />
          {nameStatus && (
            <FormHelperText color="red" fontFamily={["body"]}>
              Your name must have more than 3 charaters.
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <FormLabel
            fontFamily={"header"}
            fontSize="h4"
            htmlFor="email"
            mt="30px"
          >
            Email
          </FormLabel>
          <Input
            borderRadius={[0]}
            fontFamily={["header"]}
            fontSize="p"
            id="email"
            type="email"
            name="email"
            py="30px"
            onChange={emailHandler}
            value={emailInput}
          />
          {emailStatus && (
            <FormHelperText color="red" fontFamily={["body"]}>
              The email must be at least 5 charaters.
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <FormLabel
            fontFamily={"header"}
            fontSize="h4"
            htmlFor="message"
            mt="30px"
          >
            Message
          </FormLabel>
          <Textarea
            borderRadius={[0]}
            id="message"
            name="message"
            onChange={messageHandler}
            value={messageInput}
          />
          {messageStatus && (
            <FormHelperText color="red" fontFamily={["body"]}>
              Your message must have at least 10 charaters.
            </FormHelperText>
          )}
        </FormControl>
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
            type="submit"
          >
            Send
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
