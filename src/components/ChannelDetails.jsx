import { Box } from '@mui/system';
import React from 'react'
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../uti/fetchData';
import ChannelCard from './ChannelCard';
import Vedios from './Vedios';
function ChannelDetails() {
 const {id} = useParams();
 const [channelDetails, setChannelDetails] = useState(null);
 const [vedios, setVedios] = useState([])
 useEffect(()=>{
  fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=> setChannelDetails(data?.items[0]));
  fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVedios(data?.items));
 } , [id])
  return (
    <>
    <Box style={{minHeight:'95vh'}}>
        <Box>
            <div style={{background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 35%, rgba(0,212,255,1) 100%)', zIndex:10 , height:'300px'}}/> 
            <div style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
               <ChannelCard channel = { channelDetails } marginTop='-110px'/> 
            </div>
      </Box>
      <Box display='flex' sx={{p:'10px'}}>
        <Box>
          <Vedios Vedios={vedios}/>
        </Box>
      </Box>
    </Box>
      
    </>
  )
}

export default ChannelDetails
