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
const TopNav = ({ title }) => {
  const menuItemText = ["Profile", "Home", "Support", "Logout"];
  return (
    <Box>
      <HStack maxW={"70rem"} h={64 / 4} justify={"space-between"} mx={"auto"}>
        <Heading fontSize={"28px"} fontWeight={"bold"}>
          {title}
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
            {menuItemText.map((items, i) => (
              <MenuItem
                key={i}
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
