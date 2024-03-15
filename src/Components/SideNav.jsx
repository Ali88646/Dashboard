import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TbTransferVertical } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
  const navLinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },
    { icon: TbTransferVertical, text: "Transactions", link: "/transactions" },
  ];
  return (
    <Stack
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      bg={{
        lg: "none",
        base: "#ccc",
      }}
      h="100vh"
      justifyContent={"space-between"}
    >
      <Box>
        <Heading textAlign="center" as="h1" fontSize="20px" pt="3.5rem">
          @Admin Dashboard
        </Heading>
        <Box mt={6} mx={3}>
          {navLinks.map((nav) => {
            return (
              <HStack
                borderRadius={"10px"}
                mx="3"
                key={nav.text}
                py={3}
                px={4}
                _hover={{
                  bg: "#f3f3f7",
                  color: "#171717",
                  cursor: "pointer",
                }}
                color={"#797e82"}
              >
                <Icon as={nav.icon} />
                <Text fontSize={"14px"} fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            );
          })}
        </Box>
      </Box>

      <Box mt={6} mx={3} mb={6}>
        <HStack
          borderRadius={"10px"}
          mx="3"
          py={3}
          px={4}
          _hover={{
            bg: "#f3f3f7",
            color: "#171717",
            cursor: "pointer",
          }}
          color={"#797e82"}
        >
          <Icon as={BiSupport} />
          <Text fontSize={"14px"} fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideNav;
