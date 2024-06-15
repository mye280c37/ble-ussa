'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/dashboard/components/container/PageContainer';
// components
import SalesOverview from '@/app/dashboard/components/dashboard-item/SalesOverview';
import YearlyBreakup from '@/app/dashboard/components/dashboard-item/YearlyBreakup';
import RecentTransactions from '@/app/dashboard/components/dashboard-item/RecentTransactions';
import ProductPerformance from '@/app/dashboard/components/dashboard-item/ProductPerformance';
import Blog from '@/app/dashboard/components/dashboard-item/Blog';
import MonthlyEarnings from '@/app/dashboard/components/dashboard-item/MonthlyEarnings';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
