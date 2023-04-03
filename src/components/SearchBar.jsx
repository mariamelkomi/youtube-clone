import React from 'react'
import { Search} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IconButton, Paper } from '@mui/material';
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handelSubmit = (e) => {
   e.preventDefault();
   if(searchTerm)
   {
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
   }
  }

  return (
    <>
      <Paper onSubmit={handelSubmit} component='form' sx={{ p:'2px', m:'5px', borderRadius:'40px' , border:'1px solid #e3e3e3'}}>
        <input  type="text" placeholder='Search...' className='searchBar' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
      
      <IconButton type='submit' sx={{p:'3px' , color:'red'}}>
        <Search/>
      </IconButton>
      
      </Paper>
      
    </>
  )
}

export default SearchBar
