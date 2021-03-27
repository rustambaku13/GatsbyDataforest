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
import github from "../../icons/Github.svg";
import google from "../../icons/Google.svg";
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
              Dont have an account? &nbsp;
              <GLink to="/signup">
                <Link as="span" color="blueberryBlue.base">
                  Sign Up
                </Link>
              </GLink>
            </Text>
          </Flex>
          <Box w="100%" bg="white" my={6} py={10} px={[5, 5, "72px"]}>
            <Heading
              textAlign="center"
              fontSize="700"
              fontWeight="500"
              mb={10}
              color="charlestonGreen.dark"
              as="h1"
            >
              Sign In
            </Heading>
            <VStack spacing={8} w="100%" as="form">
              <FormControl id="email">
                <Input required size="lg" type="email" />
                <FormLabel>E-mail address</FormLabel>
              </FormControl>
              <FormControl id="password">
                <Input required size="lg" type="password" />
                <FormLabel>Password</FormLabel>
              </FormControl>

              <VStack mb={8} w="100%" spacing={4}>
                <Button
                  type="submit"
                  fontWeight="500"
                  size="lg"
                  w="100%"
                  variant="primaryBlueBerryBlueBase"
                >
                  Sign in to Dataforest
                </Button>
                <Button
                  leftIcon={<Image mr={4} src={google} />}
                  type="submit"
                  size="lg"
                  w="100%"
                  variant="outline_md"
                >
                  Sign in with Google
                </Button>
                <Button
                  leftIcon={<Image mr={4} src={github} />}
                  type="submit"
                  size="lg"
                  w="100%"
                  variant="black"
                >
                  Sign in with GitHub
                </Button>
              </VStack>
            </VStack>
          </Box>
          <Text
            fontWeight="500"
            color="blueberryBlue.base"
            fontSize="500"
            w="100%"
            textAlign="center"
          >
            <GLink to="/password">
              <Link as="span">Forgot your password?</Link>
            </GLink>
          </Text>
        </Box>
      </Center>
    </>
  );
};

export default IndexPage;
