import { Box, Heading, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Workout from "../comps/Workout";
import WorkoutForm from "../comps/Form";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  const { data } = useFetch("http://localhost:4000/api/workout");

  useEffect(() => {
    setWorkouts(data);
  }, [data]);
  return (
    <Box>
      <Flex justify={"space-around"}>
        <Box>
          {workouts.data ? (
            workouts.data.map((workout) => {
              return <Workout key={workout._id} workout={workout} />;
            })
          ) : (
            <Heading>{workouts.error}</Heading>
          )}
        </Box>
        <Box alignSelf={"start"} mt="10rem">
          <WorkoutForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
