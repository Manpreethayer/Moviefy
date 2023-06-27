import React from 'react'
import { Chip } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { colors } from '../../utils/Colors'
import { clearHistory, clearSpecificHistory, applyHistoryFilter, applyFilters } from '../../redux/Slices/movieSlice'

const FiltersHistory = () => {
    const {filterHistory} =useSelector((store)=>store.movies)
    const dispatch=useDispatch()
  return (
    <>
        { filterHistory.length>0 &&<div style={{color:'white', padding:'16px'}}><strong>Recent Filters:</strong>
            {filterHistory.map((item, index)=>{ return <Chip sx={{color:'white', '& .MuiChip-deleteIcon': {
                color: 'white',
            },'&:hover .MuiChip-deleteIcon': {
                color: 'red', 
            }}} label={JSON.stringify(item)} key={index} variant="outlined" onDelete={()=>{dispatch(clearSpecificHistory(index))}} onClick={()=>{dispatch(applyHistoryFilter(item)); dispatch(applyFilters(item))}} />})}
            <span style={{color:'white', backgroundColor:`${colors.primaryColor}`, padding:'8px', fontSize:'14px', margin:'0 0 0 4px'}}
            onClick={()=>(dispatch(clearHistory()))}
            >Clear All</span>
            </div>
            }   
      </>
    
  )
}

export default FiltersHistory