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
import { Link as Glink } from "gatsby";
import { Tag } from "@chakra-ui/tag";
import { Button } from "@chakra-ui/button";

export const PublicTask = chakra(
  ({ task, className }: { task: Task; className?: any }) => {
    return (
      <Flex py="20px" w="100%" bg="white" borderRadius="base">
        <Box pl={6} flex={2}>
          <Glink to="/profile/rustambaku13">
            <Link fontSize="300" color="babyBlueEyes.dark">
              @rustambaku13
            </Link>
          </Glink>
          <Text
            mt={1}
            as="h3"
            fontSize="500"
            color="text.dark"
            fontWeight="500"
          >
            {task.title}
          </Text>
          <Divider my={4} />
          <SimpleGrid spacingY={3} fontSize="300" columns={4}>
            <Box>
              <Text variant="secondary" as="label">
                Filled
              </Text>
              <Text color="black">{`${task.filled} / ${task.quantity}`}</Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Price(per datum)
              </Text>
              <Text color="black">{`$ ${task.price_per_datum}`}</Text>
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
                File Extension
              </Text>
              <Text color="black" textTransform="uppercase">
                {task.extension}
              </Text>
            </Box>
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
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Labels
              </Text>
              <Text color="black">{task.labels}</Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box flex="0 0 1px">
          <Divider orientation="vertical" mx={6} />
        </Box>
        <Box fontSize="300" minW="220px" flex="1 0 0px">
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
          <Text variant="secondary" as="label">
            Expiration Date
          </Text>
          <Text mt={2} color="black">
            {moment(task.deadline).format("DD.MM.YYYY")}
          </Text>
          <Button variant="babyBlue" mt={2} size="xxs">
            View Task
          </Button>
        </Box>
      </Flex>
    );
  }
);
