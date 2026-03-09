'use client';
import { 
  ListItem, ListItemAvatar, Avatar, ListItemText, 
  Typography, IconButton, Box 
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Transaction } from 'src/types';
import { formatCurrency, getCategoryIcon } from 'src/utils';
import dayjs from 'dayjs';

interface Props {
  transaction: Transaction;
  onDelete: (id: string) => void;
}

export const TransactionItem = ({ transaction, onDelete }: Props) => {
  const isIncome = transaction.type === 'income';

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(transaction.id)}>
          <DeleteOutlineIcon color="action" fontSize="small" />
        </IconButton>
      }
      sx={{ 
        borderBottom: '1px solid #f1f5f9',
        '&:last-child': { borderBottom: 'none' }
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: isIncome ? 'success.light' : 'grey.100', color: isIncome ? 'success.main' : 'text.primary' }}>
          {getCategoryIcon(transaction.category)}
        </Avatar>
      </ListItemAvatar>
      
      <ListItemText
        primary={transaction.description}
        secondary={`${transaction.category} • ${dayjs(transaction.date).format('MMM D, YYYY')}`}
        primaryTypographyProps={{ fontWeight: 600 }}
      />

      <Box sx={{ textAlign: 'right', mr: 2 }}>
        <Typography 
          variant="body1" 
          fontWeight={700} 
          color={isIncome ? 'success.main' : 'text.primary'}
        >
          {isIncome ? '+' : '-'}{formatCurrency(transaction.amount)}
        </Typography>
      </Box>
    </ListItem>
  );
};