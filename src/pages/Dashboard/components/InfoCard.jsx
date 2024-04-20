import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({
  tagText,
  tagBg,
  tagColor,
  customBg,
  cardText,
  textColor,
}) => {
  return (
    <CustomCard bg={customBg} h={"full"} flex={1} height={"full"}>
      <Tag
        bg="p.purple"
        color={tagColor}
        borderRadius={"full"}
        background={tagBg}
      >
        {tagText}
      </Tag>
      <Text mt={4} color={textColor} fontSize={16}>
        {cardText}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
