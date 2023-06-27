import React from 'react'
import { Chip } from '@mui/material'
import { useSelector } from 'react-redux'


const LanguagesSelected = () => {
    const {filterLanguages}= useSelector((store)=>store.movies);
  return (<>
    {filterLanguages.length>0&&<div style={{color:'white', padding:'16px'}}><strong>Selected Languages:</strong>
    { filterLanguages.map((item)=>{return <Chip key={item} sx={{color:'white', '& .MuiChip-deleteIcon': {
        color: 'white',
      }}} label={item} variant="outlined" />})}</div>
    }
      </>
  )
}

export default LanguagesSelected