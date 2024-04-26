import MovieCard from "./MovieCard";
import { Genre, Movie } from "../utils/types";
import { IconFilterFilled } from "@tabler/icons-react";
import FilterDialog from "./FilterDialog";

type DiscoverMoviesProps = {
  movies: Movie[];
  allGenres: Genre[]
};

export default function DiscoverMovies({ movies, allGenres }: DiscoverMoviesProps) {
  return (
    <div className="min-h-screen bg-gray-950 pt-[18vh] px-24 pb-24">
      <div className="flex gap-8 items-center mb-8">
        <h1 className="text-white text-[2.5vw] overflow-hidden before:block before:h-8 before:w-[0.45rem] before:bg-purple-500 flex items-center gap-4">
          Discover Movies"
        </h1>
      <FilterDialog allGenres={allGenres}></FilterDialog>
      </div>
      
      <div className="grid grid-cols-4 gap-16 text-white">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="flex flex-col gap-4">
              <MovieCard movie={movie} allGenres={allGenres}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
