import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as GLink } from "gatsby";
import React from "react";
import { SearchIcon } from "../../../icons/jsx/search";
import dataforest from "../../../images/WhiteLogoText.svg";
export const NavbarDefault = () => {
  return (
    <Flex  align="center" h="96px" bg="transparent" as="header">
      <Flex as="nav" maxW="container.xl" w="100%" mx="auto" h="56px">
        <Box as="h1">
          <Image h="56px" alt='Dataforest' src={dataforest} />
        </Box>
        <HStack
          color="white"
          fontSize="500"
          spacing="12"
          align="center"
          mx="auto"
          fontFamily='IBM'
          fontWeight='light'
        >
          <GLink to="/tasks">
            <Text as="span">Tasks</Text>
          </GLink>
          <GLink to="/tasks">
            <Text as="span">Datasets</Text>
          </GLink>
          <GLink to="/tasks">
            <Text as="span">Competitions</Text>
          </GLink>
          <GLink to="/tasks">
            <Text as="span">Discussions</Text>
          </GLink>
        </HStack>

        <Flex align="center" h="100%">
          <IconButton
            boxShadow="none"
            mr={4}
            w="12"
            h='12'
            bg='transparent'
            borderRadius='12px'
            borderWidth="1px"
            aria-label="Search"
            variant="outline"
            _hover={{
              color:"black",
              bg:"white"
            }}
            color='white'
            icon={<SearchIcon fontSize="600" />}
          />

          <GLink to="/login">
            <Button _hover={{
              color:"black",
              bg:"white"
            }} fontFamily='IBM' bg='transparent' fontWeight='600' color='white' borderRadius='12px' size="md" variant="outline" mr={4}>
              Sign in
            </Button>
          </GLink>
          <GLink to="/signup">
          <Button fontFamily='IBM' bg='white' fontWeight='600' color='black' borderRadius='12px' size="md" variant="outline" mr={4}>
              Register
            </Button>
          </GLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
