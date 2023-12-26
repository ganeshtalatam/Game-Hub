import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";
import DescriptionList from "../components/DescriptionList";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import GameTrailers from "../components/GameTrailers";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, isError } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (isError) throw Error;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game}></GameAttributes>
      </Box>
      <Box>
        <GameTrailers gameId={game.id}></GameTrailers>
        <GameScreenshots gameId={game.id}></GameScreenshots>
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailPage;
