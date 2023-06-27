import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const Movies = () => {
  const {filteredMovies }=useSelector((store)=>store.movies)
  //console.log(isLoading, moviesList);
  return (
    <Grid container spacing={0} sx={{padding:'16px', overflow:'scroll', height:'100vh'}}>
        {
            filteredMovies.map((movie)=><MovieCard key={movie?.id} {...movie}/>)
        }
    </Grid>
  )
}

export default Movies