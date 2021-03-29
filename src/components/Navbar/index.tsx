import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { Link as GLink } from "gatsby";
import React from "react";
import { SearchIcon } from "../../icons/jsx/search";
import dataforest from "../../images/LogoText.svg";
export const NavbarDefault = () => {
  return (
    <Flex align="center" h="96px" bg="white" as="header">
      <Flex as="nav" maxW="container.xl" w="100%" mx="auto" h="56px">
        <Box as="h1">
          <Image h="56px" src={dataforest} />
        </Box>
        <HStack
          color="text.dark"
          fontSize="500"
          spacing="12"
          align="center"
          mx="auto"
        >
          <GLink to="/tasks">
            <Link as="span">Tasks</Link>
          </GLink>
          <Link boxShadow="elevation1">Datasets</Link>
          <Link>Competitions</Link>
          <Link>Discussions</Link>
        </HStack>

        <Flex align="center" h="100%">
          <IconButton
            boxShadow="none"
            mr={4}
            w="48px"
            borderWidth="1px"
            aria-label="Search"
            variant="outline"
            icon={<SearchIcon fontSize="600" />}
          />

          <GLink to="/login">
            <Button size="md" variant="outline" mr={4}>
              Sign In
            </Button>
          </GLink>
          <GLink to="/signup">
            <Button size="md" variant="primaryBlueBerryBlueDark">
              Register
            </Button>
          </GLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
