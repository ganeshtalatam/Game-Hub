import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import React from "react";
import GameGenre from "../components/GameGenre";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import Gamegrid from "../components/Gamegrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem paddingX="5px">
          <GameGenre />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={2}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <Gamegrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
