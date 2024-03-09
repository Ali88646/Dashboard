import React from "react";
import SideNav from "../../Components/SideNav";
import TopNav from "../../Components/TopNav";
import { Box, Flex } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div>
      <Flex>
        <SideNav />
        <Box flexGrow={1}>
          <TopNav />
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
