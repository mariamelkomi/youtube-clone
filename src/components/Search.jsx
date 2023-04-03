import React, { useEffect } from 'react';
import { useState } from 'react';
import { Typography , Box } from '@mui/material'
import Vedios from './Vedios';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../uti/fetchData';
function Search() {
  const { searchTerm } = useParams();
  const [vedios, setVedios] = useState([]);
  useEffect(() => {
     fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>{setVedios(data.items)})
  } , [searchTerm])
  return (<>
    <Box p={1} sx={{height:'90vh' , flex:2 , overflowY:'auto'}}>
        <Typography p='5px' variant='h4' fontWeight='bold' mb='2px' style={{color:'white'}}>
         Search results for :  <span style={{color:'#F31503'}}>{searchTerm}</span> vedios
        </Typography>
        {vedios.length > 0 ? <Vedios Vedios={vedios}/> :''}
        
      </Box>
  </>
   
  )
}

export default Search
