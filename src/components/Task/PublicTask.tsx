import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import moment from "moment";
import { chakra } from "@chakra-ui/system";
import React from "react";
import { Task } from "../../types/task";
import { Link as Glink, navigate } from "gatsby";
import { Tag } from "@chakra-ui/tag";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";

export const PublicTask = chakra(
  ({ task, className }: { task: Task; className?: any }) => {
    return (
      <Flex
        _hover={{ boxShadow: "elevation_6" }}
        cursor="pointer"
        py="20px"
        w="100%"
        onClick={() => {
          navigate(`/tasks/${task.id}`);
        }}
        px={6}
        bg="white"
        borderRadius="base"
      >
        <Box flex={2}>
          <Flex>
            <Box flex={1}>
              <Glink to="/profile/rustambaku13">
                <Link fontSize="400" color="babyBlueEyes.dark">
                  @rustambaku13
                </Link>
              </Glink>

              <Text as="h3" fontSize="600" color="text.dark" fontWeight="500">
                {task.title}
              </Text>
            </Box>
          </Flex>
          <Divider my={4} />
          <SimpleGrid spacingY={3} fontSize="400" columns={4}>
            <Box>
              <Text variant="secondary" as="label">
                File Extension
              </Text>
              <Text color="black" textTransform="uppercase">
                {task.extension}
              </Text>
            </Box>{" "}
            <Box>
              <Text variant="secondary" as="label">
                Image scale
              </Text>
              <Text color="black" textTransform="uppercase">
                {task.image_type}
              </Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Complexity
              </Text>
              <Text textTransform="capitalize" variant={task.complexity}>
                {task.complexity}
              </Text>
            </Box>{" "}
            <Box>
              <Text variant="secondary" as="label">
                Labels
              </Text>
              <Text color="black">{task.labels.length}</Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Filled
              </Text>
              <Text color="black">{`${task.filled} / ${task.quantity}`}</Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Task Type
              </Text>
              <Text textTransform="capitalize" color="black">
                {task.type}
              </Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Dimensions(px)
              </Text>
              <Text color="black">{`${task.width}x${task.height}`}</Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Expiration date
              </Text>
              <Text color="black">
                {moment(task.deadline).format("DD.MM.YYYY")}
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box flex="0 0 1px">
          <Divider orientation="vertical" mx={6} />
        </Box>
        <Box fontSize="400" minW="220px" flex="1 0 0px">
          <Box mb={4}>
            <Text variant="secondary" as="label">
              Price (per datum)
            </Text>
            <Text color="persianGreen.base" fontSize="600" fontWeight="500">
              $ {task.price_per_datum}
            </Text>
          </Box>
          <Text variant="secondary" as="label">
            Tags
          </Text>
          <HStack spacing={0} flexWrap="wrap" my={2}>
            {task.tags.map((tag) => (
              <Tag mb={3} variant="dataforest-tag" size="md" mr="12px">
                {tag}
              </Tag>
            ))}
          </HStack>
        </Box>
      </Flex>
    );
  }
);
