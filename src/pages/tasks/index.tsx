import {
  Box,
  Button,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import * as React from "react";
import { SideNav } from "../../components/SideNav";
import { TopBar } from "../../components/TopBar";
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
              <TabList>
                <Tab>Images</Tab>
                <Tab>Videos</Tab>
                <Tab>Text</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>one!</p>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default IndexPage;
