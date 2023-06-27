import React from 'react'
import { Pagination, Box, createTheme, ThemeProvider, } from '@mui/material'
import { colors } from '../../utils/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/Slices/movieSlice';

const theme = createTheme({
    palette: {
      primary: {
        main: `${colors.primaryColor}`,
      },
    },
  });

const PaginationComponent = () => {
  const dispatch=useDispatch()
  const {currentPage} = useSelector((store)=>store.movies)
  return (
    <Box sx={{ margin:'1rem 0 2rem 0', display:"flex", justifyContent:"center"}}>
        <ThemeProvider theme={theme}>
            <Pagination count={3} page={currentPage} size="large" color="primary" sx={{ '& .MuiPaginationItem-root': {
          color: 'white', 
        },}} onChange={(event, value)=>dispatch(getMovies(value))}/>
        </ThemeProvider>
    </Box>
  )
}

export default PaginationComponent