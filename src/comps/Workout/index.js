import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";

const Workout = ({ workout }) => {
  return (
    <Card>
      <CardHeader pb="0">
        <Heading
          color={"green.400"}
          fontWeight={"800"}
          textTransform="uppercase"
          fontSize={"2xl"}
          size="md"
        >
          {workout.title}
        </Heading>
      </CardHeader>
      <CardBody pt={"4px"} ml="3px">
        <Box>
          <Heading size="xs" display={"inline-block"}>
            Load(Kg):
          </Heading>
          <Text pt="2" fontSize="sm" display={"inline-block"} ml="3px">
            {workout.load}
          </Text>
        </Box>
        <Box>
          <Heading size="xs" display={"inline-block"}>
            Reps:
          </Heading>
          <Text pt="2" fontSize="sm" display={"inline-block"} ml="3px">
            {workout.reps}
          </Text>
        </Box>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default Workout;
