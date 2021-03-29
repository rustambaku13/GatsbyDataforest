import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as GLink } from "gatsby";
import * as React from "react";
import dataforest from "../../images/LogoText.svg";

const IndexPage = () => {
  return (
    <>
      <Center p={3} bg="blueberryBlue.light" minH="100vh" minW="100%">
        <Box mx="auto" maxW="592px" w="100%" as="section">
          <Flex w="100%" align="center">
            <GLink to="/">
              <Image src={dataforest} h="48px" />
            </GLink>
            <Text
              color="romanSilver.base"
              ml="auto"
              fontWeight="medium"
              fontSize="500"
            >
              Already have an account? &nbsp;
              <GLink to="/login">
                <Link as="span" color="blueberryBlue.base">
                  Sign In
                </Link>
              </GLink>
            </Text>
          </Flex>
          <Box w="100%" bg="white" mt={6} py={10} px={[5, 5, "72px"]}>
            <Heading
              textAlign="center"
              fontSize="700"
              fontWeight="500"
              mb={10}
              color="charlestonGreen.dark"
              as="h1"
            >
              Sign Up
            </Heading>
            <VStack spacing={8} w="100%" as="form">
              <HStack spacing={8}>
                <FormControl id="first_name">
                  <Input required size="lg" type="text" />
                  <FormLabel>First Name</FormLabel>
                </FormControl>
                <FormControl id="last_name">
                  <Input required size="lg" type="text" />
                  <FormLabel>Last Name</FormLabel>
                </FormControl>
              </HStack>
              <FormControl id="email">
                <Input required size="lg" type="email" />
                <FormLabel>Email address</FormLabel>
              </FormControl>
              <FormControl id="password">
                <Input required size="lg" type="password" />
                <FormLabel>Password</FormLabel>
              </FormControl>
              <FormControl id="repeat_password">
                <Input required size="lg" type="password" />
                <FormLabel>Repeat Password</FormLabel>
              </FormControl>

              <Flex w="100%">
                <Checkbox mb="1px" size="md" mr={2}></Checkbox>
                <Text
                  d="inline-block"
                  color="romanSilver.base"
                  fontSize="400"
                  fontWeight="500"
                >
                  I have read and accepted the{" "}
                  <GLink to="login">
                    <Text as="span" color="blueberryBlue.base">
                      Terms & Conditions
                    </Text>
                  </GLink>
                </Text>
              </Flex>
              <Button
                mb={8}
                type="submit"
                size="lg"
                w="100%"
                fontWeight="500"
                variant="primaryBlueBerryBlueDark"
              >
                Sign in to Dataforest
              </Button>
            </VStack>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default IndexPage;
