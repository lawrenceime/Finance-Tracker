'use client';
import { Paper, Typography, List, Box, Divider, Button } from '@mui/material';
import { TransactionItem } from './TransactionItem';
import { Transaction } from 'src/types';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

interface Props {
  transactions: Transaction[];
  onDelete: (id: string) => void;
}

export const TransactionList = ({ transactions, onDelete }: Props) => {
  return (
    <Paper sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recent Transactions
      </Typography>
      <Divider />

      {transactions.length === 0 ? (
        <Box sx={{ py: 10, textAlign: 'center', color: 'text.secondary' }}>
          <ReceiptLongIcon sx={{ fontSize: 48, mb: 2, opacity: 0.3 }} />
          <Typography variant="body1">No transactions yet.</Typography>
          <Typography variant="caption">Add one to see your spending history!</Typography>
        </Box>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {transactions.map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} onDelete={onDelete} />
          ))}
        </List>
      )}
    </Paper>
  );
};