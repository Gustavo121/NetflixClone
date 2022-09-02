import React from 'react';
import categories, { getMovies } from '../api';
import "./Banner.css";
import { useEffect } from 'react';

function Banner() {
  const [movie, setMovie] = React.useState({});
  const fetchRandomMovie = async () => {
    try {
      const netflixOriginalsCategory = categories.find(
        (category) => category.name === "netflixOriginals"
      );
      const data = await getMovies(netflixOriginalsCategory.path)
      const movies = data?.results;
      const randomIndex = Math.floor(Math.random() * movies.length)
      setMovie(movies[randomIndex]);
    } catch (error) {
      console.log("Banner fetchRandomMovie error: ", error);
    }
  };

  useEffect(() => {
    fetchRandomMovie()
  }, [])
  
  return ( 
    <header 
      className="banner-container" 
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center",
      }}
    ></header>  
  );
}

export default Banner;