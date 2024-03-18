import {
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsGraphUpArrow } from "react-icons/bs";
import { ButtonComponent } from "./Portfolio";
import { FaPlus, FaMinus } from "react-icons/fa";

const Price = () => {
  const graphTimes = [
    "07:15 PM",
    "12:55 AM",
    "6:35 AM",
    "12:15 PM",
    "05:55 PM",
  ];
  const tabTimes = ["1 H", "1 D", "1 W", "1 M"];
  return (
    <CustomCard>
      <HStack justify={"space-between"} align={"start"}>
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Current Price</Text>
          </HStack>
          <HStack
            spacing={4}
            flexDirection={{ base: "column", sm: "row" }}
            align={{ base: "start", sm: "center" }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                Rs. 59.0901000
              </Text>
              <HStack color={"green.500"} fontWeight={"medium"}>
                <Icon as={BsGraphUpArrow} />
                <Text fontSize={"sm"}>22%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <ButtonComponent text="Buy" icons={FaPlus} />
          <ButtonComponent text="Sell" icons={FaMinus} />
        </HStack>
      </HStack>
      <Tabs variant="soft-rounded">
        <Flex justifyContent={"end"}>
          <TabList bg={"black.5"} borderRadius={6} p={1}>
            {tabTimes.map((tabTime) => (
              <Tab
                _selected={{ bg: "#fff" }}
                key={tabTime}
                borderRadius={5}
                fontSize={"sm"}
              >
                {tabTime}
              </Tab>
            ))}
          </TabList>
        </Flex>
      </Tabs>
      <Image w={"100%"} src="/graph.png" mt={"3rem"} />
      <HStack justifyContent={"space-between"} mt={3} color={"gray"}>
        {graphTimes.map((time, i) => {
          return <Text key={i * 345}>{time}</Text>;
        })}
      </HStack>
    </CustomCard>
  );
};

export default Price;
