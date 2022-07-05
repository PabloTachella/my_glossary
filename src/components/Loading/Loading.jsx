import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './Loading.css'

const Loading = () => {
  return (
    <section className='b-loading--container'>
      <h2 className='b-loading--title'>My Glossary</h2>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress color="inherit" />
      </Box>
    </section>
  )
}

export default Loading