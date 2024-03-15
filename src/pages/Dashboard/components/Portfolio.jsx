import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { TbInfoCircle } from "react-icons/tb";
import { MdFileDownload, MdFileUpload } from "react-icons/md";
const Portfolio = () => {
  return (
    <HStack
      bg={"#fff"}
      borderRadius={"xl"}
      p={6}
      justify={"space-between"}
      flexDirection={{ base: "column", lg: "row" }}
      align={{ base: "start" }}
    >
      <HStack
        spacing={{ base: 2, lg: 16 }}
        flexDirection={{ base: "column", lg: "row" }}
        align={{ base: "start" }}
      >
        {/* Portfolio balance */}
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Total Portfolio Value</Text>
            <Icon as={TbInfoCircle} />
          </HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>
            Rs. 112,312.24
          </Text>
        </Stack>
        {/* wallet balance */}
        <Stack>
          <HStack color={"black.80"}>
            <Text fontSize={"sm"}>Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={4}
            flexDirection={{ base: "column", sm: "row" }}
            align={{ base: "start", sm: "center" }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                22.39401000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                1,300.00
              </Text>
              <Tag colorScheme="gray">PKR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      {/* buttons */}
      <HStack>
        <ButtonComponent text="Deposite" icons={MdFileDownload} />
        <ButtonComponent text={"Deposite"} icons={MdFileUpload} />
      </HStack>
    </HStack>
  );
};

export default Portfolio;

function ButtonComponent({ icons, text }) {
  return (
    <Button>
      <HStack>
        <Icon as={icons} />
        <Text>{text}</Text>
      </HStack>
    </Button>
  );
}
