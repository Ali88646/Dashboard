import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoMail } from "react-icons/io5";
const SupportCard = () => {
  return (
    <Flex>
      <Stack>
        <Icon as={IoMail} boxSize={6} color={"p.purple"} />
        <Text textStyle={"h2"} fontWeight={"semibold"}>
          Contact Us
        </Text>
        <Text textStyle={"p"} fontSize={"sm"} color={"black.60"}>
          Have a question or just to know mpre? feel free to reach out to us.
        </Text>
      </Stack>
      <Card p={6} borderRadius={"1rem"}>
        <Stack spacing={6}>
          <Text fontWeight={"semibold"} fontSize={"sm"}>
            You will receive response within 24 hours of time of submit.
          </Text>
          <HStack>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input type="text" />
            </FormControl>
          </HStack>
          <Stack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="text" placeholder="name@host.com" />
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
          </Stack>
          <flex>
            <Checkbox defaultChecked>
              <Text fontSize={"xs"}>
                I agree with
                <Box as="span" color={"p.purple"}>
                  Terms & Conditions
                </Box>
              </Text>
            </Checkbox>
          </flex>
          <Stack>
            <Button disabled={true}>Send a message</Button>
            <Button colorScheme="gray">Book meeting</Button>
          </Stack>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
