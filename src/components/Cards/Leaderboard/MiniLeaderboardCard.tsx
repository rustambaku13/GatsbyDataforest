import React from "react";
import { Box, chakra, Flex, Text } from "@chakra-ui/react";
import { BadgeIcon } from "../../../icons/jsx/badge";
import { Link } from "gatsby";
export const MiniLeaderBoard = chakra(({ className, title }) => {
  return (
    <Box className={className} w="100%">
      <Box pl={4} h="40px" w="100%">
        <Text
          letterSpacing="0.1em"
          fontWeight="500"
          fontSize="200"
          lineHeight="40px"
          color="romanSilver.base"
          as="label"
        >
          {title ? title : "TOP TREES"}
        </Text>
      </Box>
      <Box px={4} h="40px" w="100%">
        <Flex
          alignItems="center"
          fontSize="400"
          w="100%"
          h="100%"
          color="romanSilver.base"
        >
          <Box mr={3}>
            <BadgeIcon color="gold.base" mr={1} fontSize="1.4em" />
          </Box>{" "}
          <Link to="/profile/rustambaku13">
            <Text>rustambaku13</Text>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
});
