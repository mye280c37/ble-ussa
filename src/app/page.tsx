'use client'
import { Box, Container, Typography } from '@mui/material';
// components
import ProductList from './dashboard/components/ProductList';
import ProductPerformance from '@/app/dashboard/components/dashboard-item/ProductPerformance';

const Root = () => {
  return (
    <Container>
    {/* <PageContainer title="Dashboard" description="this is Dashboard"> */}
      <Typography variant="h1" sx={{ pt: 3, pb: 3 }}>App Name</Typography>
      <Box sx={{ height: "90dvh" }}>
        <ProductList />
      </Box>
    {/* </PageContainer> */}
    </Container>
  )
}

export default Root;
