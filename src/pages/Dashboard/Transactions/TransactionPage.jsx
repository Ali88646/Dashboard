import { Button, Card, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../../Components/DashboardLayout";
import { IoMdDownload } from "react-icons/io";

const TransactionPage = () => {
  return (
    <DashboardLayout>
      <Flex justify={"end"} mt={6}>
        <Button leftIcon={<Icon as={IoMdDownload} />}>Export CSV</Button>
      </Flex>
      <Card>Transactions</Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
