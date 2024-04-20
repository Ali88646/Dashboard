import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";
const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex gap={6} flexDirection={{ base: "column", xl: "row" }}>
      <Stack gap={6} p={6} maxW={"24rem"}>
        <Icon as={icon} boxSize={6} color={"p.purple"} />
        <Text textStyle={"h2"} fontWeight={"semibold"}>
          {title}
        </Text>
        <Text textStyle={"p"} fontSize={"sm"} color={"black.60"}>
          {text}
        </Text>
      </Stack>
      {leftComponent}
    </Flex>
  );
};

export default SupportCard;
