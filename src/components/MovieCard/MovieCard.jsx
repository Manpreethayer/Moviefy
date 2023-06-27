import React, { useState } from 'react'
import { Paper, Typography, Grid, Box } from '@mui/material'
import { colors } from '../../utils/Colors'
import StarRateIcon from '@mui/icons-material/StarRate';
import { NavLink } from "react-router-dom";

const MovieCard = (props) => {
    //console.log(props)
    const [showContents, setShowContents] = useState(false);
    const {title, poster_path, vote_average, release_date, id}=props
  return (
    <>
    <Grid item xs={12} sm={6} md={3} sx={{
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        ":hover": {
              transform:`scale(1.1)`
            }
        }}
        onMouseEnter={()=>{setShowContents(true)}}
        onMouseLeave={()=>{setShowContents(false)}}
        >
        <NavLink to={`/moviedetail/${id}`}>
        <Paper elevation={0} sx={{margin:'3px', backgroundColor:`${colors.themeDarkSecondary}`} }>
            <img width='100%' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title}/>
            {showContents&&
            <Box sx={{padding:'8px'}}>
                <Box>
                    <Typography variant="p" component="p" sx={{fontSize:'14px', color:'white'}}>
                        <strong > Year: <span style={{color:`${colors.primaryColor}`}}>{release_date?.split('-')?.[0]}</span> </strong>
                    </Typography>
                    <Typography variant="p" component="h2" sx={{fontSize:'16px', color:'white'}}>
                            {title}
                    </Typography>
                </Box>
                <Typography variant="p" component="p" sx={{fontSize:'16px', color:'white',
                 position: 'absolute',
                 top: '50%',
                 left: '50%',
                 transform: 'translate(-50%, -50%)',
                 backgroundColor: 'rgba(0, 0, 0, 0.7)',
                 borderRadius:'16px',
                 padding: '8px',
                 textAlign: 'center'
                    }}>
                        <StarRateIcon fontSize='16px' sx={{color:`${colors.primaryColor}`, margin:'0 2px 0 0'}}/>
                        <strong>{vote_average}</strong>
            </Typography>
            </Box>
            }   
        </Paper>
        </NavLink>
    </Grid>
    </>
  )
}

export default MovieCard