import { Box, Flex, Container } from "@chakra-ui/react";
import React from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {
  return (
    <Flex>
      <SideNav />
      <Box flexGrow={1}>
        <TopNav title={title} />
        <Container maxW={"70rem"} bg={"red"} px={4} mx={"auto"}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
