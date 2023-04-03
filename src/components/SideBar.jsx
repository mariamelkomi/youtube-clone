import React from 'react'
import { Stack } from '@mui/material';
import {categories} from '../const/const';

function SideBar({selectedCategory,setselectedCategory}) {
  
  return (
    <>
      <Stack className='boxOfSidebar' direction='column' sx={{overflowY:'auto' , height:'93vh'}}>
        {categories.map((category)=>(
          <button className='category-btn'
          onClick={ () => setselectedCategory(category.name)}
          
           style={{background: selectedCategory === category.name && '#F31503' , color:'white'}}
           key={category.name}
          >
            <span style={{color: category.name === selectedCategory ? 'white' : 'red' , marginRight:'10px'}}>{category.icon}</span>
            <span style={{opacity: category.name === selectedCategory ? '1' : '0.7'}}>{category.name}</span>
          </button>
        ))}
      </Stack>
    </>
  )
}

export default SideBar
