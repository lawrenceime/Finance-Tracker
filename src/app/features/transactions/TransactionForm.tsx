'use client';
import React, { useState } from 'react';
import { 
  Box, Button, TextField, MenuItem, ToggleButton, 
  ToggleButtonGroup, Stack, Typography 
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { CategoryType } from 'src/types';

interface TransactionFormProps {
  onSave: (data: any) => void;
  onClose: () => void;
}

const CATEGORIES: CategoryType[] = ['Food', 'Transport', 'Rent', 'Entertainment', 'Utilities'];

export const TransactionForm = ({ onSave, onClose }: TransactionFormProps) => {
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<CategoryType>('Food');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || !description || !date) return;

    onSave({
      amount: parseFloat(amount),
      category: type === 'income' ? 'Income' : category,
      description,
      date: date.format('YYYY-MM-DD'),
      type,
    });
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Stack spacing={3}>

        <ToggleButtonGroup
          color="primary"
          value={type}
          exclusive
          onChange={(_, newType) => newType && setType(newType)}
          fullWidth
        >
          <ToggleButton value="expense">Expense</ToggleButton>
          <ToggleButton value="income">Income</ToggleButton>
        </ToggleButtonGroup>

        <TextField
          label="Amount"
          type="number"
          fullWidth
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          slotProps={{ htmlInput: { step: "0.01" } }}
        />

        {type === 'expense' && (
          <TextField
            select
            label="Category"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryType)}
          >
            {CATEGORIES.map((cat) => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </TextField>
        )}

        <TextField
          label="Description"
          fullWidth
          required
          placeholder="e.g. Weekly Groceries"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            slotProps={{ textField: { fullWidth: true } }}
          />
        </LocalizationProvider>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', pt: 2 }}>
          <Button onClick={onClose} color="inherit">Cancel</Button>
          <Button type="submit" variant="contained" size="large">
            Add Transaction
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};