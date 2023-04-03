import React from 'react'
import { Link } from 'react-router-dom';
import { Typography , Card , CardContent , CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelTitle , demoChannelUrl, demoVideoTitle , demoVideoUrl} from '../const/const';
function VedioCard({vedio:{id:{ videoId },snippet}}) {
  
  return (
    <>
      <Card sx={{width : {xs:'100%', sm:'300px' , md:'280px' }, margin:{xs:'5px' , md:'0px'} , borderRadius:'10px' , boxShadow:'none'}}>
         
         <Link to={videoId?`/vedio/${videoId}`:demoVideoUrl}>
          <CardMedia image={snippet?.thumbnails?.high?.url} sx={{width:{xs:'100%', sm:'300px' , md:'280px'} , height: 180}}/>
        </Link>
        <CardContent sx={{backgroundColor:'#1e1e1e' , height:'105px'}}>
        <Link style={{textDecoration:'none'}} to={videoId?`/vedio/${videoId}`:demoVideoUrl}>
          <Typography variant='subtitle1' color='white' >
            {snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}
          </Typography>
        </Link>
        <Link style={{textDecoration:'none'}} to={snippet?.channelId?`/channel/${snippet?.channelId}`: demoChannelUrl}>
          <Typography variant='subtitle2' color='gray' >
            {snippet?.channelTitle || demoChannelTitle }
            <CheckCircle sx={{color:'gray' , fontSize: 13 , pt:'4px' ,  ml:'5px'}} />
          </Typography>
        </Link>
        </CardContent>
  
      </Card>
    </>
  )
}

export default VedioCard
