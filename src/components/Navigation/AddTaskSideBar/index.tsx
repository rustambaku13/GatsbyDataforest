import { Box, Circle, Flex, Image, Text } from "@chakra-ui/react";
import { Link as GLink } from "gatsby";
import React from "react";
import { RightArrow } from "../../../icons/jsx/right-arrow";
import dataforest from "../../../images/WhiteLogoText.svg";
export const AddTaskSideBar = ({ index }) => {
  return (
    <Flex
      className="add-task-sidebar "
      direction="column"
      boxShadow="side_nav"
      zIndex={2}
      as="nav"
      h="100vh"
      pos="fixed"
      w="264px"
      bg="blueberryBlue.dark"
      color="white"
    >
      <Box as="h1" overflow="hidden" h="88px" mb={8} w="100%">
        <GLink to="/">
          <Image src={dataforest} h="48px" mt={4} ml={4} />
        </GLink>
      </Box>
      <Box color="text.light" w="100%">
        <Box className="item" pl={8} pos="relative">
          <Flex pr={4} alignItems="center" h="56px" w="100%">
            <Circle
              mr={2}
              d="inline-flex"
              fontSize="300"
              h={6}
              w={6}
              borderRadius="50%"
              bg="blueberryBlue.base"
            >
              1
            </Circle>
            Task details
          </Flex>
          <Box className="children">
            <Flex pr={4} alignItems="center" pl={8} h="40px" w="100%">
              Basic Details <RightArrow fontSize="300" ml="auto" />
            </Flex>
            <Flex pr={4} alignItems="center" pl={8} h="40px" w="100%">
              Technical Details <RightArrow fontSize="300" ml="auto" />
            </Flex>
          </Box>
        </Box>
        <Box className="item" pl={8} pos="relative">
          <Flex pr={4} alignItems="center" h="56px" w="100%">
            <Circle
              mr={2}
              d="inline-flex"
              fontSize="300"
              h={6}
              w={6}
              borderRadius="50%"
              bg="blueberryBlue.base"
            >
              2
            </Circle>
            Labels
          </Flex>
        </Box>
      </Box>
      <Box className="item" pl={8} pos="relative">
        <Flex pr={4} alignItems="center" h="56px" w="100%">
          <Circle
            mr={2}
            d="inline-flex"
            fontSize="300"
            h={6}
            w={6}
            borderRadius="50%"
            bg="blueberryBlue.base"
          >
            3
          </Circle>
          Payment
        </Flex>
      </Box>
      <Box h="52px" px={6} mt="auto" py={3} w="100%">
        <Flex justifyContent="space-between" w="100%" h="100%">
          <Text fontSize="300" color="blueberryBlue.light" as="span">
            @ Dataforest
          </Text>
          <Text fontSize="300" color="blueberryBlue.light" as="span">
            Help?
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
