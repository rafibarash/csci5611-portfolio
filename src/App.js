import React from "react";
import { Container, Box, Typography } from "@material-ui/core";
import ProjectTabs from "./components/ProjectTabs";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Box my={4} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Rafi Barash's CSCI 5611 Portfolio
        </Typography>
      </Box>
      <ProjectTabs />
    </Container>
  );
};

export default App;
