import {
  Box,
  Center,
  chakra,
  Flex,
  Text,
  Image,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { Submission } from "../../../types/submission";
/**
 * Not Used Right now
 */
export const SubmissionCard = chakra(
  ({ className, submission }: { className?: any; submission: Submission }) => {
    return (
      <Flex
        boxShadow="elevation_6"
        className={className}
        p={2}
        bg="white"
        h="72px"
        borderRadius="base"
      >
        <Center mr={4} borderWidth="1px" flex="0 0 80px" borderRadius="base">
          <Image maxH="100%" maxW="100%" src={submission.data.value} />
        </Center>
        <Flex flexDir="column" flex={1}>
          <Text fontWeight="500" fontSize="300">
            {submission.metaData.name}
          </Text>
          <Flex alignItems="center" mt="auto" w="100%">
            <Badge variant={submission.state} d="inline-flex">
              {submission.state}
            </Badge>
            <Text ml="auto" as="span" variant="secondary" fontSize="300">
              12.09.21
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }
);
