import { Box } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data } = useFetch("this is url");

  return <Box>Homeie</Box>;
};

export default Home;
