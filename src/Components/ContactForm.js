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
  Text,
  useToast
} from "@chakra-ui/react";

import axios from "axios";

const ContactForm = () => {
  const toast = useToast()
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  
  let emailError = false
  let nameError = false
  let messageError = false

  const submit = async (event) => {
    event.preventDefault();

    if(!email || !name || !message) {
      emailError = true
      nameError = true
      messageError = true

      toast({
        position: 'bottom-center',
        isClosable: true,
        render: () => (
          <Box color='white' p={3} bg='red.300'>
            Email, Name, and Message is required.
          </Box>
        ),
      })
    } else {
      const response = await axios
      .post("https://my-json-server.typicode.com/tundeojediran/contacts-api-server/inquiries",
      {
        name: name,
        email: email,
        subject: subject,
        message: message
        }
      );
      toast({
        position: 'bottom-center',
        isClosable: true,
        render: () => (
          <Box color='white' p={3} bg='green.500'>
            Successfully Added
          </Box>
        ),
      })
      setName('')
      setEmail('')
      setMessage('')
      setSubject('')
    }    
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
              <FormControl mb='4'>
                <FormLabel>Your Name</FormLabel>
                <Input
                  isInvalid={{nameError}}
                  type="text"
                  onChange={(event) => setName(event.currentTarget.value)}
                />
               
              </FormControl>
              <FormControl mb='4'>
                <FormLabel>Your Email</FormLabel>
                <Input
                  type="email"
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mb='4'>
                <FormLabel>Subject</FormLabel>
                <Input
                  type="text"
                  onChange={(event) => setSubject(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mb='4'>
              <FormLabel>Message</FormLabel>
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
