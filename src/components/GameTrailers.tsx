import useTrailer from "../hooks/useTrailer";

export interface Trailer {
  id: number;
  name: string;
  preview?: string;
  data: { 480: string; max: string };
}

interface Props {
  gameId: number;
}

const GameTrailers = ({ gameId }: Props) => {
  const { data: Trailer, isLoading, error } = useTrailer(gameId);
  if (isLoading) null;
  if (error) throw error;

  const first = Trailer?.results[0];

  return first ? (
    <video src={first?.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailers;
