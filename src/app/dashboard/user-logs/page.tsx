'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/dashboard/components/container/PageContainer';
// components
import RecentTransactions from '@/app/dashboard/components/dashboard-item/RecentTransactions';

const UserLogs = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <RecentTransactions />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default UserLogs;
