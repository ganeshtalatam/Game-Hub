import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const colorChange = score > 75 ? "green" : score > 60 ? "red" : "";
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorScheme={colorChange}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
