import React, { useState } from "react";
import {
  Box,
  VStack,
  Heading,
  Card,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

import axios from "axios";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    const response = await axios
      .post("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
      {
        name: name,
        email: email,
        subject: subject,
        message: message
        }
      );
      setName('')
      setEmail('')
      setMessage('')
      setSubject('')
  };

  return (
    <Box w={["full", "md"]} m="auto" p>
      <VStack w="full" align={["center", "center"]} bg="gray">
        <Card w="100%">
          <VStack bg="green.600">
            <Heading>Contact Us</Heading>
          </VStack>
          <VStack p="8">
            <form onSubmit={(event) => submit(event)}>
              <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input
                  type="text"
                  onChange={(event) => setName(event.currentTarget.value)}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Your Email</FormLabel>
                <Input
                  type="email"
                  onChange={(event) => setEmail(event.currentTarget.value)}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Input
                  type="text"
                  onChange={(event) => setSubject(event.currentTarget.value)}
                  required
                />
              </FormControl>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  onChange={(event) => setMessage(event.currentTarget.value)}
                />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </form>
          </VStack>
        </Card>
      </VStack>
    </Box>
  );
};

export default ContactForm;
