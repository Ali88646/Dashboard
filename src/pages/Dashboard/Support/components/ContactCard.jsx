import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
const ContactCard = () => {
  return (
    <Card p={6} borderRadius={"1rem"} flexGrow={"1"}>
      <Stack spacing={6}>
        <Text fontWeight={"semibold"} fontSize={"sm"}>
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack flexDirection={{ base: "column", md: "row" }}>
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
          <Button fontSize={"sm"}>Send a message</Button>
          <Button colorScheme="gray" fontSize={"sm"}>
            Book meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
