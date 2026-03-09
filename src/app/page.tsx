'use client';
import { Container, Typography, Box , Paper, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useFinance } from 'src/hooks/useFinance';
import { SummaryCards } from 'src/features/dashboard/SummaryCards';
import { BudgetSection } from 'src/features/budgets/BudgetSection';
import { AddTransactionDialog } from 'src/features/transactions/AddTransactionDialog';
import { TransactionList } from 'src/features/transactions/TransactionList';

export default function Dashboard() {
  const { balance, totals, budgets, getSpentByCategory , addTransaction , transactions , deleteTransaction } = useFinance();

  return (
    <Box sx={{ py: 4, minHeight: '100vh', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>Finance Snapshot</Typography>
          <AddTransactionDialog onSave={addTransaction} />
        </Stack>

        <SummaryCards 
          balance={balance} 
          income={totals.income} 
          expenses={totals.expenses} 
        />

        <Grid container spacing={4}>
          {/* Left Column: Budgets */}
          <Grid size={{ xs: 12, md: 5 }}>
            <BudgetSection 
              budgets={budgets} 
              getSpentByCategory={getSpentByCategory} 
            />
          </Grid>

          {/* Right Column: Placeholder for Transactions and Charts */}
          <Grid size={{ xs: 12, md: 7 }}>
             <TransactionList 
              transactions={transactions} 
              onDelete={deleteTransaction} 
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
