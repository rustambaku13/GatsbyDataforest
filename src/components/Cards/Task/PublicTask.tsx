import {
  Box,
  Divider,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import { Tag } from "@chakra-ui/tag";
import { Link as Glink, navigate } from "gatsby";
import moment from "moment";
import React from "react";
import { Task } from "../../../types/task";

export const PublicTask = chakra(
  ({ task, className }: { task: Task; className?: any }) => {
    return (
      <Flex
        _hover={{ boxShadow: "elevation_6" }}
        cursor="pointer"
        borderWidth="1px"
        borderColor="outline.medium"
        py="20px"
        w="100%"
        onClick={() => {
          navigate(`/tasks/${task._id.$oid}`);
        }}
        px={6}
        bg="white"
        borderRadius="base"
      >
        <Box flex={2}>
          <Flex>
            <Box flex={1}>
              <Glink to="/profile/rustambaku13">
                <Text mb={1} fontSize="400" color="babyBlueEyes.dark">
                  @rustambaku13
                </Text>
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
              <Text
                textTransform="capitalize"
                variant={task.complexity || "medium"}
              >
                {task.complexity || "medium"}
              </Text>
            </Box>{" "}
            <Box>
              <Text variant="secondary" as="label">
                Labels
              </Text>
              <Text color="black">{10}</Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Filled
              </Text>
              <Text color="black">{`${task.filled} / ${task.quantity?task.quantity:"\u221E"}`}</Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Task Type
              </Text>
              <Text textTransform="capitalize" color="black">
                {task.type || "image"}
              </Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Dimensions(px)
              </Text>
              <Text color="black">{`${task.shape_x}x${task.shape_y}`}</Text>
            </Box>
            <Box>
              <Text variant="secondary" as="label">
                Expiration date
              </Text>
              <Text color="black">
                {/* {moment(task.deadline).format("DD.MM.YYYY")} */}
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <Box flex="0 0 1px">
          <Divider orientation="vertical" mx={6} />
        </Box>
        <Box fontSize="400" minW="220px" flex="1 0 0px">
          <Box mb={4}>
            <Text mb={1} variant="secondary" as="label">
              Price (per datum)
            </Text>
            <Text color="persianGreen.base" fontSize="600" fontWeight="500">
              $ {task.price_per_datum}
            </Text>
          </Box>
          <Text variant="secondary" as="label">
            Tags
          </Text>
          <Box spacing={0} flexWrap="wrap" my={2}>
            {task.tags.map((tag) => (
              <Tag mb={3} variant="dataforest-tag" size="md" mr="12px">
                {tag}
              </Tag>
            ))}
          </Box>
        </Box>
      </Flex>
    );
  }
);
