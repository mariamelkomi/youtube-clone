import React from 'react'
import { Typography , Box , CardContent , CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {demoProfilePicture} from '../const/const' 
import { Link } from 'react-router-dom';
function ChannelCard( { channel , marginTop}) {
  return (
    <>
    <Box sx={{borderRadius:'20px',  marginTop , display: 'flex' , width:{ xs : '270px' , md:'300px'} , justifyContent:'center' , alignItems:'center'}}>
      <Link style={{textDecoration:'none'}} to={`/channel/${channel?.id?.channelId}`}>
        <CardContent sx={{display:'flex' , justifyContent:'center', flexDirection:'column', color:'white' , alignItems:'center' , textAlign:'center'}}>
          <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} sx={{borderRadius:'50%' , height:'180px' , width:'270px' , mb:'2px'}}/>
         <Typography margin='10px' fontWeight='100' variant='h6'>
           {channel?.snippet?.title}
           <CheckCircle sx={{color:'gray' , fontSize: 13 , pt:'4px' ,  ml:'5px'}} />
         </Typography>
         {channel?.statistics?.subscriberCount && (
          <Typography color='gray'>
           {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
           </Typography>
         )}
         
        </CardContent>
      </Link>

    </Box>
      
    </>
  )
}

export default ChannelCard
