'use client';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import Grid from "@mui/material/Grid";
import { 
  TrendingUp, 
  TrendingDown, 
  AccountBalanceWallet 
} from '@mui/icons-material';
import { formatCurrency } from 'src/utils/index';

interface SummaryCardsProps {
  balance: number;
  income: number;
  expenses: number;
}

export const SummaryCards = ({ balance, income, expenses }: SummaryCardsProps) => {
  const stats = [
    {
      label: 'Total Balance',
      value: balance,
      icon: <AccountBalanceWallet sx={{ color: 'primary.main' }} />,
      bgColor: 'primary.light',
      color: 'primary.main',
    },
    {
      label: 'Total Income',
      value: income,
      icon: <TrendingUp sx={{ color: 'success.main' }} />,
      bgColor: '#e8f5e9', 
      color: 'success.main',
    },
    {
      label: 'Total Expenses',
      value: expenses,
      icon: <TrendingDown sx={{ color: 'error.main' }} />,
      bgColor: '#ffebee', 
      color: 'error.main',
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {stats.map((stat) => (
        <Grid size={{ xs: 12, md: 4 }} key={stat.label}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Avatar 
              sx={{ 
                bgcolor: stat.bgColor, 
                width: 56, 
                height: 56 
              }}
            >
              {stat.icon}
            </Avatar>
            <Box>
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                {stat.label}
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                {formatCurrency(stat.value)}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};