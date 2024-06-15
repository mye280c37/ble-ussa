'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/dashboard/components/container/PageContainer';
// components
import RecentTransactions from '@/app/dashboard/components/dashboard-item/RecentTransactions';
import ProductPerformance from '@/app/dashboard/components/dashboard-item/ProductPerformance';

const ProductsManagement = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default ProductsManagement;
