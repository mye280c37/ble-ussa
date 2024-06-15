'use client'
import { Box, Container, Typography } from '@mui/material';
// components
import ProductPerformance from '@/app/dashboard/components/dashboard-item/ProductPerformance';

const Root = () => {
  return (
    <Container>
    {/* <PageContainer title="Dashboard" description="this is Dashboard"> */}
      <Typography variant="h1" sx={{ mb: 3, mt: 3 }}>App Name</Typography>
      <Box sx={{ height: "87%" }}>
        <ProductPerformance />
      </Box>
    {/* </PageContainer> */}
    </Container>
  )
}

export default Root;
