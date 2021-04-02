import { Box, Flex, Spinner, Text, Link, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getTask } from "../../api/tasks";
import { SideNav } from "../../components/SideNav";
import { Link as GLink } from "gatsby";
import { BigPublicTak } from "../../components/Task/BigPublicTask";
import { TopBar } from "../../components/TopBar";
import { CupIcon } from "../../icons/jsx/cup";
import { generateLabelRenders } from "../../components/Dropdown/LabelsDropDown";
const SpecificTaskPage = ({ taskId }) => {
  const [task, setTask] = useState(null);
  useEffect(() => {
    getTask({ taskId })
      .then((task) => {
        setTask(task);
      })
      .catch(() => {})
      .finally(() => {});
  }, []);
  return (
    <>
      <SideNav />
      <Flex>
        <Box ml="264px" w="100%" minH="100vh" bg="romanSilver.light">
          <TopBar />
          <Box as="main" pt={10} px={18} w="100%">
            <Flex w="100%">
              <Box flex={1} mr={5}>
                {task ? <BigPublicTak task={task} /> : <Spinner />}
                <Heading
                  mb={4}
                  as="h3"
                  fontSize="600"
                  fontWeight="medium"
                  color="black"
                >
                  My submissions
                </Heading>
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
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SpecificTaskPage;
