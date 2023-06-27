import React from 'react'
import { Grid, Box } from '@mui/material'
import Filters from '../../components/Filters/Filters'
import Movies from '../../components/Movies/Movies'
import MoviefyIntro from '../../components/MoviefyIntro/MoviefyIntro'
import PaginationComponent from '../../components/Pagination/Pagination'
import Loader from '../../components/Loader/Loader'
import { useSelector } from 'react-redux'

const Home = () => {
  const {isLoading} = useSelector((store)=>store.movies)
  return (
    <>
    {isLoading?<Loader/>
    :<Box sx={{padding:'2rem 2rem 0 2rem'}}>
      <MoviefyIntro/>
      <Filters/>
      <Grid container spacing={0} sx={{ height:'100vh', padding:'0 0 0 0'}}>
          <Grid item sx={{}}>
              <Movies/>
          </Grid>
      </Grid>
      <PaginationComponent/>
    </Box>}
    </>
  )
}

export default Home