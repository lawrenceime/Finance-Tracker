'use client';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  Tooltip, Legend 
} from 'recharts';
import { Transaction } from 'src/types';
import { formatCurrency } from 'src/utils';

interface Props {
  transactions: Transaction[];
}


const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export const SpendingChart = ({ transactions }: Props) => {
  const theme = useTheme();


  const expenseData = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((acc: any[], tx) => {
      const existing = acc.find((item) => item.name === tx.category);
      if (existing) {
        existing.value += tx.amount;
      } else {
        acc.push({ name: tx.category, value: tx.amount });
      }
      return acc;
    }, []);

  const totalSpent = expenseData.reduce((sum, item) => sum + item.value, 0);

  // Handle empty state
  if (expenseData.length === 0) {
    return (
      <Paper sx={{ p: 3, height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="text.secondary">Add expenses to see breakdown</Typography>
      </Paper>
    );
  }

  return (
    <Paper sx={{ p: 3, height: '100%', position: 'relative' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Spending Breakdown</Typography>
      
      <Box sx={{ width: '100%', height: 300, position: 'relative' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={expenseData}
              innerRadius={70} 
              outerRadius={90}
              paddingAngle={5}
              dataKey="value"
              animationBegin={0}
              animationDuration={1200}
            >
              {expenseData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => typeof value === 'number' ? formatCurrency(value) : ''}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>


        <Box
          sx={{
            position: 'absolute',
            top: '44%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            pointerEvents: 'none'
          }}
        >
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            TOTAL SPENT
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            {formatCurrency(totalSpent)}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};