import { Flex, Text } from "@chakra-ui/core";

const Home = () => {
  return (
    <Flex h="100vh" justify="center" align="center">
      <Text fontSize="6xl" bg="tomato" p="5">
        hello from next.js, chakra, and typescript
      </Text>
    </Flex>
  );
};

export default Home;
