import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Tabs,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Router } from "@reach/router";
import React, { useState } from "react";
import { MiniLeaderBoard } from "../../components/Cards/Leaderboard/MiniLeaderboardCard";
import { PublicTask } from "../../components/Cards/Task/PublicTask";
import { LinkOverlay } from "../../components/Misc/LinkOverlay";
import { SideNav } from "../../components/Navigation/SideNav";
import { TopBar } from "../../components/Navigation/TopBar";
import { dummy_tasks } from "../../dataSource/tasks";
import SpecificTaskPage from "../../dynamic/Task/SpecificTask";
import { ChevronDownIcon } from "../../icons/jsx/chevrondown";
import { FilterIcon } from "../../icons/jsx/filter";
import { PlusIcon } from "../../icons/jsx/plus";

const IndexPage = () => {
  const [tasks, setTasks] = useState("");
  return (
    <>
      <SideNav />
      <Flex>
        <Box ml="264px" w="100%" minH="100vh">
          <TopBar />
          <Box as="main" pt={10} px={18} w="100%">
            <Flex mb={6} h="40px">
              <Heading
                color="black"
                d="inline-block"
                fontSize="700"
                fontWeight="500"
                lineHeight="40px"
              >
                Tasks
              </Heading>

              <Button
                leftIcon={<PlusIcon fontSize="300" />}
                ml="auto"
                size="sm"
                variant="persianGreen"
              >
                <LinkOverlay to="/create-task">Create Task</LinkOverlay>
              </Button>
            </Flex>
            <Tabs>
              <Flex mb={4} w="100%" borderBottomWidth="1px">
                <TabList pos="relative" top="1px" w="auto">
                  <Tab>Images</Tab>
                  <Tab>Video</Tab>
                  <Tab mr="0px">Text</Tab>
                </TabList>
                <Box ml="auto">
                  <Menu>
                    <MenuButton
                      variant="dropdown_button"
                      mr={4}
                      size="xs"
                      as={Button}
                    >
                      Sort by:
                      <Text
                        ml="4px"
                        as="span"
                        fontSize="inherit"
                        fontWeight="500"
                        color="charlestonGreen.dark"
                      >
                        New
                        <ChevronDownIcon
                          ml="4px"
                          _active={{ color: "red" }}
                          fontSize="0.5rem"
                          d="inline-flex"
                        />
                      </Text>{" "}
                    </MenuButton>
                    <MenuList>
                      <MenuItem cursor="pointer" as={Box}>
                        Highest Price
                      </MenuItem>
                      <MenuItem cursor="pointer" as={Box}>
                        Date Added
                      </MenuItem>
                      <MenuItem cursor="pointer" as={Box}>
                        About to expire
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuButton variant="dropdown_button" size="xs" as={Button}>
                      <FilterIcon mr="8px" d="inline-flex" />
                      <Text
                        as="span"
                        fontSize="inherit"
                        fontWeight="500"
                        color="charlestonGreen.dark"
                      >
                        Filters
                        <ChevronDownIcon
                          ml="4px"
                          fontSize="0.5rem"
                          d="inline-flex"
                        />
                      </Text>{" "}
                    </MenuButton>
                    <MenuList>
                      <MenuItem cursor="pointer" as={Box}>
                        Highest Price
                      </MenuItem>
                      <MenuItem cursor="pointer" as={Box}>
                        Date Added
                      </MenuItem>
                      <MenuItem cursor="pointer" as={Box}>
                        About to expire
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
              <HStack spacing={4} w="100%">
                <Tag variant="dataforest-button">Card</Tag>
                <Tag variant="dataforest-button">Animals</Tag>
                <Tag variant="dataforest-button">Cards</Tag>
                <Tag variant="dataforest-button">Computer Science</Tag>
                <Tag variant="dataforest-button">Cats</Tag>
                <Tag variant="dataforest-button">Data Analysis</Tag>
              </HStack>
              <Flex mt={6} w="100%">
                <Box mr={5} flex={1}>
                  <VStack spacing={4}>
                    {dummy_tasks.results.map((task) => (
                      <PublicTask task={task} />
                    ))}
                  </VStack>
                </Box>
                <Box flex="0 0 240px">
                  <MiniLeaderBoard
                    borderWidth="1px"
                    bg="white"
                    boxShadow="elevation_6"
                    w="100%"
                  />
                </Box>
              </Flex>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
const IndexRouter = () => {
  return (
    <Router basepath="/tasks">
      <SpecificTaskPage path="/:taskId/" />
      <IndexPage default />
    </Router>
  );
};
export default IndexRouter;
