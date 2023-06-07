import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from "./axios"
import requests from './Requests'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'



function Banner() {
  const [movie, setMovie] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  console.log(movie);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl("")
    } else{
      movieTrailer(null ,{ tmdbId: movie.id })
      .then((url)=>{
        console.log("url is "+url);
        const urlParams=new URLSearchParams(new URL(url).search);
        console.log("urlParamsn"+urlParams);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error)=> console.log(error));
    }
  }


  function truncate(string, n){
    return string?.length > n ? string.substr(0, n-1) + '...': string
  }
  return (
    <header 
     className='banner' 
     style={{
       backgroundSize: "cover",
       backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
       backgroundPosition: "center center"
     }}>

       <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className='banner_button'onClick={() => handleClick(movie)}>Play</button>
          
        </div>
        <h1 className='banner_description'>
          {truncate(movie?.overview, 150)}
        </h1>
       </div>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
       <div className='banner_fadeBottom' />

    </header>
  )
}

export default Banner