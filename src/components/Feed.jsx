import React, { useEffect } from 'react';
import { useState } from 'react';
import { Stack , Typography , Box } from '@mui/material'
import SideBar from './SideBar';
import Vedios from './Vedios';
import { fetchFromApi } from '../uti/fetchData';
function Feed() {
  const [selctedCategory, setselctedCategory] = useState('New');
  const [vedios, setVedios] = useState([]);
  useEffect(() => {
     fetchFromApi(`search?part=snippet&q=${selctedCategory}`).then((data)=>{setVedios(data.items)})
  } , [selctedCategory])
  return (<>
   <Stack  sx={{flexDirection: 'row' }}>
      <Box sx={{width:{lg:'200px' , xs:'150px'}, overflow:'hidden', height:'93vh' , borderRight: '1px solid #3d3d3d' , px:'2px'}}>
       <SideBar selectedCategory = {selctedCategory} setselectedCategory = {setselctedCategory}/>
       <Typography style={{color:'white' , marginTop:'1' , textAlign: 'center'}}>
        Copyright 2022 
        </Typography>  
      </Box>
      <Box p={1} sx={{height:'90vh' , flex:2 , overflowY:'auto'}}>
        <Typography p='5px' variant='h4' fontWeight='bold' mb='2px' style={{color:'white'}}>
         {selctedCategory} <span style={{color:'#F31503'}}>vedios</span>
        </Typography>
        {vedios.length > 0 ? <Vedios Vedios={vedios}/> :''}
        
      </Box>
    </Stack>
  </>
   
  )
}

export default Feed
