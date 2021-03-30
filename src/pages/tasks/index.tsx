import {
  Box,
  Button,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  Text,
  TabPanels,
  Tabs,
  Link,
  Tag,
  Stack,
  HStack,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { Link as GLink } from "gatsby";
import * as React from "react";
import { SideNav } from "../../components/SideNav";
import { PublicTask } from "../../components/Task/PublicTask";
import { TopBar } from "../../components/TopBar";
import { dummy_tasks } from "../../dataSource/tasks";
import { ChevronDownIcon } from "../../icons/jsx/chevrondown";
import { CupIcon } from "../../icons/jsx/cup";
import { FilterIcon } from "../../icons/jsx/filter";
import { PlusIcon } from "../../icons/jsx/plus";
const IndexPage = () => {
  return (
    <>
      <SideNav />
      <Flex>
        <Box ml="264px" w="100%" minH="100vh" bg="romanSilver.light">
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
                Create Task
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
                      color="romanSilver.base"
                      mr={4}
                      variant="outline"
                      size="xs"
                      bg="transparent"
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
                    <MenuButton
                      color="romanSilver.base"
                      variant="outline"
                      bg="transparent"
                      size="xs"
                      as={Button}
                    >
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
                <Tag>Card</Tag>
                <Tag>Animals</Tag>
                <Tag>Cards</Tag>
                <Tag>Computer Science</Tag>
                <Tag>Cats</Tag>
                <Tag>Data Analysis</Tag>
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
                  <Box bg="white" boxShadow="elevation_6" w="100%">
                    <Box pl={6} h="40px" w="100%">
                      <Text
                        letterSpacing="0.1em"
                        fontWeight="500"
                        fontSize="200"
                        lineHeight="40px"
                        color="romanSilver.base"
                        as="label"
                      >
                        TOP GATHERERS
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
                          <CupIcon color="gold.base" mr={1} fontSize="1.4em" />
                        </Box>
                        <GLink to="/profile/rustambaku13">
                          <Link>rustambaku13</Link>
                        </GLink>
                        <Text
                          as="span"
                          ml="auto"
                          fontSize="400"
                          fontWeight="500"
                          color="black"
                        >
                          10
                        </Text>
                      </Flex>
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
                          <CupIcon color="gold.base" mr={1} fontSize="1.4em" />
                        </Box>
                        <GLink to="/profile/rustambaku13">
                          <Link>kuyoku</Link>
                        </GLink>
                        <Text
                          as="span"
                          ml="auto"
                          fontSize="400"
                          fontWeight="500"
                          color="black"
                        >
                          7
                        </Text>
                      </Flex>
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
                          <CupIcon color="gold.base" mr={1} fontSize="1.4em" />
                        </Box>
                        <GLink to="/profile/rustambaku13">
                          <Link>abdul-rahman</Link>
                        </GLink>
                        <Text
                          as="span"
                          ml="auto"
                          fontSize="400"
                          fontWeight="500"
                          color="black"
                        >
                          5
                        </Text>
                      </Flex>
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
                          <CupIcon color="gold.base" mr={1} fontSize="1.4em" />
                        </Box>
                        <GLink to="/profile/rustambaku13">
                          <Link>zulfugarverdiyev</Link>
                        </GLink>
                        <Text
                          as="span"
                          ml="auto"
                          fontSize="400"
                          fontWeight="500"
                          color="black"
                        >
                          3
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default IndexPage;
