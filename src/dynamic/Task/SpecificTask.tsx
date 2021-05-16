import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Link as GLink } from "gatsby";
import { SideNav } from "../../components/Navigation/SideNav";
import { SubmissionCard } from "../../components/Cards/Data/SubmissionCard";
import { TopBar } from "../../components/Navigation/TopBar";
import React, { useEffect, useRef, useState } from "react";
import { getTask, getTaskSubmissions } from "../../api/tasks";
import { BigPublicTask } from "../../components/Cards/Task/BigPublicTask";
import { dummy_submissions } from "../../dataSource/submissions";
import { range } from "../../helpers/misc";
import { ChevronDownIcon } from "../../icons/jsx/chevrondown";
import { CupIcon } from "../../icons/jsx/cup";
import { DateIcon } from "../../icons/jsx/date";
import { DeleteIcon } from "../../icons/jsx/delete";
import { GridIcon } from "../../icons/jsx/grid";
import { ListIcon } from "../../icons/jsx/list";
import { SelectAllIcon } from "../../icons/jsx/selectall";
import { abbreviate } from "../../helpers/abbreviate";
import { Task } from "../../types/task";
import { MiniPreloader } from "../../components/Preloaders/MiniPreloader";
import InfiniteScroll from "react-infinite-scroll-component";
import { Submission } from "../../types/submission";
const PublicSpecificTask = ({ task }:{task:Task}) => {
 
 
  const [submissionsLoading,setSubmissionsLoading] = useState(true)
  const [submissions,setSubmissions] = useState([])
  const [selectedData, setSelectedData] = useState([]);
  const [selectable, setSelectable] = useState(false);
  const page = useRef(1);
 
  
  const fetchTaskSubmission = ()=>{
    setSubmissionsLoading(true)
    getTaskSubmissions({taskId:task._id.$oid,page:page.current}).then(({data})=>{  
          
      setSubmissions([...submissions,...data.data]);
    }).catch(()=>{

    }).finally(()=>{  
      setSubmissionsLoading(false)
    })
  }
  useEffect(fetchTaskSubmission,[task])
  return (
    <>
      <SideNav />
      <Flex>
        <Box ml="264px" w="100%" minH="100vh">
          <TopBar />
          <Box as="main" pt={10} px={18} w="100%">
            <Flex w="100%">
              <Box flex={1} mr={5}>
                <Box mb={6} color="romanSilver.base">
                  <GLink to="/tasks">
                    <Text
                      as="span"
                      color="babyBlueEyes.dark"
                      textDecor="underline"
                    >
                      Tasks
                    </Text>
                  </GLink>
                  &nbsp; &#183;&nbsp;
                  <Text as="span">{abbreviate(task?.title || "")}</Text>
                </Box>
                {task ? <BigPublicTask task={task} /> : <Spinner />}
                <Heading
                  mb={4}
                  as="h3"
                  fontSize="600"
                  fontWeight="medium"
                  color="black"
                >
                  My submissions
                </Heading>
                <Tabs variant="buttons">
                  <Flex borderBottomWidth="1px" pb={3} w="100%">
                    <Button mr={4} variant="dropdown_button" size="xs">
                      Sort by: &nbsp;
                      <Text
                        as="span"
                        fontSize="inherit"
                        fontWeight="500"
                        color="charlestonGreen.dark"
                      >
                        Status
                        <ChevronDownIcon
                          ml="4px"
                          fontSize="0.5rem"
                          d="inline-flex"
                        />
                      </Text>
                    </Button>
                    <Button mr={4} variant="dropdown_button" size="xs">
                      <DateIcon mr="8px" />
                      <Text
                        as="span"
                        fontSize="inherit"
                        fontWeight="500"
                        color="charlestonGreen.dark"
                      >
                        Any date
                        <ChevronDownIcon
                          ml="4px"
                          fontSize="0.5rem"
                          d="inline-flex"
                        />
                      </Text>
                    </Button>
                    <Button
                      _hover={{
                        borderColor: "babyBlueEyes.dark",
                        bg: "white",
                      }}
                      borderColor={
                        selectable ? "babyBlueEyes.dark" : "outline.medium"
                      }
                      mr={4}
                      onClick={() => {
                        setSelectable((s) => !s);
                      }}
                      variant="dropdown_button"
                      size="xs"
                    >
                      <SelectAllIcon
                        color={selectable ? "babyBlueEyes.dark" : "inherit"}
                        mr="8px"
                      />
                      <Text
                        color="charlestonGreen.dark"
                        as="span"
                        fontSize="inherit"
                        fontWeight="500"
                      >
                        Select
                      </Text>
                    </Button>
                    <Button
                      d={selectable ? "flex" : "none"}
                      variant="dropdown_button"
                      size="xs"
                    >
                      <DeleteIcon mr="8px" />
                      <Text
                        as="span"
                        fontSize="inherit"
                        fontWeight="500"
                        color="charlestonGreen.dark"
                      >
                        Delete
                      </Text>
                    </Button>

                    <TabList ml="auto">
                      <Tab mr={2}>
                        <ListIcon />
                      </Tab>
                      <Tab>
                        <GridIcon />
                      </Tab>
                    </TabList>
                  </Flex>

                  <TabPanels>
                    <TabPanel p={0} bg="white" my={4}>
                      {submissionsLoading?<MiniPreloader/>:null}
                      <Flex
                        d={selectable ? "flex" : "none"}
                        py={3}
                        px={4}
                        borderBottomWidth="1px"
                      >
                        <Checkbox
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedData(
                                [
                                  ...range(0, dummy_submissions.length),
                                ].map((item) => item.toString())
                              );
                              return;
                            }
                            setSelectedData([]);
                          }}
                          variant="light"
                        />
                        <Text
                          flex={1}
                          fontSize="300"
                          fontWeight="500"
                          variant="secondary"
                          textAlign="right"
                        >
                          Select all
                        </Text>
                      </Flex>
                      <CheckboxGroup
                        onChange={(e) => {
                          setSelectedData(e);
                        }}
                        value={selectedData}
                      >
                        {submissions.map((data:Submission, index) => {
                          console.log(data,data.tasks,data.tasks?.[task._id.$oid]);
                          
                          return (
                            
                  
                            <Flex px={4} borderBottomWidth="1px">
                              <Checkbox
                                d={selectable ? "flex" : "none"}
                                value={`${index}`}
                                variant="light"
                              />
                              <SubmissionCard
                                flex={1}
                                pr={0}
                                pl={4}
                                state={data.tasks?.[task._id.$oid]}
                                h="64px"
                                borderRadius="none"
                                cursor="pointer"
                                submission={data}
                              />
                            </Flex>
                          );
                        })}
                      </CheckboxGroup>
                    </TabPanel>
                    <TabPanel p={0} my={4}>
                      <SimpleGrid
                        columns={3}
                        flexWrap="wrap"
                        spacing={3}
                        w="100%"
                      >
                        {submissions.map((data) => {
                          return (
                            <SubmissionCard
                              cursor="pointer"
                              submission={data}
                            />
                          );
                        })}
                      </SimpleGrid>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
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

const SpecificTaskPage =  ({taskId})=>{

  const [task,setTask] = useState(null)
  useEffect(() => {
    getTask({ taskId })
      .then(({data}) => {
        setTask(data);
      })
      .catch(() => {})
      .finally(() => {});
  }, []);

  if(!task)return null
  return <PublicSpecificTask task={task}/>
}
export default SpecificTaskPage;
