'use client';
import { Box, Typography, LinearProgress, Paper, Tooltip } from '@mui/material';
import { formatCurrency } from 'src/utils';

interface BudgetProgressProps {
  category: string;
  spent: number;
  limit: number;
}

export const BudgetProgress = ({ category, spent, limit }: BudgetProgressProps) => {
  const percentage = Math.min((spent / limit) * 100, 100);
  const isOverBudget = spent > limit;


  const getStatusColor = () => {
    if (isOverBudget) return 'error'; 
    if (percentage > 80) return 'warning'; 
    return 'success'; 
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography variant="body1" fontWeight={600}>
          {category}
        </Typography>
        <Typography variant="body2" color={isOverBudget ? 'error.main' : 'text.secondary'}>
          {formatCurrency(spent)} <small>of</small> {formatCurrency(limit)}
        </Typography>
      </Box>

      <Tooltip title={isOverBudget ? 'Over Budget!' : `${Math.round(percentage)}% used`} arrow>
        <LinearProgress
          variant="determinate"
          value={percentage}
          color={getStatusColor()}
          sx={{
            height: 10,
            borderRadius: 5,
            bgcolor: '#e2e8f0', 
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
            },
          }}
        />
      </Tooltip>
      
      {isOverBudget && (
        <Typography variant="caption" color="error" sx={{ mt: 0.5, display: 'block' }}>
          You have exceeded your {category} limit by {formatCurrency(spent - limit)}
        </Typography>
      )}
    </Box>
  );
};