import React from 'react'
import { Grid, Typography } from '@mui/material'
import { colors } from '../../utils/Colors'

const MoviefyIntro = () => {
  return (
    <Grid container spacing={0} sx={{padding:'16px'}}>
        <Grid item xs={7}>
            <Typography variant="h4" component="h2" sx={{ color:'white'}}>
                 <span style={{color:`${colors.primaryColor}`}}>YOUR FAVOURITE</span>{" online movie search engine".toUpperCase()}
            </Typography>
        </Grid>
        <Grid item xs={5}>
            <Typography variant="p" component="p" sx={{ color:'white'}}>
                    Moviefy is an online movie search engine to find the best movies movies for you. Use our website to 
                    find best movie for you and stream on online platforms like Netflix & Prime Video.
                    <br/>
                    <br/>
                    Filter movies based on release year, language, name, age rating and more.
            </Typography>
        </Grid>
    </Grid>
  )
}

export default MoviefyIntro