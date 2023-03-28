import { Box, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      h="6rem"
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      position="sticky"
    >
      <Box>
        <Heading fontFamily={"Cinzel, serif"} fontSize={"5xl"} fontWeight="700">
          Workout Buddy
        </Heading>
      </Box>

      <Box w={"350px"}>
        <Flex justifyContent={"space-between"}>
          <Box letterSpacing={"1.2px"}>HOME</Box>
          <Box letterSpacing={"1.2px"}>LOGIN</Box>
          <Box letterSpacing={"1.2px"}>SIGNUP</Box>
          <Box letterSpacing={"1.2px"}>LOGOUT</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
