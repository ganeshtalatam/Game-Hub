import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GameGenre = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenre = useGameQueryStore((s) => s.gameQery.genreId);
  const setSelectedGenre = useGameQueryStore((s) => s.setGenreId);
  {
    if (error) return null;
  }
  {
    isLoading && <Spinner />;
  }
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                // textAlign="left"
                // whiteSpace="normal"
                fontWeight={genre.id === selectedGenre ? "bold" : "normal"}
                onClick={() => setSelectedGenre(genre.id)}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGenre;
