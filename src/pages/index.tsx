import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Heading, Text, Image } from "@chakra-ui/react";
import * as React from "react";
import { NavbarDefault } from "../components/Navigation/Navbar";
import landing_bg from "../images/landing_header_bg.png";
const IndexPage = () => {
  return (
    <>
      <NavbarDefault />
      <Center
        bgGradient="linear(to-b,#F1C6F8,#B6D4FD)"
        h="640px"
        mx="auto"
        pos="relative"
        borderRadius="base"
        as="section"
        overflow="hidden"
        maxW="full"
      >
        <Image
          zIndex={0}
          src={landing_bg}
          pos="absolute"
          w="100%"
          bottom="0px"
        />
        <Box
          h="340px"
          w="340px"
          zIndex={0}
          borderRadius="50%"
          sx={{ filter: "blur(100px)" }}
          pos="absolute"
          top="-240px"
          right="-240px"
          bg="#F9C615"
          opacity="0.4"
        ></Box>
        <Flex zIndex={1} maxW="592px" direction="column">
          <Heading
            fontSize="hb4"
            textAlign="center"
            mb={4}
            color="text.dark"
            as="h1"
          >
            Single venue for all AI related demands
          </Heading>
          <Text textAlign="center" mb={8} fontSize="600" color="text.dark">
            Access our ever growing dataforest community and find customized
            solutions.{" "}
          </Text>
          <Box mx="auto">
            <Button mr={6} variant="primaryBlueBerryBlueDark" size="lg">
              Try dataforest
            </Button>
            <Button variant="outline" size="lg">
              Earn Money
            </Button>
          </Box>
        </Flex>
      </Center>
      <Flex py="100px" as="section" maxW="container.xl" mx="auto">
        <Box pt="40px" maxW="488px" flex={1}>
          <Heading
            as="h2"
            mb={4}
            fontSize="hb2"
            fontWeight="semibold"
            color="text.dark"
          >
            Complete tasks <br /> & earn money
          </Heading>
          <Text fontSize="600" color="text.medium">
            Earn pocket money through completing daily data tasks. Upload your
            data once make passive income everytime your data gets requested.
          </Text>
        </Box>
        <Center
          ml="auto"
          borderRadius="base"
          bg="babyBlueEyes.base"
          h="400px"
          maxW="592px"
          flex={1}
          pos="relative"
        >
          <Box
            boxShadow="md"
            left="20%"
            bottom="10%"
            pos="absolute"
            bg="white"
            borderRadius="base"
            h="196px"
            w="196px"
          ></Box>
          <Box
            pos="absolute"
            right="20%"
            top="10%"
            bg="white"
            borderRadius="base"
            h="280px"
            w="280px"
          ></Box>
        </Center>
      </Flex>
    </>
  );
};

export default IndexPage;
