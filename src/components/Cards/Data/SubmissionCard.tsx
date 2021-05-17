import {
  Box,
  Center,
  chakra,
  Flex,
  Text,
  Image,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import { SUBMISSION_STATE } from "../../../helpers/constants";
import { Submission } from "../../../types/submission";
/**
 * Not Used Right now
 */
export const SubmissionCard = chakra(
  ({ className, submission,state }: { className?: any; submission: Submission,state:number }) => {
    return (
      <Flex
        boxShadow="elevation_6"
        className={className}
        p={2}
        bg="white"
        h="72px"
        borderRadius="base"
      >
        <AspectRatio ratio={1/2} mr={4} borderWidth="1px" flex="0 0 80px" borderRadius="base">
          <Image maxH="100%" maxW="100%" src={submission.submission} />
        </AspectRatio>
        <Flex flexDir="column" flex={1}>
          <Text fontWeight="500" fontSize="300">
            {submission.metadata?.name}
          </Text>
          <Flex alignItems="center" mt="auto" w="100%">
            <Badge variant={SUBMISSION_STATE[state]?.[0]} d="inline-flex">
              {SUBMISSION_STATE[state]?.[1]}
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
