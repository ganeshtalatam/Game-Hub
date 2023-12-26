import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  task: string;
  children: ReactNode | ReactNode[];
}

const DescriptionList = ({ task, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {task}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DescriptionList;
