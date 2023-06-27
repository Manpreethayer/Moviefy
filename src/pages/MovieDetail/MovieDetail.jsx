import React, { useEffect, useState } from 'react'
import { Box, Typography, Divider, Chip, Grid } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { colors } from '../../utils/Colors';

const MovieDetail = () => {
  const {moviesList} = useSelector((store)=>store.movies);
  const [data, setData] = useState([]);
  const { movieId } = useParams();

  useEffect(()=>{setData(moviesList.filter((item)=>item.id===Number(movieId)))
    
  },[moviesList, movieId])

  return (
    <>{data.length<1?<Loader/>:
    <Box sx={{display:'flex', padding:'24px'}}>
      <Box sx={{flex:1}}>
        <img width='500px' height="300px" style={{objectFit:'cover'}} src={`https://image.tmdb.org/t/p/original${data?.[0]?.backdrop_path}`} alt={data?.[0]?.title}/>
        <Typography variant="p" component="h1" sx={{ color:`${colors.primaryColor}`}}>
         {data?.[0]?.title}
      </Typography>
      <Typography variant="h6" component="h1" sx={{fontSize:'16px', color:'white', margin:'8px 0 0 0'}}>
        <strong>About: </strong>
      {/* <StarRateIcon  fontSize='large' sx={{color:`${colors.primaryColor}`, margin:'0 2px 0 0'}}/> */}
         {data?.[0]?.overview}
      </Typography>
      <Divider sx={{margin:'16px 0 0 0'}}>
        <Chip label="Ratings" sx={{color:'white'}} />
      </Divider>
        <Grid container spacing={2} sx={{padding:'16px'}}>
          <Grid item xs={6}>
          <Typography variant="h6" component="h1" sx={{fontSize:'16px', color:'white', margin:'8px 0 0 0'}}>
        <strong>Votes: </strong>
        {/* <StarRateIcon  fontSize='large' sx={{color:`${colors.primaryColor}`, margin:'0 2px 0 0'}}/> */}
         {data?.[0]?.vote_count}
      </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" component="h1" sx={{fontSize:'16px', color:'white', margin:'8px 0 0 0'}}>
        <strong>Popularity: </strong>
        {/* <StarRateIcon  fontSize='large' sx={{color:`${colors.primaryColor}`, margin:'0 2px 0 0'}}/> */}
         {data?.[0]?.popularity}
      </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" component="h1" sx={{fontSize:'16px', color:'white', margin:'8px 0 0 0'}}>
        <strong>Ratings: </strong>
        {/* <StarRateIcon  fontSize='large' sx={{color:`${colors.primaryColor}`, margin:'0 2px 0 0'}}/> */}
         {data?.[0]?.vote_average}
      </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" component="h1" sx={{fontSize:'16px', color:'white', margin:'8px 0 0 0'}}>
        <strong>18+: </strong>
        {/* <StarRateIcon  fontSize='large' sx={{color:`${colors.primaryColor}`, margin:'0 2px 0 0'}}/> */}
         {(data?.[0]?.adult)===false?'No':'Yes'}
      </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" component="h1" sx={{fontSize:'16px', color:'white', margin:'8px 0 0 0'}}>
        <strong>Released On: </strong>
        {/* <StarRateIcon  fontSize='large' sx={{color:`${colors.primaryColor}`, margin:'0 2px 0 0'}}/> */}
         {data?.[0]?.release_date}
      </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography variant="h6" component="h1" sx={{fontSize:'16px', color:'white', margin:'8px 0 0 0'}}>
        <strong>Language: </strong>
        {/* <StarRateIcon  fontSize='large' sx={{color:`${colors.primaryColor}`, margin:'0 2px 0 0'}}/> */}
         {data?.[0]?.original_language}
      </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{flex:1}}>
      <img width='100%' style={{objectFit:'cover'}} src={`https://image.tmdb.org/t/p/original${data?.[0]?.poster_path}`} alt={data?.[0]?.title}/>
      </Box>
    </Box>
      }
    </>
  )
}

export default MovieDetail