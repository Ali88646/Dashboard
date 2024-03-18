import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaRupeeSign } from "react-icons/fa6";
import { PiCurrencyBtcFill } from "react-icons/pi";

const Transactions = () => {
  const transactions = [
    {
      id: "01",
      icon: <FaRupeeSign />,
      text: "PKR Deposite",
      amount: "Rs. 81,123.18",
      timestamp: "2022-06-09 07:06 PM ",
    },
    {
      id: "02",
      icon: <PiCurrencyBtcFill />,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-05-27 12:32 PM ",
    },
    {
      id: "03",
      icon: <FaRupeeSign />,
      text: "PKR Deposite",
      amount: "Rs. 81,123.18",
      timestamp: "2022-06-09 07:06 PM ",
    },
  ];
  return (
    <CustomCard h={"full"}>
      <Text
        font-size="sm"
        color="#666"
        mb={6}
        fontWeight={"bold"}
        fontSize={"14px"}
      >
        Recent Transactions
      </Text>
      <Stack gap={6}>
        {transactions.map((trans, i) => {
          return (
            <>
              <Flex key={trans.id} justifyContent={"space-between"}>
                <HStack gap={5}>
                  <Box
                    boxSize={10}
                    bg="#f3f3f7"
                    borderRadius="full"
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {trans.icon}
                  </Box>

                  <Stack lineHeight={1}>
                    <Text fontWeight={"bold"}>{trans.text}</Text>
                    <Text color={"#797e82"}>{trans.timestamp}</Text>
                  </Stack>
                </HStack>
                <Text fontWeight={"bold"}>{trans.amount}</Text>
              </Flex>
              {i < 2 && (
                <Box width={"full"} height={"1px"} bg={"#e2e2e2"}></Box>
              )}
            </>
          );
        })}
      </Stack>
      <Button
        width={"full"}
        mt={6}
        bg={"#eeeef4"}
        color={"#000"}
        _hover={{ color: "#fff", background: "#333" }}
      >
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
