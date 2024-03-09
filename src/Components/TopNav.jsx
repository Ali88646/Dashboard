import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
const TopNav = () => {
  const menuItemText = ["Profile", "Home", "Support", "Logout"];
  return (
    <Box>
      <HStack
        maxW={"80rem"}
        h={64 / 4}
        justify={"space-between"}
        px={114 / 4}
        mx={"auto"}
      >
        <Heading fontSize={"28px"} fontWeight={"bold"}>
          Dashboard
        </Heading>
        <Menu>
          <MenuButton as={Button}>
            <Icon as={FaUserCircle} fontSize={"24px"} />
          </MenuButton>
          <MenuList
            width={"15vw"}
            bg={"#f3f3f7"}
            padding={3}
            borderRadius={10}
            boxShadow={"sm"}
          >
            {menuItemText.map((items) => (
              <MenuItem
                color={"#777"}
                _hover={{ bg: "#fff", color: "#000" }}
                padding={3}
                borderRadius={5}
              >
                {items}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
