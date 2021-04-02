import { Box, Button, Flex, Image, Text, Link, VStack } from "@chakra-ui/react";
import React from "react";
import dataforest from "../../images/LogoText.svg";
import github from "../../icons/Github.svg";
import { TaskIcon } from "../../icons/jsx/task";
import { DatasetIcon } from "../../icons/jsx/dataset";
import { CompetitionIcon } from "../../icons/jsx/competition";
import { DiscussionIcon } from "../../icons/jsx/discussions";
import { ChevronDownIcon } from "../../icons/jsx/chevrondown";
import { BadgeIcon } from "../../icons/jsx/badge";
import { Link as GLink, navigate } from "gatsby";
export const SideNav = () => {
  return (
    <Flex
      direction="column"
      boxShadow="side_nav"
      zIndex={2}
      as="nav"
      h="100vh"
      pos="fixed"
      w="264px"
      bg="white"
    >
      <Box as="h1" overflow="hidden" h="88px" w="100%">
        <GLink to="/">
          <Image src={dataforest} h="48px" mt={4} ml={4} />
        </GLink>
      </Box>
      <Box w="100%">
        <Box pl={8} h="40px" w="100%">
          <Text
            letterSpacing="0.1em"
            fontWeight="500"
            fontSize="200"
            lineHeight="40px"
            color="romanSilver.base"
            as="label"
          >
            MENU
          </Text>
        </Box>
        <Box py="4px" px={4} h="56px" w="100%">
          <Button
            onClick={() => {
              navigate("/tasks");
            }}
            leftIcon={<TaskIcon mr={1} fontSize="1.25em" />}
            variant="sideMenu"
          >
            Tasks
          </Button>
        </Box>
        <Box py="4px" px={4} h="56px" w="100%">
          <Button
            leftIcon={<DatasetIcon mr={1} fontSize="1.25em" />}
            variant="sideMenu"
          >
            Datasets
          </Button>
        </Box>
        <Box py="4px" px={4} h="56px" w="100%">
          <Button
            leftIcon={<CompetitionIcon mr={1} fontSize="1.25em" />}
            variant="sideMenu"
          >
            Competitions
          </Button>
        </Box>
        <Box py="4px" px={4} h="56px" w="100%">
          <Button
            leftIcon={<DiscussionIcon mr={1} fontSize="1.25em" />}
            variant="sideMenu"
          >
            Discussions
          </Button>
        </Box>
        <Box py="4px" px={4} h="56px" w="100%">
          <Button
            leftIcon={<ChevronDownIcon mr={1} fontSize="1.25em" />}
            variant="sideMenu"
          >
            More
          </Button>
        </Box>
      </Box>
      <Box w="100%">
        <Box pl={8} h="40px" w="100%">
          <Text
            letterSpacing="0.1em"
            fontWeight="500"
            fontSize="200"
            lineHeight="40px"
            color="romanSilver.base"
            as="label"
          >
            TOP TREES
          </Text>
        </Box>
        <Box px={4} h="40px" w="100%">
          <Flex
            alignItems="center"
            fontSize="400"
            pl={4}
            w="100%"
            h="100%"
            color="romanSilver.base"
          >
            <Box mr={3}>
              <BadgeIcon color="gold.base" mr={1} fontSize="1.4em" />
            </Box>{" "}
            <GLink to="/profile/rustambaku13">
              <Link>rustambaku13</Link>
            </GLink>
          </Flex>
        </Box>
        <Box px={4} h="40px" w="100%">
          <Flex
            alignItems="center"
            fontSize="400"
            pl={4}
            w="100%"
            h="100%"
            color="romanSilver.base"
          >
            <Box mr={3}>
              <BadgeIcon color="gold.base" mr={1} fontSize="1.4em" />
            </Box>{" "}
            <GLink to="/profile/rassel4199">
              <Link>rassel4199</Link>
            </GLink>
          </Flex>
        </Box>
        <Box px={4} h="40px" w="100%">
          <Flex
            alignItems="center"
            fontSize="400"
            pl={4}
            w="100%"
            h="100%"
            color="romanSilver.base"
          >
            <Box mr={3}>
              <BadgeIcon color="gold.base" mr={1} fontSize="1.4em" />
            </Box>{" "}
            <GLink to="/profile/zulfugarverdiyev">
              <Link>zulfugarverdiyev</Link>
            </GLink>
          </Flex>
        </Box>
        <Box px={4} h="40px" w="100%">
          <Flex
            alignItems="center"
            fontSize="400"
            pl={4}
            w="100%"
            h="100%"
            color="romanSilver.base"
          >
            <Box mr={3}>
              <BadgeIcon color="gold.base" mr={1} fontSize="1.4em" />
            </Box>{" "}
            <GLink to="/profile/nigaryus">
              <Link>nigaryus</Link>
            </GLink>
          </Flex>
        </Box>
      </Box>
      <Box h="52px" px={6} mt="auto" py={3} w="100%">
        <Flex justifyContent="space-between" w="100%" h="100%">
          <Text fontSize="300" color="romanSilver.base" as="span">
            @ Dataforest
          </Text>
          <Text fontSize="300" color="romanSilver.base" as="span">
            Help?
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
