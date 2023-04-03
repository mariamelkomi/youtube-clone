import React from 'react'
import { Stack , Box } from '@mui/material';
import VedioCard from './VedioCard';
import ChannelCard from './ChannelCard';
function Vedios({Vedios , direction}) {
  if(!Vedios?.length) return 'Loading...';
  return (
    
    <>
    <Stack  direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={1}> 
 
      {Vedios?.map((item , idx)=>(
           <Box key={idx}>
             {item.id.videoId && <VedioCard vedio={item}/>}
             {item.id.channelId && <ChannelCard channel={item}/>}
           </Box>
         ))}
         
    </Stack>
    </>
  )
}

export default Vedios
