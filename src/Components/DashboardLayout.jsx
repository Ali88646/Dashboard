import { Box, Flex, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <SideNav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} onOpen={onOpen} />
        <Container maxW={"70rem"} bg={"red"} px={4} mx={"auto"}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
