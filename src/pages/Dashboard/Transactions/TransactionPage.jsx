import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import DashboardLayout from "../../../Components/DashboardLayout";
import { IoMdDownload } from "react-icons/io";
import TransactionTable from "./components/TransactionTable";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Input } from "postcss";
const tabValues = [
  {
    tagName: "All",
    value: 349,
  },
  {
    tagName: "Deposit",
    value: 114,
  },
  {
    tagName: "Withdraw",
    value: 213,
  },
  {
    tagName: "Trade",
    value: 22,
  },
];
const tableData = [
  {
    id: "HDA82NA2H",
    date: "22-06-09",
    time: "07:06 PM",
    type: "PKR Deposit",
    transactionType: "E-Transfer",
    amount: "+81123.10",
    status: "Pending",
  },
  {
    id: "HDA83NA2H",
    date: "22-06-07",
    time: "02:48 PM",
    type: "PKR Withdraw",
    transactionType: " Wire Transfer",
    amount: "+81123.10",
    status: "Processing",
  },
  {
    id: "HDA84NA2H",
    date: "22-06-04",
    time: "09:21 AM",
    type: "Buy",
    transactionType: "",
    amount: "+12.48513391 BTC",
    status: "Cancelled",
  },
  {
    id: "HDA85NA2H",
    date: "22-06-03",
    time: "01:32 PM",
    type: "Sell",
    transactionType: "",
    amount: "-0.36401628 BTC",
    status: "Completed",
  },
  {
    id: "HDA86NA2H",
    date: "22-06-03",
    time: "09:02 AM",
    type: "BTC Deposit",
    transactionType: "",
    amount: "+4.13946104 BTC",
    status: "Completed",
  },
];
const TransactionPage = () => {
  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<Icon as={IoMdDownload} />}>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList>
            {tabValues.map((tab) => {
              return (
                <TabList pb={6} pt={3} fontWeight={"bold"}>
                  <Tab>
                    <HStack>
                      <Text>{tab.tagName}</Text>
                      <Tag colorScheme="gray" borderRadius={"full"}>
                        {(tab.tagName === "All" && tableData.length) ||
                          (tab.tagName === "Deposit" &&
                            tableData.filter(
                              (item) => item.type.indexOf("Deposit") !== -1
                            ).length) ||
                          (tab.tagName === "Withdraw" &&
                            tableData.filter(
                              (item) => item.type.indexOf("Withdraw") !== -1
                            ).length) ||
                          (tab.tagName === "Trade" &&
                            tableData.filter(
                              (item) => item.type.indexOf("Buy") !== -1
                            ).length +
                              tableData.filter(
                                (item) => item.type.indexOf("Sell") !== -1
                              ).length)}
                      </Tag>
                    </HStack>
                  </Tab>
                </TabList>
              );
            })}
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable tableData={tableData} />
            </TabPanel>
            <TabPanel>
              <TransactionTable
                tableData={tableData.filter(function (data) {
                  return data.type.indexOf("Deposit") !== -1;
                })}
              />
            </TabPanel>
            <TabPanel>
              <TransactionTable
                tableData={tableData.filter(function (data) {
                  return data.type.indexOf("Withdraw") !== -1;
                })}
              />
            </TabPanel>
            <TabPanel>
              <TransactionTable
                tableData={[
                  ...tableData.filter(function (data) {
                    return data.type.indexOf("Sell") !== -1;
                  }),
                  ...tableData.filter(function (data) {
                    return data.type.indexOf("Buy") !== -1;
                  }),
                ]}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionPage;
