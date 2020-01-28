import React from "react";
import { Container, Box, Typography } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Rafi Barash's CSCI 5611 Portfolio
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
