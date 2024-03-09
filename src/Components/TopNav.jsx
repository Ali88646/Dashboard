import { Container, Flex, Heading } from "@chakra-ui/react";

const TopNav = () => {
  return (
    <Flex boxShadow={"xl"}>
      <Container>
        <Heading>Dashboard</Heading>
      </Container>
    </Flex>
  );
};

export default TopNav;
