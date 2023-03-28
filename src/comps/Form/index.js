import { Input, FormLabel, Button, Heading, Box } from "@chakra-ui/react";
import { useFormik } from "formik";

const WorkoutForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      load: "",
      reps: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Heading textAlign={"center"} color="teal.500">
        Add Workout
      </Heading>
      <Box
        p={"1rem 2rem"}
        border="1px dotted #777"
        borderRadius={"5px"}
        mt={"10px"}
      >
        <FormLabel>Title</FormLabel>
        <Input
          mb="1rem"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          placeholder="workout name"
          name="title"
          required
        />
        <FormLabel>Load</FormLabel>
        <Input
          mb="1rem"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.load}
          placeholder="weight in kg"
          name="load"
        />
        <FormLabel>Reps</FormLabel>
        <Input
          mb="1rem"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.reps}
          placeholder="no. of reps"
          name="reps"
          required
        />
      </Box>

      <Button
        type="submit"
        display="block"
        m="auto"
        mt={"20px"}
        textAlign={"center"}
        colorScheme={"teal"}
      >
        Add
      </Button>
    </form>
  );
};

export default WorkoutForm;
