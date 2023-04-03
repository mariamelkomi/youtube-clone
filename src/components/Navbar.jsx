import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../uti/logo.png';
import SearchBar from './SearchBar';
function Navbar() {
  return(<>
  
    <Stack className='navbar' direction="row"
     alignItems='center'
     sx={{ position:'sticky' , top:0 , backgroundColor:'black' , justifyContent:'space-between'}}> 
       <Link to="/" style={{}}>
        <img src={logo} alt="logo" style={{height:37 , padding:'5px' , paddingLeft:'10px'}}/>
       </Link>
       <SearchBar/>
    </Stack> 
    
  
  </>
    
  )
}

export default Navbar
