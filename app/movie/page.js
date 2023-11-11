"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);

  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

  useEffect(() => {
    async function fetchMovieData() {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_API_KEY}`
      );

      setMovies(res.data.results);
    }
    fetchMovieData();
  }, []);

  return (
    <Wrapper>
      <Text>Popular Movies</Text>
      <MovieList>
        {movies.map((movie) => (
          <MovieWrapper>
            <Image
              src={IMG_BASE_URL + movie.poster_path}
              alt="movie-image"
              width="200"
              height="300"
            />
            <MovieTitle>{movie.title}</MovieTitle>
          </MovieWrapper>
        ))}
      </MovieList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h4`
  font-size: 30px;
  margin: 40px;
`;

const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 350px;
  margin: 30px 20px;
  &:hover {
    cursor: pointer;
  }
`;

const MovieTitle = styled.div`
  font-size: 18px;
`;
