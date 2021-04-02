import {
  Box,
  HStack,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Button,
} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import { Tag } from "@chakra-ui/tag";
import { Link as Glink } from "gatsby";
import React, { useEffect } from "react";
import moment from "moment";
import { Task } from "../../types/task";

import facebook from "../../icons/facebook.svg";
import mail from "../../icons/mail.svg";
import link from "../../icons/link.svg";
import twitter from "../../icons/twitter.svg";
import { TrackIcon } from "../../icons/jsx/track";
import { UploadIcon } from "../../icons/jsx/upload";
import {
  generateLabelRenders,
  LabelsDropDown,
} from "../Dropdown/LabelsDropDown";

export const BigPublicTak = chakra(
  ({ task, className }: { task: Task; className?: any }) => {
    useEffect(() => {
      if (!task.render) {
        generateLabelRenders({ task });
      }
    }, [task]);
    return (
      <Box mb={6} className={className} w="100%">
        <VStack alignItems="start" w="100%" spacing={0}>
          <Glink to="/profile/rustambaku13">
            <Link fontSize="300" color="babyBlueEyes.dark">
              @rustambaku13
            </Link>
          </Glink>{" "}
          <Text
            as="h1"
            fontSize="700"
            color="black"
            mt={2}
            mb={4}
            fontWeight="500"
          >
            {task.title}
          </Text>{" "}
          <HStack spacing={4} w="100%">
            {task.tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </HStack>
        </VStack>
        <SimpleGrid my={6} fontSize="500" spacingY={4} spacingX={6} columns={4}>
          <Box gridColumn="1 / span 3">
            <Text variant="secondary" as="label">
              Description
            </Text>
            <Text mt={1} color="black">
              {task.description}
            </Text>
          </Box>
          <Box>
            <Text variant="secondary" as="label">
              Expiration Date
            </Text>
            <Text mt={1} color="black">
              {moment(task.deadline).format("DD.MM.YYYY")}
            </Text>
          </Box>
          <Box>
            <Text variant="secondary" as="label">
              Filled
            </Text>
            <Text
              mt={1}
              color="black"
            >{`${task.filled} / ${task.quantity}`}</Text>
          </Box>
          <Box>
            <Text variant="secondary" as="label">
              Price
            </Text>
            <Text mt={1} color="black">
              $ {task.price_per_datum} / datum
            </Text>
          </Box>
          <Box>
            <Text variant="secondary" as="label">
              Task Type
            </Text>
            <Text mt={1} textTransform="capitalize" color="black">
              {task.type}
            </Text>
          </Box>{" "}
          <Box>
            <Text variant="secondary" as="label">
              Dimensions(px)
            </Text>
            <Text mt={1} color="black">{`${task.width}x${task.height}`}</Text>
          </Box>{" "}
          <Box>
            <Text variant="secondary" as="label">
              File Extension
            </Text>
            <Text mt={1} color="black" textTransform="uppercase">
              {task.extension}
            </Text>
          </Box>{" "}
          <Box>
            <Text variant="secondary" as="label">
              Image scale
            </Text>
            <Text mt={1} color="black" textTransform="uppercase">
              {task.image_type}
            </Text>
          </Box>{" "}
          <Box>
            <Text variant="secondary" as="label">
              Complexity
            </Text>
            <Text mt={1} textTransform="capitalize" variant={task.complexity}>
              {task.complexity}
            </Text>
          </Box>{" "}
          <Box>
            <Text variant="secondary" as="label">
              Share
            </Text>
            <HStack mt={1} spacing={3}>
              <Image src={facebook} />
              <Image src={twitter} />
              <Image src={mail} />
              <Image src={link} />
            </HStack>
          </Box>
        </SimpleGrid>
        <Box w="100%" mb={6}>
          <LabelsDropDown task={task} />
        </Box>
        <Button
          mr={4}
          bg="transparent"
          variant="outline"
          color="babyBlueEyes.dark"
          borderColor="babyBlueEyes.dark"
          size="sm"
        >
          <TrackIcon mr={1} />
          Track
        </Button>{" "}
        <Button variant="babyBlue" size="sm">
          <UploadIcon mr={1} /> Upload Data
        </Button>
      </Box>
    );
  }
);
