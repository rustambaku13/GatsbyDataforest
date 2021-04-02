import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NotificationIcon } from "../../icons/jsx/notification";
import { ChevronDownIcon } from "../../icons/jsx/chevrondown";
import { SearchIcon } from "../../icons/jsx/search";
export const TopBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Flex
      zIndex={2}
      align="center"
      boxShadow="top_nav"
      h="80px"
      bg="white"
      as="header"
    >
      <Flex as="nav" maxW="full" px={18} w="100%" mx="auto" h="48px">
        <HStack>
          <Text mr={1} fontSize="600" variant="secondary" as="label">
            <SearchIcon />
          </Text>
          <Input
            fontSize="500"
            fontWeight="400"
            _placeholder={{ fontSize: "500", fontWeight: "400" }}
            variant="unstyled"
            placeholder="Search in website..."
          />
        </HStack>
        <Flex ml="auto" align="center" h="100%">
          <IconButton
            mr={6}
            aria-label="Notifications"
            variant="unstyled"
            fontSize="600"
            color="romanSilver.base"
            minW="unset"
            icon={<NotificationIcon />}
          ></IconButton>
          <Avatar ml={1} mr={2} src="https://robohash.org/zulfugar" />

          <Menu
            isOpen={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
          >
            <MenuButton fontSize="500" display="flex" alignItems="center">
              <Text mr={2} d="inline-block" fontWeight="500" color="text.dark">
                Zulfugar Verdiyev
              </Text>
              <ChevronDownIcon
                mb="3px"
                d="inline-block"
                transition="0.2s ease-in-out"
                style={open ? { transform: "rotate(-180deg)" } : {}}
              />
            </MenuButton>
            <MenuList zIndex={999} className="navbar-profile-menu">
              <MenuItem>Profile</MenuItem>

              <MenuItem>Tasks</MenuItem>
              <MenuItem>Competitions</MenuItem>
              <MenuItem>Datasets</MenuItem>
              <MenuDivider />

              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
};
