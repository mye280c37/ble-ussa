'use client'
import { Box, Container } from '@mui/material';
import React from 'react';
// components
import NavAppBar from './components/ElevateAppBar';
import ProductList from './components/ProductList';

const Root = () => {
  return (
    <Box>
      <NavAppBar />
      <Container sx={{ pt: 3 }}>
        <ProductList />
      </Container>
    </Box>
  )
}

export default Root;
