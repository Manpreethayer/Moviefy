import { Button, Grid } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { colors } from '../../utils/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { applyFilterLanguages, applyFilters, resetFilters } from '../../redux/Slices/movieSlice'
import FiltersHistory from './FiltersHistory'
import LanguagesSelected from './LanguagesSelected'


const Filters = () => {
  const searchRef=useRef(null)
  const languageRef=useRef(null)
  const yearRef=useRef(null)
  const dispatch = useDispatch()
  const {moviesList, appliedFilter} = useSelector((store)=>store.movies)
  const selectedLanguages=useRef(new Set());
  let languageOptions=[],yearOptions=[];

  useEffect(()=>{
    searchRef.current.value=appliedFilter.title
    yearRef.current.value=appliedFilter.year
    languageRef.current.value=appliedFilter.language?.[0]
  },[appliedFilter])
 

  return (
    <>
      <Grid container spacing={0} sx={{}}>
        <Grid item xs={3} sx={{ padding:'16px'}}>
        <input
          type="text"
          ref={searchRef}
          placeholder="search movie names..."
          style={{height:'2rem', width:'100%', margin:'0 0 0 0'}}
        />
        </Grid>
        <Grid item xs={2} sx={{ padding:'16px'}}>
        <select name="languages" id="languages" style={{height:'100%', width:'100%', margin:'0 0 0 0'}} ref={languageRef} onChange={()=>{if(languageRef.current.value!=="") {selectedLanguages.current.add(languageRef.current.value); console.log(selectedLanguages.current); dispatch(applyFilterLanguages(Array.from(selectedLanguages.current)))} }}>
          <option value="">Language</option>
          {moviesList.map((movie)=>{
            if(languageOptions.includes(movie.original_language)) return "";
            languageOptions.push(movie.original_language);
            return <option key={movie.original_language} value={movie.original_language}>{movie.original_language}</option>
          })}
        </select>
        </Grid>
        <Grid item xs={2} sx={{ padding:'16px'}}>
        <select name="year" style={{height:'100%', width:'100%', margin:'0 0 0 0'}} ref={yearRef}>
          <option value="">Year</option>
          {moviesList.map((movie)=>{
            if(yearOptions.includes(movie?.release_date?.split('-')?.[0])) return "";
            yearOptions.push(movie?.release_date?.split('-')?.[0]);
            return <option key={movie?.release_date?.split('-')?.[0]} value={movie?.release_date?.split('-')?.[0]}>{movie?.release_date?.split('-')?.[0]}</option>
          })}
        </select>
        </Grid>
        <Grid item xs={5} sx={{ padding:'16px', display:'flex'}}>
        <Button sx={{backgroundColor:`${colors.primaryColor}`, color:'white', height:'100%', flex:1, borderRadius:'0px', margin:'0 2px 0 0'}} onClick={
          ()=>dispatch(applyFilters({"title":searchRef.current.value,'language':Array.from(selectedLanguages.current),'year':yearRef.current.value}))
        }>Apply Filters</Button>
        <Button sx={{backgroundColor:'white', color:`${colors.primaryColor}`, height:'100%',flex:1, borderRadius:'0px', margin:'0 0 0 2px'}} onClick={()=>dispatch(resetFilters())}>Reset</Button>
        </Grid>
      </Grid>
      <LanguagesSelected />
      <FiltersHistory/>
      </>
  )
}

export default Filters