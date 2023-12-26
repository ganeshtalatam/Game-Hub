import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading marginBottom={2}>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This Page doesn't exist"
            : "Sorry Unexpected Error Occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
