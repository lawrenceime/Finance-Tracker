'use client';
import { Paper, Typography, Box, Divider } from '@mui/material';
import { BudgetProgress } from './BudgetProgress';

interface BudgetSectionProps {
  budgets: Record<string, number>;
  getSpentByCategory: (category: string) => number;
}

export const BudgetSection = ({ budgets, getSpentByCategory }: BudgetSectionProps) => {
  const categories = Object.keys(budgets);

  return (
    <Paper sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Monthly Budgets
      </Typography>
      <Divider sx={{ mb: 3 }} />
      
      <Box>
        {categories.map((category) => (
          <BudgetProgress
            key={category}
            category={category}
            spent={getSpentByCategory(category)}
            limit={budgets[category]}
          />
        ))}
      </Box>
    </Paper>
  );
};