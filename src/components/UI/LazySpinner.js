import React from "react";

import { Spinner, Box, Center } from "@chakra-ui/react";

const LazySpinner = () => {
  return (
    <Box>
      <Center>
        <Spinner size="lg" />
      </Center>
    </Box>
  );
};

export default LazySpinner;
