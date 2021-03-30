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
import * as React from "react";
import { SideNav } from "../../components/SideNav";
import { TopBar } from "../../components/TopBar";
import { ChevronDownIcon } from "../../icons/jsx/chevrondown";
import { FilterIcon } from "../../icons/jsx/filter";
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
                ml="auto"
                size="sm"
                leftIcon={<span>+</span>}
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
                      mr={4}
                      color="romanSilver.base"
                      variant="outline"
                      size="xs"
                      fontSize="500"
                      fontWeight="400"
                      as={Button}
                    >
                      Sort By:
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
                      size="xs"
                      fontSize="500"
                      fontWeight="400"
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
                <Tag variant="dataforest" size="lg">
                  Trains
                </Tag>
                <Tag variant="outline" borderColor="babyBlueEyes.dark">
                  {" "}
                  Animals
                </Tag>
                <Tag>Cards</Tag>
                <Tag>Computer Science</Tag>
                <Tag>Cats</Tag>
                <Tag>Data Analysis</Tag>
              </HStack>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default IndexPage;
