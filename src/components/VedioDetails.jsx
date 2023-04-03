import React from 'react';
import { useState , useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography , Box , Stack } from '@mui/material';
import { fetchFromApi } from '../uti/fetchData';
import Vedios from './Vedios';
import { CheckCircle } from '@mui/icons-material';
function VedioDetails() {
  const [vedioDetaill, setVedioDetaill] = useState([]);
  const [vedios, setVedios] = useState(null);
  const { id } = useParams();
  
  useEffect(()=>{
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data)=> setVedioDetaill(data.items[0]));
    fetchFromApi(`search?part=snippet&relatedToVedioId=${id}&type=vedio`).then((data)=>setVedios(data.items))
  } , [id])
  if(!vedioDetaill?.snippet) return 'Loading...';
  const { snippet : { title , channelId , channelTitle } , statistics :{ viewCount , likeCount } } = vedioDetaill;
  return (
    <Box minHeight='95vh'>
      <Stack direction={{sm:'column' , md:'row'}}>
        <Box flex={1}>
          <Box  sx={{width:'100%', position:'sticky' , top:'86px'}}>
             <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
             <Typography color='white' fontWeight='bold' p={1} variant='h5'>
             {title}
             </Typography>
             <Stack direction='row' justifyContent='space-between' color='white' px={2} py={1}>
                <Link style={{textDecoration:'none'}} to={`/channel/${channelId}`}>
                  <Typography fontWeight='light' variant='h6' color='#C0C0C0'>
                    {channelTitle}
                    <CheckCircle sx={{ fontSize:'13px' , color:'gray' , ml:'5px'}} />
                  </Typography>
                </Link>
                <Stack direction='row' gap='20px' alignItems='center'>
                  <Typography variant='body1' sx={{opacity:'0.8'}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body1' sx={{opacity:'0.8'}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
             </Stack>
          </Box>
        </Box>
        <Box m='auto'  px={2} py={{md:1 , xs:5}} justifyContent='center' alignItems='center'>
           <Vedios Vedios = {vedios} direction='column'/>
        </Box>
      </Stack>
     
    </Box>
  )
}

export default VedioDetails
