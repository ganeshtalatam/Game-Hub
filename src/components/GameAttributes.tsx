import React from "react";
import { Game } from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import DescriptionList from "./DescriptionList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  console.log(game);
  return (
    <>
      <SimpleGrid columns={2}>
        <DescriptionList task="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DescriptionList>
        <DescriptionList task="Metascore">
          <CriticScore score={game.metacritic}></CriticScore>
        </DescriptionList>
        <DescriptionList task="Genres">
          {game.genres?.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DescriptionList>
        <DescriptionList task="Publishers">
          {game.publishers.map((p) => (
            <Text key={p.id}>{p.name}</Text>
          ))}
        </DescriptionList>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
